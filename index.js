#!/usr/bin/env node
const command = require('./src/commands/index.js')
const chalk = require('chalk')
const shell = require('shelljs')

if (!shell.which('git')) {
  console.log(`sorry, this script requires ${chalk.yellowBright('git')}`)
  shell.exit(1)
}

if (!shell.which('node')) {
  console.log(`sorry, this script requires ${chalk.yellowBright('node')}`)
  shell.exit(1)
}

command.initialCommand()
