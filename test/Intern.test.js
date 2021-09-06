const Intern = require('../lib/Intern.js')

test('Can set school via constructor', () => {
  const school = 'UCLA'
  const intern = new Intern('Foo', 1, 'test@test.com', school)
  expect(intern.school).toBe(school)
})

test('Can get school via getSchool()', () => {
  const getSchool = 'UCLA'
  const intern = new Intern('Foo', 1, 'test@test.com', getSchool)
  expect(intern.getSchool()).toBe(getSchool)
})

test('getRole() should return "Intern"', () => {
  const getRole = 'Intern'
  const intern = new Intern()
  expect(intern.getRole()).toBe(getRole)
})