import {Component} from 'react'

import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import {MdClose} from 'react-icons/md'
import {BsSearch, BsDot} from 'react-icons/bs'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import NavigationItems from '../NavigationItems'
import './index.css'

import {
  HomeMainContainer,
  HomeContentContainer,
  RightContainer,
  PrimeMemberContainer,
  PrimePlansContainer,
  PrimeWebsiteLogo,
  PrimePlanDescription,
  GetItNowBtn,
  HomeVideoListMainContainer,
  SearchButtonContainer,
  SearchBox,
  SearchButton,
  VideoItemListsContainer,
  VideoItemContainer,
  ThumbnailImage,
  VideoDescriptionContainer,
  ChannelLogo,
  VideoDetailsContainer,
  VideoTitleText,
  VideoChannelName,
  VideoViewsContainer,
  VideoViews,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponent'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class HomeRoute extends Component {
  state = {
    searchInput: '',
    videoLists: [],
    apiStatus: apiStatusConstant.initial,
    primeIsVisible: true,
  }

  componentDidMount() {
    this.getVideoListsData()
  }

  getVideoListsData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(video => ({
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        videoLists: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  removePrimeDealSection = () => {
    this.setState({primeIsVisible: false})
  }

  renderHomeContentPrimeDealSection = () => {
    const {primeIsVisible} = this.state

    return (
      <>
        {primeIsVisible && (
          <PrimeMemberContainer>
            <PrimePlansContainer>
              <PrimeWebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
              <PrimePlanDescription>
                Buy Nxt Watch Premium prepaid plans with UPI
              </PrimePlanDescription>
              <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
            </PrimePlansContainer>
            <MdClose
              size="20"
              color="#475569"
              cursor="pointer"
              onClick={this.removePrimeDealSection}
            />
          </PrimeMemberContainer>
        )}
      </>
    )
  }

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchVideoItems = () => {
    this.getVideoListsData()
  }

  renderSearchBoxElement = () => {
    const {searchInput} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SearchButtonContainer>
              <SearchBox
                type="search"
                placeholder="Search"
                onChange={this.updateSearchInput}
                value={searchInput}
                isDark={isDark}
              />
              <SearchButton
                type="button"
                aria-label="search-button"
                isDark={isDark}
                onClick={this.getSearchVideoItems}
              >
                <BsSearch size="12" color="#64748b" />
              </SearchButton>
            </SearchButtonContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideoItems = () => {
    const {videoLists} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const onClickedRetry = () => {
            this.setState({searchInput: ''}, this.getVideoListsData)
          }

          return (
            <>
              {videoLists.length > 0 ? (
                <VideoItemListsContainer>
                  {videoLists.map(video => {
                    const timesTime = formatDistanceToNow(
                      new Date(video.publishedAt),
                    )
                    /* console.log(timesTime) */
                    const timeList = timesTime.split(' ')
                    const timeDistance = `${timeList[1]} ${timeList[2]} ago`
                    return (
                      <Link
                        to={`/videos/${video.id}`}
                        className="link"
                        key={video.id}
                      >
                        <VideoItemContainer>
                          <ThumbnailImage
                            src={video.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <VideoDescriptionContainer>
                            <ChannelLogo
                              src={video.channel.profileImageUrl}
                              alt="channel logo"
                            />
                            <VideoDetailsContainer>
                              <VideoTitleText isDark={isDark}>
                                {video.title}
                              </VideoTitleText>
                              <VideoChannelName isDark={isDark}>
                                {video.channel.name}
                              </VideoChannelName>
                              <VideoViewsContainer>
                                <VideoViews
                                  isDark={isDark}
                                >{`${video.viewCount} views`}</VideoViews>
                                <BsDot
                                  size="20"
                                  color={isDark ? '#94a3b8' : '#475569'}
                                />
                                <VideoViews isDark={isDark}>
                                  {timeDistance}
                                </VideoViews>
                              </VideoViewsContainer>
                            </VideoDetailsContainer>
                          </VideoDescriptionContainer>
                        </VideoItemContainer>
                      </Link>
                    )
                  })}
                </VideoItemListsContainer>
              ) : (
                <FailureContainer>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <FailureHeading isDark={isDark}>
                    No Search results found
                  </FailureHeading>
                  <FailureDescription isDark={isDark}>
                    Try different key words or remove search filter
                  </FailureDescription>
                  <RetryButton type="button" onClick={onClickedRetry}>
                    Retry
                  </RetryButton>
                </FailureContainer>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderHomeVideosContentSuccessView = () => <>{this.renderVideoItems()}</>

  renderHomeVideosContentFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImageSrc = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const onClickedAPIRetry = () => {
          this.getVideoListsData()
        }
        return (
          <FailureContainer>
            <FailureImage src={failureImageSrc} alt="failure view" />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={onClickedAPIRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeVideoContentInProgressView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <div className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#f8fafc' : '#1e293b'}
              height="40"
              width="50"
            />
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeVideoListsContentViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderHomeVideosContentSuccessView()
      case apiStatusConstant.failure:
        return this.renderHomeVideosContentFailureView()
      case apiStatusConstant.inProgress:
        return this.renderHomeVideoContentInProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeMainContainer>
              <Header />
              <HomeContentContainer>
                <NavigationItems />

                <RightContainer isDark={isDark}>
                  {this.renderHomeContentPrimeDealSection()}
                  <HomeVideoListMainContainer>
                    {this.renderSearchBoxElement()}
                    {this.renderHomeVideoListsContentViews()}
                  </HomeVideoListMainContainer>
                </RightContainer>
              </HomeContentContainer>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeRoute
