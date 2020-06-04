import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;

  h2 {
    margin: 10px 0;
    text-align: center;
  }

  p {
    margin-top: 10px;
    text-align: center;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  margin: 5px 0;
  border: 1px solid lightgray;
`

export const SubmitButton = styled.button`
  padding: 10px;
  /* margin-right: 5px; */
  border-radius: 4px;

  &:hover {
    background-color: rgba(95, 99, 104, 0.039);
  }
`
