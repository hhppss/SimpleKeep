import React from 'react'
import PropTypes from 'prop-types'
import { NoteForm } from 'components/molecules'
import { NotesList } from 'components/organisms'
import { Container } from './Notes.style'

const Notes = ({ search, isOpen, pickedColor }) => {
  return (
    <>
      <Container>
        <NoteForm />
        <NotesList search={search} isOpen={isOpen} pickedColor={pickedColor} />
      </Container>
    </>
  )
}

Notes.propTypes = {
  search: PropTypes.string,
  isOpen: PropTypes.bool,
  pickedColor: PropTypes.string
}

export default Notes
