import React, { useState } from 'react'
import { AuthProvider } from 'services/firebase/auth'
import { Header, LeftBar, Content } from 'components/templates'
import { Routes } from './App.routes'

export const AppContainer = () => {
  const [isOpen, setOpen] = useState(true)

  const handleSidebarOpen = () => setOpen(prevState => !prevState)

  const [searchValue, setSearchValue] = useState('')
  const [pickedColor, setPickedColor] = useState('')

  const takeSearchValue = value => {
    setSearchValue(value)
  }

  const takePickedColor = value => {
    setPickedColor(value)
  }

  return (
    <>
      <AuthProvider>
        <Header
          handleSidebarOpen={handleSidebarOpen}
          takeSearchValue={takeSearchValue}
          takePickedColor={takePickedColor}
        />
        <Content>
          <LeftBar isOpen={isOpen} />
          <Routes
            search={searchValue}
            isOpen={isOpen}
            pickedColor={pickedColor}
          />
        </Content>
      </AuthProvider>
    </>
  )
}
