import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  min-height: 200px;
  margin: 10px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background-color: ${props => props.color};
  padding: 5px;
`

export const Container = styled.div`
  height: 100%;
  cursor: pointer;

  button {
    margin-left: auto;
  }
`

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`

export const Header = styled.div`
  textarea {
    font-weight: bold;
  }
`

export const TextContainer = styled.div`
  margin: 10px;
  padding-left: 5px;
  color: #202124;
`

export const StyledTextarea = styled(TextareaAutosize)`
  width: 98.5%;
  margin: 10px 0 0 3px;
  border-radius: 12px;
  resize: none;
  cursor: pointer;
  padding: 0 0 5px 5px;
  color: #202124;
  overflow: hidden;
`

export const PinButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin: 7px 5px 0 0;

  img {
    padding: 5px;
  }

  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`

export const ColorPalette = styled.div`
  min-height: 10px;
  min-width: 10px;
  margin: 8px 5px 0 8px;
  flex: 1;
`
export const Color = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  border: ${({ selected }) =>
    selected ? '1px solid black' : '1px solid lightgray'};
  margin: 0 2px;

  &:hover {
    border: 1px solid black;
  }
`

export const ArchivedButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin: 7px 5px 0 0;
  padding-left: 1px;

  img {
    padding: 5px;
  }

  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`

export const DeleteButton = styled.button`
  padding: 10px;
  margin-right: 5px;
  border-radius: 4px;
  background-color: transparent;
  width: 80px;
`
