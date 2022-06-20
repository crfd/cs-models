import { DocumentReference } from 'firebase/firestore'
import { Contact } from './Contact'
import { Hazard } from './Hazard'

/**
 * The type of rescue that was performed. The types stem from the disertation of
 * Jason Selman, Jeffrey Spickett, Janis Jansz and Benjamin Mullins.
 *
 * "**Confined space rescue: A proposed procedure to reduce the risks**"
 *
 * See: https://www.sciencedirect.com/science/article/abs/pii/S0925753518312566
 */
export enum RescueType {
  /** The resuce was not nessesary as it was a false alarm. */
  FalseAlarm = 0,

  /**
   * Least dangerous rescue. The entrants evacuate or exit the confined space
   * without assistance.
   */
  SelfRescue = 1,

  /** Entrants are removed from the confined space by a retrival system by the attendant. */
  NonEntryRescue = 2,

  /**
   * Most dangerous rescue. At least one rescuer must enter the confined space
   * and make contact with the entrans to perform the resuce.
   */
  EntryRescue = 3
}

/** The injury for a single person. */
/** TODO: Has to link a device report */
export interface Injury {
  /** A detailed description of the injury. */
  description: string

  /** The person injured. */
  person: Contact

  /** The hazards that have been identified as the reason for the injury. */
  dueTo: Hazard[]

  /** If possible the approimate time at which the injury has occured can be stored. */
  occuredAt?: Date

  /** Has the injury been fatal? */
  fatal: boolean
}

/**
 * As soon as an emergency is declared a emergency report is created. As the
 * rescue might be ongoing the report might be incomplete and asked to be filled
 * out after the operation has been completed.
 */
export interface EmergencyReport {
  /** The dispatcher or worker that called out the emergency. */
  createdByUser: DocumentReference

  /** Rescures involved in the emergency. This might be rescuers, attendants or bystanders. */
  rescuers?: Contact[]

  /** Any inquiries that happend to any of the people involved. */
  injuries?: Injury[]

  /** What type of rescure was performed. */
  type?: RescueType

  /** A detailed report and resolution of what happend, what equipment got used. */
  description?: string

  /** Any documents that might be needed to be stored further describing the operation. */
  documents: Document[]

  /** The date and time the resuce started. */
  recoveryStartedAt?: Date

  /** The date and time the resuce ended. */
  recoveryEndedAt?: Date
}
