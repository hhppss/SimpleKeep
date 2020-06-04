import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import { deleteNote } from 'store/actions/notes.actions'
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai'
import { BsArchiveFill, BsArchive } from 'react-icons/bs'
import {
  Card,
  Header,
  DeleteButton,
  Container,
  ArchivedButton,
  PinButton,
  ButtonsGroup,
  ColorPalette,
  Color,
  StyledTextarea
} from './NoteCard.style'

export const NoteCard = ({
  note: { title, description, color, id, archived, pinned },
  setArchive,
  setPin,
  newColor
}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isArchived] = useState(archived)
  const [isPinned] = useState(pinned)

  const colors = [
    '#ffffff',
    '#aecbfa',
    '#fff475',
    '#ccff90',
    '#f28b82',
    '#fbbc04'
  ]

  const onArchived = () => {
    const newNote = {
      title,
      description,
      color,
      id,
      archived: !isArchived,
      pinned: false
    }
    setArchive(newNote)
  }
  const onPinned = () => {
    const newNote = {
      title,
      description,
      color,
      id,
      archived: false,
      pinned: !isPinned
    }
    setPin(newNote)
  }

  const onColorChange = e => {
    const newNote = {
      title,
      description,
      color: e.target.getAttribute('color'),
      id,
      archived,
      pinned
    }
    newColor(newNote)
  }

  const onDelete = () => {
    dispatch(deleteNote(id))
  }

  const handleRedirect = () => history.push(`/notes/${id}`)

  return (
    <Card color={color}>
      <Container onClick={handleRedirect}>
        <Header>
          <StyledTextarea readOnly value={title} />
        </Header>
        <StyledTextarea readOnly value={description} />
      </Container>
      <ButtonsGroup>
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
          {isArchived ? <BsArchiveFill size={16} /> : <BsArchive size={16} />}
        </ArchivedButton>
        <PinButton onClick={onPinned}>
          {isPinned ? (
            <AiFillPushpin size={22} />
          ) : (
              <AiOutlinePushpin size={22} />
            )}
        </PinButton>
        <DeleteButton onClick={onDelete}>Удалить</DeleteButton>
      </ButtonsGroup>
    </Card>
  )
}

NoteCard.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.number,
    archived: PropTypes.bool,
    pinned: PropTypes.bool
  }),
  setArchive: PropTypes.func,
  setPin: PropTypes.func,
  onSetColor: PropTypes.func,
  newColor: PropTypes.func
}
