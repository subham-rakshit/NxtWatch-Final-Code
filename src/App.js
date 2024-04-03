import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: 'Home'}

  updateTheme = () => {
    const {isDark} = this.state

    this.setState({isDark: !isDark})
  }

  changeTab = tabName => {
    this.setState({activeTab: tabName})
  }

  render() {
    const {isDark, activeTab} = this.state
    return (
      <>
        <ThemeContext.Provider
          value={{
            isDark,
            activeTab,
            updateTheme: this.updateTheme,
            changeTab: this.changeTab,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute exact path="/trending" component={TrendingRoute} />
            <ProtectedRoute exact path="/gaming" component={GamingRoute} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideosRoute}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetailsRoute}
            />
          </Switch>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
