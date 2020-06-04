import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { NoteCard } from 'components/molecules'
import { editNote } from 'store/actions/notes.actions'
import { NotesContainer, Category, StyledMasonry } from './NotesList.style'



export const NotesList = ({ search, pickedColor }) => {

  const dispatch = useDispatch()

  const { notes } = useSelector(state => state.notes)

  const searchFilter = (notesArray, searchValue, pickColor) => {
    if (searchValue.length === 0 && pickColor === '') {
      return notesArray
    }
    if (searchValue.length === 0 && pickColor !== '') {
      return notesArray.filter(note => {
        return note.color === pickColor
      })
    }
    if (searchValue.length !== 0 && pickColor !== '') {
      return notesArray.filter(note => {
        return (
          (note.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 &&
            note.color === pickColor) ||
          (note.description.toLowerCase().indexOf(searchValue.toLowerCase()) >
            -1 &&
            note.color === pickColor)
        )
      })
    }
    return notesArray.filter(note => {
      return (
        note.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
        note.description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      )
    })
  }

  const setArchive = newNote => {
    dispatch(editNote(newNote))
  }
  const setPin = newNote => {
    dispatch(editNote(newNote))
  }
  const newColor = newNote => {
    dispatch(editNote(newNote))
  }

  const filteredNotes = searchFilter(notes, search, pickedColor)

  return (
    <NotesContainer>
      {/* pinned notes */}
      {filteredNotes.filter(note => note.pinned).length !== 0 && (
        <Category>Закрепленные</Category>
      )}
      <StyledMasonry breakpointCols={4}>
        {filteredNotes
          .filter(note => note.pinned && !note.archived)
          .map(note => (
            <NoteCard
              key={note.id}
              note={note}
              setArchive={setArchive}
              setPin={setPin}
              newColor={newColor}
            />
          ))}
      </StyledMasonry>
      {/* not pinned notes */}
      {filteredNotes.filter(note => !note.pinned && !note.archived).length !==
        0 && <Category>Другие заметки</Category>}
      <StyledMasonry breakpointCols={4}>
        {
          filteredNotes
            .filter(note => !note.pinned && !note.archived)
            .map(note => (
              <NoteCard
                key={note.id}
                note={note}
                setArchive={setArchive}
                setPin={setPin}
                newColor={newColor}
              />
            ))
        }
      </StyledMasonry>
    </NotesContainer>
  )
}

NotesList.propTypes = {
  search: PropTypes.string,
  isOpen: PropTypes.bool,
  pickedColor: PropTypes.string
}
