/** Describes measured values in which the confined space is considered safe to enter */
export interface Measurement {
  /** The name of the value */
  name: string

  /** The maximum value that is allowed */
  max?: number

  /** The minimum value that is allowed */
  min?: number

  /** The unit of the measurement. */
  unit: string

  /**
   * Describes what the value is saying and how to optain the value. The
   * description might include the device used to measure, the location from
   * which the readout can be optained
   */
  description: string
}
