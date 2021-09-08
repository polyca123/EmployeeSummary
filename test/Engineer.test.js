const Engineer = require('../lib/Engineer.js')

test('Can set GitHub account via', () => {
  const github = 'GithubUser'
  const engineer = new Engineer('Foo', 1, 'test@test.com', github)
  expect(engineer.github).toBe(github)
})

test('Can get GitHub username via getGithub()', () => {
  const getGithub = 'GitHubUser'
  const engineer = new Engineer('Foo', 1, 'test@test.com', getGithub)
  expect(engineer.getGithub()).toBe(getGithub)
})

test('getRole() should return "Engineer"', () => {
  const getRole = 'Engineer'
  const engineer = new Engineer()
  expect(engineer.getRole()).toBe(getRole)
})