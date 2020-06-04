import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai'
import { BsArchiveFill, BsArchive } from 'react-icons/bs'
import { useOutsideClick } from 'services/useOutsideClick'
import { addNote } from 'store/actions/notes.actions'
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
} from './NoteForm.style'

const colors = [
  '#ffffff',
  '#aecbfa',
  '#fff475',
  '#ccff90',
  '#f28b82',
  '#fbbc04'
]

export const NoteForm = () => {
  const dispatch = useDispatch()

  const [hidden, setHidden] = useState(true)
  const [pinned, setPinned] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('#ffffff')
  const [archived, setArchived] = useState(false)

  const handleOpen = () => setHidden(false)

  const createNote = () => {
    if (archived) {
      dispatch(
        addNote({
          title,
          description,
          color,
          pinned: false,
          archived
        })
      )
    } else
      dispatch(
        addNote({
          title,
          description,
          color,
          pinned,
          archived
        })
      )
  }

  const onColorChange = e => {
    e.preventDefault()
    setColor(e.target.getAttribute('color'))
  }

  const onTitleChange = ({ target: { value } }) => setTitle(value)

  const onDescriptionChange = ({ target: { value } }) => setDescription(value)

  const clearForm = () => {
    setTitle('')
    setDescription('')
    setColor('#ffffff')
    setPinned(false)
    setArchived(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (title !== '' || description !== '') {
      createNote()
      clearForm()
    }
  }

  const onPinNote = e => {
    e.preventDefault()
    setPinned(prevState => !prevState)
  }
  const onArchived = e => {
    e.preventDefault()
    setArchived(prevState => !prevState)
  }

  const handleFormClose = () => {
    setHidden(true)

    if (title !== '') {
      createNote()
      clearForm()
    }
  }

  const formRef = useOutsideClick(handleFormClose)

  return (
    <FormContainer>
      <Form ref={formRef} color={color} onSubmit={handleSubmit}>
        <StyledTextarea
          placeholder='Введите заголовок'
          onClick={handleOpen}
          onChange={onTitleChange}
          value={title}
        />
        {!hidden && (
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
                {archived ? (
                  <BsArchiveFill size={16} />
                ) : (
                    <BsArchive size={16} />
                  )}
              </ArchivedButton>
              <PinButton onClick={onPinNote}>
                {pinned ? (
                  <AiFillPushpin size={22} />
                ) : (
                    <AiOutlinePushpin size={22} />
                  )}
              </PinButton>
              <SubmitButton type='submit'>Закрыть</SubmitButton>
            </ButtonGroup>
          </>
        )}
      </Form>
    </FormContainer>
  )
}
