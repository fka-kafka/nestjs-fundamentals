/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import userData from './users.json'
import { User } from './entities/user.entity'
import { UserRole } from './entities/user-role.enum'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  private users: User[] = userData as unknown as User[]

  findAllUsers(role?: UserRole) {
    if (role) {
      return this.users.filter(user => user.role === role)
    }

    return this.users
  }

  findOneUser(id: User['id']) {
    const user = this.users.find(user => user.id === id)
    return user
  }

  createUser(createUserDto: CreateUserDto) {
    const sortedUsers = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
      id: sortedUsers[0].id + 1,
      ...createUserDto,
    }
    this.users.push(newUser)
    return newUser
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
    if (user.id === id) {
      return { ...user, ...updateUserDto }
    }
    return user
  })
    return this.findOneUser(id)
  }

  deleteUser(id: number) {
    const deletedUser = this.findOneUser(id)
    this.users = this.users.filter(user => user.id !== id)
    return deletedUser
  }
}
