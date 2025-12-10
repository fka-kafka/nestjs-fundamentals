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
} from '@nestjs/common'
import { UsersService } from './users.service'
import type {  UserDTO, PartialUserDTO } from './users.service' 

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

	@Get()
	findAllUsers(@Query('role') role?: string) {
		return this.usersService.findAllUsers(role)
	}

	@Get(':id')
	findOneUser(@Param('id') id: string) {
		return this.usersService.findOneUser(+id)
	}

	@Post()
	createUser(@Body() userCreate: UserDTO) {
		return this.usersService.createUser(userCreate)
	}

	@Patch(':id')
	updateUser(@Param('id') id: string, @Body() userUpdate: PartialUserDTO) {
		return this.usersService.updateUser(+id, userUpdate)
	}

	@Delete(':id')
	deleteUser(@Param('id') id: string) {
		return this.usersService.deleteUser(+id)
	}
}
