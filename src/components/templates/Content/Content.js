import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './Content.style'

export const Content = ({ children }) => {
  return <Container>{children}</Container>
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}
