import { Test, TestingModule } from '@nestjs/testing';
import { AuthProvider } from 'src/api/auth/auth.provider';
import { AuthService } from 'src/api/auth/auth.service';
import { UserService } from 'src/api/user/user.service';
import { UtilService } from 'src/helpers';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UserDocument } from 'src/api/user/schema/user.schema'; 
import mongoose from 'mongoose'; 
import { ConfigService } from '@nestjs/config';

describe('AuthProvider', () => {
  let provider: AuthProvider;
  let authService: AuthService;
  let userService: UserService;
  let utilService: UtilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthProvider,
        {
          provide: AuthService,
          useValue: {
            getUserByEmail: jest.fn(),
            getToken: jest.fn(),
          },
        },
        {
          provide: UserService,
          useValue: {
            getUser: jest.fn(),
          },
        },
        {
          provide: UtilService,
          useValue: {
            comparePassword: jest.fn(),
          },
        },
      ],
    }).compile();

    provider = module.get<AuthProvider>(AuthProvider);
    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    utilService = module.get<UtilService>(UtilService);
  });

  // Helper function to create mock UserDocument
  function createMockUser(overrides: Partial<UserDocument> = {}): UserDocument {
    return {
      _id: new mongoose.Types.ObjectId().toString(),
      email: 'test@example.com',
      password: 'hashedpassword',
      phone_number: '1234567890',
      confirm_password: 'hashedpassword',
      previousPasswords: [],
      deleted: false,
      userAuthId: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
      toJSON: jest.fn().mockReturnThis(),
      toObject: jest.fn().mockReturnThis(),
      ...overrides,
    } as unknown as UserDocument;
  }

  it('should throw BadRequestException if email does not exist', async () => {
    jest.spyOn(authService, 'getUserByEmail').mockResolvedValue(null);

    await expect(
      provider.login({ email: 'test@example.com', password: '1234' }),
    ).rejects.toThrow(BadRequestException);
  });

  it('should throw NotFoundException if user is not found', async () => {
    const mockUser = createMockUser();
    jest.spyOn(authService, 'getUserByEmail').mockResolvedValue(mockUser as any);
    jest.spyOn(userService, 'getUser').mockResolvedValue(null);

    await expect(
      provider.login({ email: 'test@example.com', password: '1234' }),
    ).rejects.toThrow(NotFoundException);
  });

  it('should return access and refresh tokens on successful login', async () => {
    const mockUser = createMockUser();

    jest.spyOn(authService, 'getUserByEmail').mockResolvedValue(mockUser as any);
    jest.spyOn(userService, 'getUser').mockResolvedValue(mockUser);
    jest.spyOn(utilService, 'comparePassword').mockResolvedValue(true);
    jest.spyOn(authService, 'getToken').mockResolvedValue('access.token');

    const result = await provider.login({
      email: 'test@example.com',
      password: '1234',
    });

    expect(result.data.userAuth.access_token).toBe('access.token');
  });
});
