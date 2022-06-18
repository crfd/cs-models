import * as crfd from '../src'

describe('contact-creation', () => {
  it('import/export successfull', () => {
    expect(crfd.createContact('André', 'email@example.com')).toEqual({
      name: 'André',
      email: 'email@example.com'
    } as crfd.Contact)
  })
})

describe('contact-type-check', () => {
  it('matches', () => {
    expect(
      crfd.isContact(crfd.createContact('André', 'email@example.com'))
    ).toEqual(true)
  })

  it('does not match', () => {
    expect(crfd.isContact({})).toEqual(false)
  })
})
