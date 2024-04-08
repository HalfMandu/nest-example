import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    console.log('Signing in, checking username/password...');
    const user = await this.usersService.findOne(username);
    console.log(user.password);
    console.log(pass);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    console.log('User entered PW matches stored PW, granting token...');
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
