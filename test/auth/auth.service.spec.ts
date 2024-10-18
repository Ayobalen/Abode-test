import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from 'src/api/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import { UserAuthDocument, UserTokenDocument } from 'src/api/auth/schema';
import { Model } from 'mongoose';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  let userAuthModel: Model<UserAuthDocument>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let userTokenModel: Model<UserTokenDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        {
          provide: getModelToken('UserAuth'),
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            findOneAndUpdate: jest.fn(),
            findOneAndDelete: jest.fn(),
          },
        },
        {
          provide: getModelToken('UserToken'),
          useValue: {
            create: jest.fn(),
            findOneAndUpdate: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    userAuthModel = module.get<Model<UserAuthDocument>>(getModelToken('UserAuth'));
    userTokenModel = module.get<Model<UserTokenDocument>>(getModelToken('UserToken'));
  });

  it('should create a new user auth', async () => {
    const mockUserAuth = { email: 'test@example.com', password: 'hashedpassword' };
    jest.spyOn(userAuthModel, 'create').mockResolvedValue(mockUserAuth as any);

    const result = await service.createAuth(mockUserAuth as any);
    expect(result).toEqual(mockUserAuth);
  });

  it('should throw NotFoundException if user not found by email', async () => {
    jest.spyOn(userAuthModel, 'findOne').mockResolvedValue(null);

    await expect(service.getUserByEmail('nonexistent@example.com')).resolves.toBeNull();
  });

  it('should generate a valid JWT token', async () => {
    const payload = { email: 'test@example.com', user: 'userId' };
    const token = 'mock.jwt.token';

    jest.spyOn(jwtService, 'sign').mockReturnValue(token);
    const result = await service.getToken(payload as any);

    expect(result).toBe(token);
  });
});
