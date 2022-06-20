import { GPSLocation } from './GPSLocation'
import { SensorEvent } from './SensorEvent'

/** A capture point represents data from one specific device at a single point in time */
export interface CapturePoint {
  /** The timestamp of the capture point */
  timestamp: Date

  /** Defines wether the capture point is considered a test */
  isTest: boolean

  /**
   * In case the device posses a GPS sensor the coordinates at which the device
   * was can be stored.
   */
  location?: GPSLocation

  /** The battery level of the device at the time the capture point was created. */
  batteryLevel?: number

  /**
   * The signal strength of the device between `0` and `1`. In case the value is
   * `0` the device was offline at that time.
   */
  signalStrength?: number

  /**
   * Any extrem event that has been detected by the device. In case the event is
   * of type DeclareEmergency an emergency will be automatically triggered. All
   * other kind of events might indicate an emergency and notify the disptacher
   * that he might need to check on the health of the workers
   */
  events?: SensorEvent[]
}

/** Checks that the provided object conforms to the CapturePoint interface */
export function isCapturePoint(obj: any): obj is CapturePoint {
  return 'timestamp' in obj && 'isTest' in obj
}
