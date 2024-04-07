import {Component} from 'react'

import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import NavigationItems from '../NavigationItems'
import ApiFailureView from '../ApiFailureView'

import './index.css'

import {
  TrendingMainContainer,
  TrendingContentContainer,
  TrendingVideosRightContainer,
  TrendingVideoHeader,
  HeaderContentArea,
  LogoContainer,
  HeaderText,
  TrendingVideoListsContainer,
  TrendingVideoItemContainer,
  TrendingVideoThumbnailImg,
  TrendingVideoDetailsContainer,
  TrendingVideoTitle,
  TrendingVideoChannelName,
  TrendingVideoViewsContainer,
  TrendingVideoViews,
  TrendingVideoDetailsContainerMobile,
  ChannelLogoInMobile,
  TrendingVideoChannelNameMobile,
} from './styledComponent'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class TrendingRoute extends Component {
  state = {trendingVideosData: {}, apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const token = Cookies.get('jwt_token')
    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(trendingVideosApiUrl, options)

    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedTrendingVideosData = data.videos.map(eachVideoDetails => ({
        channel: {
          name: eachVideoDetails.channel.name,
          profileImageUrl: eachVideoDetails.channel.profile_image_url,
        },
        id: eachVideoDetails.id,
        publishedAt: eachVideoDetails.published_at,
        thumbnailUrl: eachVideoDetails.thumbnail_url,
        title: eachVideoDetails.title,
        viewCount: eachVideoDetails.view_count,
      }))
      //   console.log(updatedTrendingVideosData)
      this.setState({
        trendingVideosData: updatedTrendingVideosData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  render() {
    const {trendingVideosData, apiStatus} = this.state
    const isApiStatusFailure = apiStatus === apiStatusConstant.failure
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const onClickedAPIRetry = () => {
            this.getTrendingVideosData()
          }

          const renderTrendingVideoFailureView = () => (
            <ApiFailureView onClickedAPIRetry={onClickedAPIRetry} />
          )

          const renderTrendingVideoContentInProgressView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDark ? '#f8fafc' : '#1e293b'}
                height="40"
                width="50"
              />
            </div>
          )

          const renderTrendingVideosSuccessView = () => (
            <TrendingVideoListsContainer>
              {trendingVideosData.map(eachItem => {
                const timesTime = formatDistanceToNow(
                  new Date(eachItem.publishedAt),
                )
                const timeList = timesTime.split(' ')
                const timeDistance = `${timeList[1]} ${timeList[2]} ago`

                return (
                  <Link
                    to={`/videos/${eachItem.id}`}
                    className="trending-video-link"
                    key={eachItem.id}
                  >
                    <TrendingVideoItemContainer>
                      <TrendingVideoThumbnailImg
                        src={eachItem.thumbnailUrl}
                        alt="video thumbnail"
                      />

                      {/* Video Details in desktop version ---> */}
                      <TrendingVideoDetailsContainer>
                        <TrendingVideoTitle isDark={isDark}>
                          {eachItem.title}
                        </TrendingVideoTitle>
                        <TrendingVideoChannelName isDark={isDark}>
                          {eachItem.channel.name}
                        </TrendingVideoChannelName>
                        <TrendingVideoViewsContainer>
                          <TrendingVideoViews isDark={isDark}>
                            {eachItem.viewCount}
                          </TrendingVideoViews>
                          <BsDot
                            size="20"
                            color={isDark ? '#94a3b8' : '#64748b'}
                          />
                          <TrendingVideoViews isDark={isDark}>
                            {timeDistance}
                          </TrendingVideoViews>
                        </TrendingVideoViewsContainer>
                      </TrendingVideoDetailsContainer>

                      {/* Video Details in Mobile version ---> */}
                      <TrendingVideoDetailsContainerMobile>
                        <ChannelLogoInMobile
                          src={eachItem.channel.profileImageUrl}
                          alt="channel logo"
                        />
                        <div>
                          <TrendingVideoTitle isDark={isDark}>
                            {eachItem.title}
                          </TrendingVideoTitle>
                          <TrendingVideoViewsContainer>
                            <TrendingVideoChannelNameMobile isDark={isDark}>
                              {eachItem.channel.name}
                            </TrendingVideoChannelNameMobile>
                            <BsDot
                              size="20"
                              color={isDark ? '#94a3b8' : '#64748b'}
                            />
                            <TrendingVideoViews isDark={isDark}>
                              {eachItem.viewCount}
                            </TrendingVideoViews>
                            <BsDot
                              size="20"
                              color={isDark ? '#94a3b8' : '#64748b'}
                            />
                            <TrendingVideoViews isDark={isDark}>
                              {timeDistance}
                            </TrendingVideoViews>
                          </TrendingVideoViewsContainer>
                        </div>
                      </TrendingVideoDetailsContainerMobile>
                    </TrendingVideoItemContainer>
                  </Link>
                )
              })}
            </TrendingVideoListsContainer>
          )

          const renderListOfTrendingVideos = () => {
            switch (apiStatus) {
              case apiStatusConstant.success:
                return renderTrendingVideosSuccessView()
              case apiStatusConstant.inProgress:
                return renderTrendingVideoContentInProgressView()
              case apiStatusConstant.failure:
                return renderTrendingVideoFailureView()
              default:
                return null
            }
          }

          return (
            <TrendingMainContainer>
              <Header />
              <TrendingContentContainer>
                <NavigationItems />
                <TrendingVideosRightContainer isDark={isDark}>
                  <TrendingVideoHeader
                    isDark={isDark}
                    isApiStatusFailure={isApiStatusFailure}
                  >
                    <HeaderContentArea>
                      <LogoContainer isDark={isDark}>
                        <HiFire size="28" color="#ff0000" />
                      </LogoContainer>
                      <HeaderText isDark={isDark}>Trending</HeaderText>
                    </HeaderContentArea>
                  </TrendingVideoHeader>
                  {renderListOfTrendingVideos()}
                </TrendingVideosRightContainer>
              </TrendingContentContainer>
            </TrendingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
