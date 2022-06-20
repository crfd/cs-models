import { Measurement } from './Measurement'

/** A general categorization of hazards one might encounter in a confined space. */
export enum HazardCategory {
  Physical = 'physical',
  Biological = 'biological',
  Chemical = 'chemical',
  Electrial = 'electrical',
  Ergonomical = 'ergonomical',
  Psychological = 'psychological',

  /** A hazard that is not covered by any predefined category */
  Other = 'other'
}

/**
 * A hazard describes a single identifiable source of danger. Each object holds
 * information on how to identify the issue and possible strategies to reduce
 * the danger of the particular hazard.
 */
export interface Hazard {
  /**
   * The overall category of the hazard.
   *
   * @example
   *   physical - The hazard is a physical hazard
   */
  category: HazardCategory

  /**
   * A granular description of the hazard.
   *
   * @example
   *   moving machinery
   */
  name: string

  /** A more descriptive depiction of the hazard. */
  description: string

  /**
   * Possible steps to mitigate the hazard. This can either be a textual
   * explaination or a measurement that has to be taken.
   */
  mitigation: string[]

  /** Parameters in which the hazard is considered safe. */
  measurements: Measurement[]

  /**
   * Any equipment that might be used or required by either the entrants or the
   * emergency responders
   */
  safetyEquipments: {
    /** The safety equipment used by the entrants of the confined space. */
    entrant: string[]

    /**
     * Lists additional rescue equipment that is different from the safety
     * equipment used by the entrant. In case the array is empty it is assumed
     * that rescuers are using the same equipment as the entrant.
     */
    rescuer: string[]
  }
}
