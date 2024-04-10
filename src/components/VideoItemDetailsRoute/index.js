import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import VideoItemDetailsNavigationItems from '../VideoItemDetailsNavigationItems'
import ApiFailureView from '../ApiFailureView'
import VideoItemDetailsVideoSection from '../VideoItemDetailsVideoSection'

import {
  VideoItemDetailsMainContainer,
  VideoItemDetailsContentContainer,
  VideoItemDetailsRightContainer,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetailsRoute extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoItemDetails: {},
    isLikeClicked: false,
    isDislikeClicked: false,
  }

  componentDidMount() {
    this.getVideoItemDetailsData()
  }

  // VideoItemDetails Data API Call Start -->
  getVideoItemDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const updatedVideoDetails = {
        videoDetails: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
          description: data.video_details.description,
          id: data.video_details.id,
          publishedAt: data.video_details.published_at,
          thumbnailUrl: data.video_details.thumbnail_url,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          viewCount: data.video_details.view_count,
        },
      }
      //   console.log(updatedVideoDetails)
      this.setState({
        apiStatus: apiStatusConstant.success,
        videoItemDetails: updatedVideoDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }
  // VideoItemDetails Data API Call End -->

  // After Data fetch VideoItemDetails UI Success View Start -->
  clickedLike = () => {
    this.setState(prevState => ({
      isLikeClicked: !prevState.isLikeClicked,
      isDislikeClicked: false,
    }))
  }

  clickedDisLike = () => {
    this.setState(prevState => ({
      isDislikeClicked: !prevState.isDislikeClicked,
      isLikeClicked: false,
    }))
  }

  renderVideoItemDetailsSuccessView = () => {
    const {videoItemDetails, isLikeClicked, isDislikeClicked} = this.state
    return (
      <VideoItemDetailsVideoSection
        videoItemDetails={videoItemDetails}
        clickedLike={this.clickedLike}
        clickedDisLike={this.clickedDisLike}
        isLikeClicked={isLikeClicked}
        isDislikeClicked={isDislikeClicked}
      />
    )
  }
  // After Data fetch VideoItemDetails UI Success View End -->

  // After Data fetch VideoItemDetails UI Failure View Start -->
  onClickedAPIRetry = () => {
    this.getVideoItemDetailsData()
  }

  renderVideoItemDetailsFailureView = () => (
    <ApiFailureView onClickedAPIRetry={this.onClickedAPIRetry} />
  )
  // After Data fetch VideoItemDetails UI Failure View End -->

  // After Data fetch VideoItemDetails UI Loading View Start -->
  renderInProgressView = () => (
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
  // After Data fetch VideoItemDetails UI Loading View End -->

  renderVideoItemDetailsViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderVideoItemDetailsSuccessView()
      case apiStatusConstant.failure:
        return this.renderVideoItemDetailsFailureView()
      case apiStatusConstant.inProgress:
        return this.renderInProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
          return (
            <VideoItemDetailsMainContainer>
              <Header />
              <VideoItemDetailsContentContainer>
                <VideoItemDetailsNavigationItems />
                <VideoItemDetailsRightContainer
                  bgColor={bgColor}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoItemDetailsViews()}
                </VideoItemDetailsRightContainer>
              </VideoItemDetailsContentContainer>
            </VideoItemDetailsMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
