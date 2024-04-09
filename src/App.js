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

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    isSaveBtnClicked: false,
    activeTab: 'Home',
    saveVideoList: [],
    saveVideoId: '',
  }

  updateTheme = () => {
    const {isDark} = this.state

    this.setState({isDark: !isDark})
  }

  changeTab = tabName => {
    this.setState({activeTab: tabName})
  }

  updateVideoList = videoItemDetails => {
    const {saveVideoList} = this.state
    const index = saveVideoList.findIndex(
      eachItem => eachItem.videoDetails.id === videoItemDetails.videoDetails.id,
    )

    if (index === -1) {
      this.setState({
        saveVideoList: [...saveVideoList, videoItemDetails],
        saveVideoId: '',
      })
    } else {
      saveVideoList.splice(index, 1)
      this.setState({saveVideoList, saveVideoId: ''})
    }
  }

  //   removeVideo = id => {
  //     const {saveVideoList} = this.state
  //     const updatedSaveVideos = saveVideoList.filter(
  //       eachVideo => eachVideo.videoDetails.id !== id,
  //     )
  //     this.setState({saveVideoList: updatedSaveVideos, saveVideoId: ''})
  //   }

  updateVideoSavedStatus = id => {
    const {isSaveBtnClicked} = this.state
    this.setState({saveVideoId: id, isSaveBtnClicked: !isSaveBtnClicked})
  }

  render() {
    const {
      isDark,
      activeTab,
      saveVideoList,
      saveVideoId,
      isSaveBtnClicked,
    } = this.state
    console.log(saveVideoId)
    return (
      <>
        <ThemeContext.Provider
          value={{
            isDark,
            activeTab,
            isSaveBtnClicked,
            updateTheme: this.updateTheme,
            changeTab: this.changeTab,
            saveVideoList,
            updateVideoList: this.updateVideoList,
            saveVideoId,
            updateVideoSavedStatus: this.updateVideoSavedStatus,
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
