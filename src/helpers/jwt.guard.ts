import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { decode } from 'jsonwebtoken';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Req } from 'src/interfaces';

@Injectable()
export class JwtGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Use GqlExecutionContext to access the GraphQL request
    const ctx = GqlExecutionContext.create(context);
    const req: Req = ctx.getContext().req; // Access the request from the context
    const accessToken = req.headers['authorization']?.split(' ')[1];

    if (!accessToken) {
      throw new UnauthorizedException('Invalid token');
    }

    const data: any = decode(accessToken);
    if (!data) {
      throw new UnauthorizedException('Invalid token');
    }
    req.user = data; 
    return true;
  }
}
