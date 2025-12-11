import { OmitType } from '@nestjs/mapped-types'
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { User } from '../entities/user.entity'
import { UserRole } from '../entities/user-role.enum'

export class CreateUserDto extends OmitType(User, ['id'] as const) {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsEmail()
	email: string

	@IsEnum(UserRole, {
		message: 'Valid role required.',
	})
	role: UserRole
}
