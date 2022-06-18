import { UserRole } from './UserRole'

export interface NewUserRequestBody {
  role: UserRole
  email: string
  name: string
  userDescription?: string
}

export function isNewUserRequestBody(obj: any): obj is NewUserRequestBody {
  return 'role' in obj && 'email' in obj && 'name' in obj
}

export function createNewUserRequestBody(
  role: UserRole,
  email: string,
  name: string,
  userDescription?: string
): NewUserRequestBody {
  return {
    role,
    email,
    name,
    userDescription
  }
}
