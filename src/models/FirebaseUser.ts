import { Contact } from './Contact'

/** The Firebase representation of a user. */
export interface FirebaseUser {
  /** The unique identifier of the associated Firebase auth user */
  uid: string

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
export function isFirebaseUser(obj: any): obj is FirebaseUser {
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
  contact: Contact,
  description?: string
): FirebaseUser {
  return {
    uid,
    contact,
    description
  }
}
