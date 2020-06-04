import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { FullSizeCard } from 'components/molecules'

const Note = () => {
  const { id } = useParams()
  const note = useSelector(
    state => state.notes.notes.filter(n => n.id === +id)[0]
  )
  return <FullSizeCard note={note} />
}

export default Note
