import { UserRole } from './UserRole'

export interface NewUserFrame {
  role: UserRole
  email: string
  name: string
  userDescription?: string
}

export function isNewUserFrame(obj: any): obj is NewUserFrame {
  return 'role' in obj && 'email' in obj && 'name' in obj
}

export function createNewUserFrame(
  role: UserRole,
  email: string,
  name: string,
  userDescription?: string
): NewUserFrame {
  return {
    role,
    email,
    name,
    userDescription
  }
}
