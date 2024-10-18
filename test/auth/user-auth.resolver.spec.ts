import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthResolver } from 'src/api/auth/auth.resolver';
import { AuthProvider } from 'src/api/auth/auth.provider';
import { AuthService } from 'src/api/auth/auth.service';

describe('UserAuthResolver', () => {
  let resolver: UserAuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserAuthResolver,
        {
          provide: AuthProvider,
          useValue: { login: jest.fn() },
        },
        {
          provide: AuthService,
          useValue: { createAuth: jest.fn() },
        },
      ],
    }).compile();

    resolver = module.get<UserAuthResolver>(UserAuthResolver);
  });

  it('should return hello message', () => {
    expect(resolver.hello()).toBe('Hello, GraphQL!');
  });
});
