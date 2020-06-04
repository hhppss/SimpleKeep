import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  background-color: #f1f3f4;
  padding: 10px 16px;
  border-radius: 12px;
  max-width: 720px;
`

export const Input = styled.input`
  width: 100%;
  margin-left: 12px;
  padding: 4px;
`

export const ColorSelect = styled.div`
  border-radius: 12px;
  /* background-color: #f1f3f4; */
  margin-left: 10px;
  margin-top: 10px;
`

export const Color = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  border: ${({ selected }) =>
    selected ? '1px solid black' : '1px solid lightgray'};
  margin: 0 2px;

  &:hover {
    border: 1px solid black;
  }
`

export const Container = styled.div`
  display: flex;
`

export const DischargeButton = styled.button`
  width: 150px;
  height: 30px;
  background-color: rgba(95, 99, 104, 0.039);
  border-radius: 12px;
  margin: 0 2px;
  position: relative;
  bottom: 5px;

  :hover {
    background-color: lightgray;
  }
`
