import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Email is incorrect' })
	email: string;

	@IsString()
	password: string;
}
