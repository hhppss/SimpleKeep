import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  min-width: 200px;
  width: 280px;
  border-radius: 2px;
  height: 100%;
  margin-left: ${({ isOpen }) => (isOpen ? '0' : '-280px')};
  transition: margin-left 300ms ease-in-out;
`

export const NavBar = styled.ul`
  list-style: none;
  padding: 10px 10px 10px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
  width: 100%;
  border-radius: 0 12px 12px 0;
  color: #202124;
  font-weight: 600;

  span {
    margin-left: 20px;
  }

  &:not(.active):hover {
    background-color: #f1f3f4;
  }
`
