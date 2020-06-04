import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai'
import { BsArchiveFill, BsArchive } from 'react-icons/bs'
import { editNote } from 'store/actions/notes.actions'
import {
  StyledTextarea,
  SubmitButton,
  Form,
  PinButton,
  ColorPalette,
  Color,
  ButtonGroup,
  FormContainer,
  ArchivedButton
} from './FullSizeCard.styled'

const colors = [
  '#ffffff',
  '#aecbfa',
  '#fff475',
  '#ccff90',
  '#f28b82',
  '#fbbc04'
]

export const FullSizeCard = ({ note }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [pinned, setPinned] = useState(note.pinned)
  const [title, setTitle] = useState(note.title)
  const [description, setDescription] = useState(note.description)
  const [color, setColor] = useState(note.color)
  const [archived, setArchived] = useState(note.archived)

  const createNote = () => {
    if (archived) {
      dispatch(
        editNote({
          title,
          description,
          color,
          pinned: false,
          archived,
          id: note.id
        })
      )
    } else {
      dispatch(
        editNote({
          title,
          description,
          color,
          pinned,
          archived,
          id: note.id
        })
      )
    }

    history.goBack()
  }

  const onColorChange = e => {
    e.preventDefault()
    setColor(e.target.getAttribute('color'))
  }

  const onTitleChange = ({ target: { value } }) => setTitle(value)

  const onDescriptionChange = ({ target: { value } }) => setDescription(value)

  const handleSubmit = e => {
    e.preventDefault()
    createNote()
  }
  const onArchived = e => {
    e.preventDefault()
    setArchived(prevState => !prevState)
  }

  const onPinNote = e => {
    e.preventDefault()
    setPinned(prevState => !prevState)
  }

  return (
    <FormContainer>
      <Form color={color} onSubmit={handleSubmit}>
        <StyledTextarea
          placeholder='Введите заголовок'
          onChange={onTitleChange}
          value={title}
        />
        <>
          <StyledTextarea
            placeholder='Заметка...'
            onChange={onDescriptionChange}
            value={description}
          />
          <ButtonGroup>
            <ColorPalette>
              {colors.map((item, idx) => (
                <Color
                  color={item}
                  onClick={onColorChange}
                  key={idx}
                  selected={item === color}
                />
              ))}
            </ColorPalette>
            <ArchivedButton onClick={onArchived}>
              {archived ? <BsArchiveFill size={16} /> : <BsArchive size={16} />}
            </ArchivedButton>
            <PinButton onClick={onPinNote} pinned={pinned}>
              {pinned ? (
                <AiFillPushpin size={22} />
              ) : (
                  <AiOutlinePushpin size={22} />
                )}
            </PinButton>
            <SubmitButton type='submit'>Закрыть</SubmitButton>
          </ButtonGroup>
        </>
      </Form>
    </FormContainer>
  )
}

FullSizeCard.propTypes = {
  note: PropTypes.objectOf(PropTypes.object)
}
