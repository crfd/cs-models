/** A GPS location object that stores additional information besides the coordinates. */
export interface GPSLocation {
  /** The latitudanal component of the coordinate */
  lat: number

  /** The longitudanal component of the coordinate */
  lng: number

  /** The accuracy of the GPS sensor in meters */
  accuracy: number

  /** The elevation above the see in meters */
  elevation?: number
}

/** Checks that the provided object conforms to the GPSLocation interface */
export function isGPSLocation(obj: any): obj is GPSLocation {
  return 'lat' in obj && 'lng' in obj && 'accuracy' in obj
}
