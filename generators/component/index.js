const Generator = require('yeoman-generator')
const _ = require('lodash')
const chalk = require('chalk')

module.exports = class extends Generator {
  writing() {
    let componentName = _.get(this.args, '[0]', 'MyComponent')
    componentName = _.upperFirst(componentName)
    const path = `${this.destinationPath()}/src/components/${componentName}`
    this.spawnCommand('mkdir', ['-p', path])
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(`${path}/${componentName}.js`),
      {
        name: componentName
      }
    )
    this.fs.copy(
      this.templatePath('component.css'),
      this.destinationPath(`${path}/${componentName}.css`)
    )
  }
}
