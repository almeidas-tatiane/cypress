const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImI5OWRlMDRhLWI5ZDYtNDg0ZC05YmJmLTY3YzQzOGNmMmU5OC0xNzc0NTUzNjQyMTYxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYTJhZDg1ZmQtYjhmNy00YzYzLWFmNmEtYjU0YWFmOWQyNDYzIiwidHlwZSI6InQifQ.-mMGgDERcOS81CawX5hkr9yiB3VwzGgPn0Ajs9Pnsoc'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})