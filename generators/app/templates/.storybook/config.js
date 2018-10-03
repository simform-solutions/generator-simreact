import { configure } from '@storybook/react'

const req = {
  ...require.context('../src/components', true, /\.stories\.js$/),
  ...require.context('../src/containers', true, /\.stories\.js$/)
}

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
