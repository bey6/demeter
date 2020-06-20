const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')

function downloadPromise(repo, path) {
  return new Promise((resolve, reject) => {
    try {
      download(repo, path, (err) => {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports.clone = async function (repo, path) {
  // one line print
  const process = ora(`${chalk.cyanBright('cloning...')}\r\n`)
  process.start()
  try {
    await downloadPromise(repo, path)
    console.log('')
    console.log(`✔️${chalk.greenBright(' ok.')}`)
  } catch (error) {
    // process.fail('fail to clone')
    console.log('')
    console.log(`\r\n❌${chalk.redBright(' fail to clone.')}`)
  } finally {
    process.stop()
  }
}
