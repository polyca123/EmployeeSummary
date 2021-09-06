const Manager = require('../lib/Manager.js')

test('Can set office number via constructor argument', () => {
  const officeNumber = 100
  const manager = new Manager('Foo', 1, 'test@test.com', officeNumber)
  expect(manager.officeNumber).toBe(officeNumber)
})

test('Can get office number via getOffice()', () => {
  const getOfficeNumber = 100
  const manager = new Manager('Foo', 1, 'test@test.com', getOfficeNumber)
  expect(manager.getOfficeNumber()).toBe(getOfficeNumber)
})

test('getRole() should return "Manager"', () => {
  const getRole = 'Manager'
  const manager = new Manager()
  expect(manager.getRole()).toBe(getRole)
})