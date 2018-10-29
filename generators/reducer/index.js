const Generator = require('yeoman-generator')
const _ = require('lodash')

module.exports = class extends Generator {
  writing() {
    let reducerName = _.get(this.args, '[0]', 'default')
    let isSagaIncluded = _.get(this.args, '[1]', null)
    reducerName = _.camelCase(reducerName)
    const path = `${this.destinationPath()}/src`
    if (isSagaIncluded === 'saga') {
      this.fs.copyTpl(
        this.templatePath('saga.js'),
        this.destinationPath(`${path}/sagas/${reducerName}.js`),
        {
          name: reducerName,
          constName: _.upperCase(reducerName),
          typename: `${_.capitalize(reducerName)}Types`
        }
      )
    }
    this.fs.copyTpl(
      this.templatePath('reducer.js'),
      this.destinationPath(`${path}/store/reducers/${reducerName}.js`),
      {
        name: reducerName,
        constName: _.upperCase(reducerName),
        typename: `${_.capitalize(reducerName)}Types`
      }
    )
  }
}
