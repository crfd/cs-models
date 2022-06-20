import { DocumentReference } from 'firebase/firestore'

import { CapturePoint } from './CapturePoint'

/** An object that links a device reference with an array of capture points */
export interface Capture {
  /** A reference to the device the was responsible for the captured data point */
  device: DocumentReference

  /** An array of capture points produced by the device */
  capturePoints: CapturePoint[]
}

/** Checks that the provided object conforms to the Capture interface */
export function isCapture(obj: any): obj is Capture {
  return 'device' in obj && 'capturePoints' in obj
}
