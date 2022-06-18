export enum UserRole {
  /** Has additional privilidges to the User */
  Admin = 0,

  /**
   * Official of the fire department without advanced permissions of those of a
   * administrator
   */
  User = 1,

  /** Only has access to the worker application */
  Worker = 2,
}

/** The permission order of each of the roles */
export const userRoleOrder = [UserRole.Admin, UserRole.User, UserRole.Worker];
