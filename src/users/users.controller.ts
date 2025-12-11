/* eslint-disable prettier/prettier */
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	ParseIntPipe,
	ValidationPipe
} from '@nestjs/common'

import { UsersService } from './users.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { UserRole } from './entities/user-role.enum'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

	@Get()
	findAllUsers(@Query('role') role?: UserRole) {
		return this.usersService.findAllUsers(role)
	}

	@Get(':id')
	findOneUser(@Param('id', ParseIntPipe) id: number) {
		return this.usersService.findOneUser(id)
	}

	@Post()
	createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
		return this.usersService.createUser(createUserDto)
	}

	@Patch(':id')
	updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
		return this.usersService.updateUser(id, updateUserDto)
	}

	@Delete(':id')
	deleteUser(@Param('id', ParseIntPipe) id: number) {
		return this.usersService.deleteUser(id)
	}
}
