'use strict'
const Generator = require('yeoman-generator')
const commandExists = require('command-exists')
const _ = require('lodash')
const chalk = require('chalk')
const yosay = require('yosay')
const emoji = require('node-emoji')

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        chalk.blue(`Let's scaffold your react project ${emoji.get('tada')}`)
      )
    )

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of you Project',
        default: 'Sample App'
      },
      {
        type: 'input',
        name: 'version',
        message: 'The initial version of your Project',
        default: '0.0.1'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description',
        default: 'A sample React Project'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: ''
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  // createDirectory() {
  //   const folderName = _.kebabCase(_.deburr(this.props.projectName))
  //   this.createDirectory(folderName)
  //   return folderName
  // }

  writing() {
    const folderName = _.kebabCase(_.deburr(this.props.projectName))
    this.spawnCommand('mkdir', [folderName])
    this.destinationRoot(folderName)
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: _.kebabCase(_.deburr(this.props.projectName)),
        version: this.props.version,
        description: this.props.description,
        author: this.props.author,
        ghUser: this.props.ghUser,
        license: this.props.license
      }
    )

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      {
        name: this.props.projectName,
        description: this.props.description
      }
    )

    this.fs.copy(
      this.templatePath('_eslintrc'),
      this.destinationPath('.eslintrc')
    )

    this.fs.copy(
      this.templatePath('_eslintignore'),
      this.destinationPath('.eslintignore')
    )

    this.fs.copy(
      this.templatePath('_prettierrc'),
      this.destinationPath('.prettierrc')
    )

    this.fs.copy(
      this.templatePath('_prettierignore'),
      this.destinationPath('.prettierignore')
    )

    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    )

    this.fs.copy(this.templatePath('src/'), this.destinationPath('src/'))
    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'),
      {
        description: this.props.description,
        name: this.props.projectName
      }
    )
    this.fs.copy(
      this.templatePath('public/favicon.ico'),
      this.destinationPath('public/favicon.ico')
    )
    this.fs.copy(
      this.templatePath('public/manifest.json'),
      this.destinationPath('public/manifest.json')
    )
    this.fs.copy(this.templatePath('config/'), this.destinationPath('config/'))
    this.fs.copy(
      this.templatePath('scripts/'),
      this.destinationPath('scripts/')
    )

    this.fs.copy(
      this.templatePath('.storybook/'),
      this.destinationPath('.storybook/')
    )
  }

  install() {
    // this.installDependencies()
    commandExists('yarn', (err, yes) => {
      const command = yes ? 'yarn' : 'npm'

      this.log(
        `\n---\nNearly done! All that's left now is to run ${chalk.green(
          `${command} install`
        )}. Here goes... ${emoji.get('v')}\n---\n`
      )
      this.spawnCommand(command, ['install'])
    })
  }
}
