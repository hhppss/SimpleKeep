import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const StyledTextarea = styled(TextareaAutosize)`
  padding: 10px;
  width: 100%;
  margin: 5px 0;
  border-radius: 12px;
  resize: none;
`

export const SubmitButton = styled.button`
  padding: 10px;
  margin-right: 5px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(95, 99, 104, 0.039);
  }
`

export const ButtonGroup = styled.div`
  display: flex;
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
export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
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

export const Form = styled.form`
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  padding: 5px;
  border-radius: 5px;
  width: 500px;
  background-color: ${props => props.color};
`
