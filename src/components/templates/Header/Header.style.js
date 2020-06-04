import styled from 'styled-components'

export const Container = styled.div`
  min-height: 60px;
  width: 100vw;
  border-bottom: 1px solid #dadce0;
  padding: 8px 20px;
  display: flex;
  align-items: center;

  h3 {
    margin: 0 60px 0 20px;
  }

  img {
    margin-left: 12px;
  }
`

export const Title = styled.h3`
  color: #5f6368;
`

export const BurgerButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 10px;

  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`

export const AuthContent = styled.div`
  margin-left: auto;
  height: 100%;

  button {
    margin-left: 10px;
    padding: 5px;
    border-radius: 4px;
  }

  button:hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`
