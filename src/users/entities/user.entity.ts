import { UserRole } from './user-role.enum'

export class User {
	id: number
	name: string
	email: string
	role: UserRole
}
