const Engineer = require('../lib/Engineer.js')

test('Can set GitHub account via', () => {
  const gitHubUser = 'GitHubUser'
  const engineer = new Engineer('Foo', 1, 'test@test.com', gitHubUser)
  expect(engineer.gitHub).toBe(gitHubUser)
})

test('Can get GitHub username via getGithub()', () => {
  const getGitHub = 'GitHubUser'
  const engineer = new Engineer('Foo', 1, 'test@test.com', getGitHub)
  expect(engineer.getGitHub()).toBe(getGitHub)
})

test('getRole() should return "Engineer"', () => {
  const getRole = 'Engineer'
  const engineer = new Engineer()
  expect(engineer.getRole()).toBe(getRole)
})