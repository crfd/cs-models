import { Assessment } from './Assessment'

// TODO: Add description
export interface ConfinedSpace {
  /** A unique identifier for the confined space. */
  id: string

  /** A string representation that describes the confined space. */
  name: string

  /** A detailed description of the confined space. */
  description: string

  /** Any documents that further describe the confined space, its layout, its hazards etc. */
  documents: Document[]

  /** An array of past hazard assessments of the confined space. */
  assessments: Assessment[]
}
