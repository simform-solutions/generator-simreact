import React, { Component } from 'react'
import { connect } from 'react-redux'
import './<%= name %>.scss'

class <%= name %> extends Component {
  state = {}
  render() {
    return (
      <div><%= name %> works!</div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>)
