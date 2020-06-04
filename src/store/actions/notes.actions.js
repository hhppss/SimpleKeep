export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'

export const addNote = newNote => ({
  type: ADD_NOTE,
  payload: newNote
})

export const editNote = updatedNote => ({
  type: EDIT_NOTE,
  payload: updatedNote
})

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: id
})
