import React from 'react'
import PropTypes from 'prop-types'
import { ArchiveList } from 'components/organisms'
import { Container } from './Archive.style'

export const Archive = ({ search, pickedColor }) => {
  return (
    <Container>
      <ArchiveList search={search} pickedColor={pickedColor} />
    </Container>
  )
}

Archive.propTypes = {
  search: PropTypes.string,
  pickedColor: PropTypes.string
}

export default Archive
