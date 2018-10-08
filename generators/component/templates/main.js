import React, { Fragment } from 'react'
import MediaQuery from 'react-responsive'
import <%= name1 %> from './<%= name1 %>'
import <%= name2 %> from './<%= name2 %>'

export default () => {
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={768}>
        <<%= name1 %>/>
      </MediaQuery>
      <MediaQuery minDeviceWidth={769}>
        <<%= name2 %>/>
      </MediaQuery>
    </Fragment>
  )
}
