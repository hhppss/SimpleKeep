import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from 'store/actions/notes.actions'

const initialState = {
  notes: []
}

export const notesReducer = (state = initialState, { type, payload }) => {
  const id = state.notes.length - 1
  switch (type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          {
            ...payload,
            id: id + 1
          },
          ...state.notes
        ]
      }
    case EDIT_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes.map(note => (note.id === payload.id ? payload : note))
        ]
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(item => item.id !== payload)
      }
    default:
      return state
  }
}
