import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

const Notes = React.lazy(() => import('pages/Notes/Notes'))
const Note = React.lazy(() => import('pages/Note/Note'))
const Archive = React.lazy(() => import('pages/Archive/Archive'))
const LoginPage = React.lazy(() => import('pages/LoginPage/LoginPage'))
const RegistrationPage = React.lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
)

export const Routes = ({ search, isOpen, pickedColor }) => {
  return (
    <Switch>
      <Route
        path='/notes'
        exact
        render={props => (
          <Notes
            {...props}
            search={search}
            isOpen={isOpen}
            pickedColor={pickedColor}
          />
        )}
      />
      <Route path='/notes/:id' exact component={Note} />
      <Route
        path='/archive'
        exact
        render={props => (
          <Archive {...props} search={search} pickedColor={pickedColor} />
        )}
      />
      <Route path='/login' exact component={LoginPage} />
      <Route path='/registration' exact component={RegistrationPage} />
      <Redirect to='/notes' />
    </Switch>
  )
}

Routes.propTypes = {
  search: PropTypes.string,
  isOpen: PropTypes.bool,
  pickedColor: PropTypes.string
}
