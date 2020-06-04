import React from 'react'
import PropTypes from 'prop-types'

import { IoMdArchive } from 'react-icons/io'
import { GoLightBulb } from 'react-icons/go'
import { Container, NavBar, StyledNavLink } from './LeftBar.style'

export const LeftBar = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <NavBar>
        <StyledNavLink to='/notes'>
          <GoLightBulb size={24} />
          <span>Все заметки</span>
        </StyledNavLink>
        <StyledNavLink to='/archive'>
          <IoMdArchive size={24} />
          <span>Архив</span>
        </StyledNavLink>
      </NavBar>
    </Container>
  )
}

LeftBar.propTypes = {
  isOpen: PropTypes.bool.isRequired
}
