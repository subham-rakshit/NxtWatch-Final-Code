import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  updateTheme = () => {
    const {isDark} = this.state

    this.setState({isDark: !isDark})
  }

  render() {
    const {isDark} = this.state
    return (
      <>
        <ThemeContext.Provider value={{isDark, updateTheme: this.updateTheme}}>
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
          </Switch>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
