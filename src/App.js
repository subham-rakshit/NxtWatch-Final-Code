import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    activeTab: 'Home',
    saveVideoList: [],
  }

  //   Update Theme as Dark or Light -->
  updateTheme = () => {
    const {isDark} = this.state

    this.setState({isDark: !isDark})
  }

  //   Change Navigation Tab -->
  changeTab = tabName => {
    this.setState({activeTab: tabName})
  }

  //   Update Video Lists for SaveVideosRoute -->
  updateVideoList = videoItemDetails => {
    const {saveVideoList} = this.state
    const index = saveVideoList.findIndex(
      eachItem => eachItem.videoDetails.id === videoItemDetails.videoDetails.id,
    )

    if (index === -1) {
      this.setState({
        saveVideoList: [...saveVideoList, videoItemDetails],
      })
    } else {
      saveVideoList.splice(index, 1)
      this.setState({saveVideoList})
    }
  }

  render() {
    const {isDark, activeTab, saveVideoList} = this.state
    return (
      <>
        <ThemeContext.Provider
          value={{
            isDark,
            activeTab,
            saveVideoList,
            updateTheme: this.updateTheme,
            changeTab: this.changeTab,
            updateVideoList: this.updateVideoList,
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
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
