import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SearchInput } from 'components/molecules'
import logoImg from 'assets/images/logo.png'
import { AuthContext } from 'services/firebase/auth'
import { app } from 'services/firebase/base'
import { BurgerButton, Title, Container, AuthContent } from './Header.style'

export const Header = ({
  handleSidebarOpen,
  takeSearchValue,
  takePickedColor
}) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <Container>
      <BurgerButton onClick={handleSidebarOpen}>
        <AiOutlineMenu size={24} />
      </BurgerButton>
      <img src={logoImg} alt='' />
      <Link to='/notes'>
        <Title>Менеджер заметок</Title>
      </Link>
      <SearchInput
        takeSearchValue={takeSearchValue}
        takePickedColor={takePickedColor}
      />
      <AuthContent>
        {!currentUser && (
          <Link to='/login'>
            <button type='button'>Login</button>
          </Link>
        )}
        {currentUser && currentUser.email}
        {currentUser && (
          <button type='button' onClick={() => app.auth().signOut()}>
            Sign Out
          </button>
        )}
      </AuthContent>
    </Container>
  )
}

Header.propTypes = {
  handleSidebarOpen: PropTypes.func,
  takeSearchValue: PropTypes.func,
  takePickedColor: PropTypes.func
}
