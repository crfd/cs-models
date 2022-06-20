import { Contact } from './Contact'

export enum UserRole {
  /** Has additional privilidges to the User */
  Admin = 0,

  /**
   * Official of the fire department without advanced permissions of those of a
   * administrator
   */
  User = 1,

  /** Only has access to the worker application */
  Worker = 2
}

/** Export of all user roles */
export const AllUserRoles = [UserRole.Admin, UserRole.User, UserRole.Worker]

/**
 * Returns the UserRole for the provided key. If the provided key is not a valid
 * key inside the UserRole enum the function will return undefined
 */
export function userRoleFromKey(key: string): UserRole | undefined {
  try {
    return UserRole[key as keyof typeof UserRole]
  } catch {
    return undefined
  }
}

/** The Firebase representation of a user. */
export interface User {
  /** The unique identifier of the associated Firebase auth user */
  uid: string

  /**
   * This is the role of the user. It matches the role defined in the custom
   * firebase auth user claims
   */
  role: UserRole

  /** Detailed information about the user. */
  contact: Contact

  /** An optional description to further explain the user's role, his position, etc. */
  description?: string

  /** The date at which the user last logged in */
  lastLogin?: Date

  /** If set the user is deleted and should be handled accordingly. */
  deleted?: Date
}

/**
 * Checks if the provided object conforms to the FirebaseUser interface.
 *
 * @returns Boolean value.
 */
export function isFirebaseUser(obj: any): obj is User {
  return 'uid' in obj && 'contact' in obj
}

/**
 * Typesafe way of creating a FirebaseUser object.
 *
 * @param uid The unique identifier of the associated Firebase auth user.
 * @param contact The detailed information about the user.
 * @param description An optional description to further explain the user's
 *   role, his position, etc.
 * @returns The FirebaseUser object.
 */
export function createFirebaseUser(
  uid: string,
  role: UserRole,
  contact: Contact,
  description?: string
): User {
  return {
    uid,
    role,
    contact,
    description
  }
}
