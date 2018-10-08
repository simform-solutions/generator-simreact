const Generator = require('yeoman-generator')
const _ = require('lodash')

module.exports = class extends Generator {
  writing() {
    let containerName = _.get(this.args, '[0]', 'MyContainer')
    containerName = _.upperFirst(containerName)
    const path = `${this.destinationPath()}/src/containers/${containerName}`
    this.spawnCommand('mkdir', ['-p', path])
    this.fs.copyTpl(
      this.templatePath('container.js'),
      this.destinationPath(`${path}/${containerName}.js`),
      {
        name: containerName
      }
    )

    this.fs.copy(
      this.templatePath('container.scss'),
      this.destinationPath(`${path}/${containerName}.scss`)
    )
  }
}
