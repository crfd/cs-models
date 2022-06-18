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
export const allUserRoles = [UserRole.Admin, UserRole.User, UserRole.Worker]
