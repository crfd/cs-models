import { DocumentReference } from 'firebase/firestore'

import { Contact } from './Contact'

// TODO: Add description
export interface Contractor {
  /** The name of the contractor. */
  name: string

  /** A description of the contractor. What is his/her purpose? */
  description: string

  /** Any contacts associated with this contractor. */
  contacts: Contact[]

  /** An array of confined spaces listed under this contractor. */
  spaces: DocumentReference[]

  /** An array of users that are associated with this contractor. */
  workers: DocumentReference[]

  /**
   * Any documents that are associated with this contractor. Like the contract
   * between the fire department and the contractor.
   */
  documents: Document[]
}
