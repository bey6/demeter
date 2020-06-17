#!/usr/bin/env node
const program = require('commander')
const figlet = require('figlet')
const chalk = require('chalk')
const cloneFromGithub = require('download-git-repo')

program.version(require('./package.json').version)

program
  .command('create <name>')
  .description('create your project')
  .action((name) => {
    try {
      console.log('start to clone...')
      cloneFromGithub('bey6/athena.git', 'src', { clone: true }, (err) => {
        if (err) return Promise.reject(err)
        else return Promise.resolve('success')
      })
    } catch (error) {
      return Promise.reject(error)
    } finally {
      console.log('finished.')
    }
  })

console.log(
  chalk.greenBright(
    figlet.textSync(
      'Demeter',
      {
        font: 'Larry 3D 2',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      },
      (err, data) => {
        if (err) {
          console.dir(err)
          return
        }
        console.log(data)
      }
    )
  )
)
console.log(process.argv)
program.program.parse(process.argv)
