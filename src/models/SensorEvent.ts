// TODO: Include more information, like what kind of value exceeded the threshold
export enum SensorEventType {
  /** To manually trigger an emergency. */
  DeclareEmergency,

  /** A high acceleration was detected. This might indicate a collision or a fall. */
  HighAcceleration,

  /** The device detected a abnoramly high heart rate. */
  HighHearthRate,

  /** The device detected an abnoramly low heart rate. */
  LowHeartRate,

  /** Some other sensor exceeded a threshold. */
  MeasurementExceeded
}

/**
 * Is a special event that can be triggered by a device. Depending on the
 * provided SensorEventType the application might interact differently with the
 * gathered information
 */
export interface SensorEvent {
  /** The type of the sensor event. */
  type: SensorEventType

  /** An optional value associated with the sensor event. */
  value?: number

  /** A human readable description of the event. */
  description?: string
}

/** Checks that the provided object conforms to the SensorEvent interface */
export function isSensorEvent(obj: any): obj is SensorEvent {
  return 'type' in obj
}
