import { IsString, MinLength } from 'class-validator';

export class AuthDto {
  @MinLength(1)
  @IsString()
  login: string;

  @MinLength(1)
  @IsString()
  password: string;
}
