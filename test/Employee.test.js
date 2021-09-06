const Employee = require('../lib/Employee.js');

test('Can instantiate Employee instance', () => {
  const employee = new Employee()
  expect(typeof (employee)).toBe('object')
})

test('Can set name via constructor', () => {
  const employee = new Employee('Alice')
  expect(employee.name).toBe('Alice')
})

test('Can set id via constructor', () => {
  const employee = new Employee('Alice', '100')
  expect(employee.id).toBe('100')
})

test('Can set email via constructor', () => {
  const employee = new Employee('Alice', '100', 'Alice@gmail.com')
  expect(employee.email).toBe('Alice@gmail.com')
})

test('Can get name via getName()', () => {
  const employee = new Employee('Alice')
  expect(employee.getName()).toBe('Alice')
})

test('Can get id via getId()', () => {
  const employee = new Employee('Alice', '100')
  expect(employee.getId()).toBe('100')
})

test('Can get email via getEmail()', () => {
  const employee = new Employee('Alice', '100', 'Alice@gmail.com')
  expect(employee.getEmail()).toBe('Alice@gmail.com')
})

test('getRole() should return "Employee"', () => {
  const employee = new Employee()
  expect(employee.getRole()).toBe('Employee')
})
