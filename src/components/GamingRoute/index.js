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

  //   Gaming Route API Call Start -->
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
  //   Gaming Route API Call End -->

  render() {
    const {apiStatus} = this.state
    const isApiFailure = apiStatus === apiStatusConstant.failure
    return (
      // Data extract from Context -->
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          // After Fetching Data from API Success View Start -->
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
                        {eachVideoDetails.viewCount} Watching Worldwide
                      </GamingVideoViewCount>
                    </Link>
                  </GamingVideoItemContainer>
                ))}
              </GamingVideoListsContainer>
            )
          }
          // After Fetching Data from API Success View End -->

          // After Fetching Data from API Loading View Start -->
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
          // After Fetching Data from API Loading View End -->

          // After Fetching Data from API Failure View Start -->
          const onClickedAPIRetry = () => {
            this.getGamingVideosData()
          }

          const renderGamingVideoListsFailureView = () => (
            <ApiFailureView onClickedAPIRetry={onClickedAPIRetry} />
          )
          // After Fetching Data from API Failure View End -->

          // After Fetching Data from API Call Views Functions by switch cases --
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
              {/* Header Route Call --> */}
              <Header />
              <GamingContentContainer>
                {/* Navigation Side Bar Call --> */}
                <NavigationItems />
                {/* GamingRoute Main Content Start --> */}
                <GamingVideosRightContainer
                  isDark={isDark}
                  data-testid="gaming"
                >
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
                {/* GamingRoute Main Content End --> */}
              </GamingContentContainer>
            </GamingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingRoute
