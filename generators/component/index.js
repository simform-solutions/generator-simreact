const Generator = require('yeoman-generator')
const _ = require('lodash')
const chalk = require('chalk')

module.exports = class extends Generator {
  writing() {
    let componentName = _.get(this.args, '[0]', 'MyComponent')
    let type = _.get(this.args, '[1]', null)
    componentName = _.upperFirst(componentName)
    const path = `${this.destinationPath()}/src/components/${componentName}`
    this.spawnCommand('mkdir', ['-p', path])
    if(type) {
      ['Mobile', 'Desktop'].forEach(t => {
        this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath(`${path}/${componentName}${t}.js`),
          {
            name: `${componentName}${t}`
          }
        )
    
        this.fs.copyTpl(
          this.templatePath('component.stories.js'),
          this.destinationPath(`${path}/${componentName}${t}.stories.js`),
          {
            name: `${componentName}${t}`
          }
        )
    
        this.fs.copy(
          this.templatePath('component.scss'),
          this.destinationPath(`${path}/${componentName}${t}.scss`)
        )
      })
      this.fs.copyTpl(
        this.templatePath('main.js'),
        this.destinationPath(`${path}/${componentName}Main.js`),
        {
          name1: `${componentName}Mobile`,
          name2: `${componentName}Desktop`
        }
      )
      return
    }
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(`${path}/${componentName}.js`),
      {
        name: componentName
      }
    )

    this.fs.copyTpl(
      this.templatePath('component.stories.js'),
      this.destinationPath(`${path}/${componentName}.stories.js`),
      {
        name: componentName
      }
    )

    this.fs.copy(
      this.templatePath('component.scss'),
      this.destinationPath(`${path}/${componentName}.scss`)
    )
  }
}
