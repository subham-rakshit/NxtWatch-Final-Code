import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import NavigationItems from '../NavigationItems'
import ApiFailureView from '../ApiFailureView'

import './index.css'

import {
  GamingMainContainer,
  GamingContentContainer,
  GamingVideosRightContainer,
  GamingVideoHeader,
  HeaderContentArea,
  LogoContainer,
  HeaderText,
  GamingVideoListsContainer,
  GamingVideoItemContainer,
  GamingVideoThumbnailImg,
  GamingVideoTitle,
  GamingVideoViewCount,
} from './styledComponent'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class GamingRoute extends Component {
  state = {gamingVideosList: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const token = Cookies.get('jwt_token')
    const gamingDataApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingDataApiUrl, options)

    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      //   console.log(updatedData)
      this.setState({
        apiStatus: apiStatusConstant.success,
        gamingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  render() {
    const {apiStatus} = this.state
    const isApiFailure = apiStatus === apiStatusConstant.failure
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const renderGamingVideoListsSuccessView = () => {
            const {gamingVideosList} = this.state

            return (
              <GamingVideoListsContainer>
                {gamingVideosList.map(eachVideoDetails => (
                  <GamingVideoItemContainer key={eachVideoDetails.id}>
                    <Link
                      to={`/videos/${eachVideoDetails.id}`}
                      className="gaming-video-link"
                    >
                      <GamingVideoThumbnailImg
                        src={eachVideoDetails.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GamingVideoTitle isDark={isDark}>
                        {eachVideoDetails.title}
                      </GamingVideoTitle>
                      <GamingVideoViewCount isDark={isDark}>
                        {eachVideoDetails.viewCount} watching Worldwide
                      </GamingVideoViewCount>
                    </Link>
                  </GamingVideoItemContainer>
                ))}
              </GamingVideoListsContainer>
            )
          }

          const renderGamingVideoListsInProgressView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDark ? '#f8fafc' : '#1e293b'}
                height="40"
                width="50"
              />
            </div>
          )

          const onClickedAPIRetry = () => {
            this.getGamingVideosData()
          }

          const renderGamingVideoListsFailureView = () => (
            <ApiFailureView onClickedAPIRetry={onClickedAPIRetry} />
          )

          const renderGamingVideosListViews = () => {
            switch (apiStatus) {
              case apiStatusConstant.success:
                return renderGamingVideoListsSuccessView()
              case apiStatusConstant.failure:
                return renderGamingVideoListsFailureView()
              case apiStatusConstant.inProgress:
                return renderGamingVideoListsInProgressView()
              default:
                return null
            }
          }

          return (
            <GamingMainContainer>
              <Header />
              <GamingContentContainer>
                <NavigationItems />
                <GamingVideosRightContainer isDark={isDark}>
                  <GamingVideoHeader
                    isDark={isDark}
                    isApiFailure={isApiFailure}
                  >
                    <HeaderContentArea>
                      <LogoContainer isDark={isDark}>
                        <SiYoutubegaming size="28" color="#ff0000" />
                      </LogoContainer>
                      <HeaderText isDark={isDark}>Gaming</HeaderText>
                    </HeaderContentArea>
                  </GamingVideoHeader>
                  {renderGamingVideosListViews()}
                </GamingVideosRightContainer>
              </GamingContentContainer>
            </GamingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingRoute
