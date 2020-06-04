import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineSearch } from 'react-icons/ai'
import { useOutsideClick } from 'services/useOutsideClick'

import {
  Input,
  SearchInputContainer,
  ColorSelect,
  Color,
  Container,
  DischargeButton
} from './SearchInput.style'

export const SearchInput = ({ takeSearchValue, takePickedColor }) => {
  const [selectedColorHidded, setSelectedColorHidden] = useState(true)
  const [pickedColor, setPickedColor] = useState('')

  const onSearchChange = e => {
    takeSearchValue(e.target.value)
  }

  const showColorSelect = () => {
    setSelectedColorHidden(true)
  }

  const onPickedColor = e => {
    setPickedColor(e.target.getAttribute('color'))
    takePickedColor(e.target.getAttribute('color'))
  }

  const onDischarge = () => {
    setPickedColor('')
    takePickedColor('')
  }

  const colors = [
    '#ffffff',
    '#aecbfa',
    '#fff475',
    '#ccff90',
    '#f28b82',
    '#fbbc04'
  ]

  const panelRef = useOutsideClick(showColorSelect)

  return (
    <Container ref={panelRef}>
      <SearchInputContainer>
        <AiOutlineSearch size={18} />
        <Input
          placeholder='Поиск заметок'
          onChange={onSearchChange}
          onClick={() => setSelectedColorHidden(false)}
        />
      </SearchInputContainer>
      <ColorSelect hidden={selectedColorHidded}>
        {colors.map((item, idx) => (
          <Color
            color={item}
            onClick={onPickedColor}
            key={idx}
            selected={item === pickedColor}
          />
        ))}
        <DischargeButton onClick={onDischarge}>Сбросить цвет</DischargeButton>
      </ColorSelect>
    </Container>
  )
}

SearchInput.propTypes = {
  takeSearchValue: PropTypes.func,
  takePickedColor: PropTypes.func
}
