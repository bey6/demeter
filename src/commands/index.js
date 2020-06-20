const program = require('commander')
const create = require('./create.js')

module.exports.initialCommand = function () {
  // register command
  function registerCommand({ command, description, action }) {
    program.command(command).description(description).action(action)
  }

  // register create command
  registerCommand(create)

  // preset version command.
  program.version(require('../../package.json').version)

  program.program.parse(process.argv)
}
