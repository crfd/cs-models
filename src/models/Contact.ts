/**
 * Is a object which does not get directly stored to firebase, but in instead
 * gets used as copies inside of other objects. This will ensure that the
 * contact data at that instance of object creation gets captured.
 */
export interface Contact {
  name: string
  email: string
  phone?: string
  address?: {
    street?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  }
  birthday?: Date
  imageURL?: string
  heightMeters?: number
  weightKilograms?: number
}

/** Checks that the provided object conforms to the Contact type */
export function isContact(obj: any): obj is Contact {
  return 'name' in obj && 'email' in obj && 'phone' in obj
}

/** Typesafe way to create a contact object */
export function createContact(
  name: string,
  email: string,
  phone?: string,
  address?: {
    street?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  },
  birthday?: Date,
  imageURL?: string,
  heightMeters?: number,
  weightKilograms?: number
): Contact {
  return {
    name,
    email,
    phone,
    address,
    birthday,
    imageURL,
    heightMeters,
    weightKilograms
  }
}
