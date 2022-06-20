import { UserRole } from '../User'

// TODO: Add description
export interface NewUserFrame {
  role: UserRole
  email: string
  name: string
  userDescription?: string
}

// TODO: Add description
export function isNewUserFrame(obj: any): obj is NewUserFrame {
  return 'role' in obj && 'email' in obj && 'name' in obj
}

// TODO: Add description
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
