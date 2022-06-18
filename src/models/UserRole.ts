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
