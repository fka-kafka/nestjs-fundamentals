/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import userData from './users.json'

export interface User {
  name: string
  id: number
  email: string
  role: string
}

export type UserDTO = Omit<User, 'id'>
export type PartialUserDTO = Partial<Omit<User, 'id'>>

@Injectable()
export class UsersService {
  private users: User[] = userData

  findAllUsers(role?: User['role']) {
    if (role) {
      return this.users.filter(user => user.role === role)
    }

    return this.users
  }

  findOneUser(id: User['id']) {
    const user = this.users.find(user => user.id === id)
    return user
  }

  createUser(newUserData: UserDTO) {
    const sortedUsers = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
      id: sortedUsers[0].id + 1,
      ...newUserData,
    }
    this.users.push(newUser)
    return newUser
  }

  updateUser(id: number, userToUpdate: PartialUserDTO) {
    this.users = this.users.map((user) => {
    if (user.id === id) {
      return { ...user, ...userToUpdate }
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
