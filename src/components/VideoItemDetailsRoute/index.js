import {Component} from 'react'

import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'

import Header from '../Header'
import VideoItemDetailsNavigationItems from '../VideoItemDetailsNavigationItems'
import ApiFailureView from '../ApiFailureView'

import {
  VideoItemDetailsMainContainer,
  VideoItemDetailsContentContainer,
  VideoItemDetailsRightContainer,
  VideoContainer,
  VideoItemDetailsTitle,
  ViewsAndLikeDislikeContainer,
  ViewsAndPublishedContainer,
  ViewsAndPublishedText,
  LikeDislikeAndSaveContainer,
  ReviewButtons,
  BreakingLine,
  VideoDetailsContainer,
  ChannelLogo,
  ChannelName,
  SubscriberCount,
  ChannelDescription,
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
    isSaveActiveInitial: false,
    isSaveActiveLater: true,
  }

  componentDidMount() {
    this.getVideoItemDetailsData()
  }

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

  renderVideoItemDetailsSuccessView = () => {
    const {
      videoItemDetails,
      isLikeClicked,
      isDislikeClicked,
      isSaveActiveInitial,
      isSaveActiveLater,
    } = this.state
    // console.log(videoItemDetails)

    const publishedTime = formatDistanceToNow(
      new Date(videoItemDetails.videoDetails.publishedAt),
    )
    const timeList = publishedTime.split(' ')
    const updatedPublishedTime = `${timeList[1]} ${timeList[2]} ago`
    // console.log(updatedPublishedTime)

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, updateVideoList, isSaveBtnClicked, saveVideoId} = value

          const onClickedLikeButton = () => {
            this.setState({
              isLikeClicked: !isLikeClicked,
              isDislikeClicked: false,
            })
          }

          const onClickedDislikeButton = () => {
            this.setState({
              isDislikeClicked: !isDislikeClicked,
              isLikeClicked: false,
            })
          }

          const callingUpdateVideoList = () => {
            updateVideoList(videoItemDetails)
          }

          const onClickedSaveButton = () => {
            if (saveVideoId !== '') {
              this.setState(
                {isSaveActiveLater: !isSaveActiveLater},
                callingUpdateVideoList,
              )
            } else {
              this.setState(
                {
                  isSaveActiveInitial: !isSaveActiveInitial,
                },
                callingUpdateVideoList,
              )
            }
          }

          let active
          if (saveVideoId !== '') {
            active = isSaveActiveLater
          } else {
            active = isSaveActiveInitial
          }

          return (
            <>
              <VideoContainer>
                <ReactPlayer
                  url={videoItemDetails.videoDetails.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              </VideoContainer>
              <VideoItemDetailsTitle isDark={isDark}>
                {videoItemDetails.videoDetails.title}
              </VideoItemDetailsTitle>
              <ViewsAndLikeDislikeContainer>
                <ViewsAndPublishedContainer>
                  <ViewsAndPublishedText isDark={isDark}>
                    {videoItemDetails.videoDetails.viewCount} views
                  </ViewsAndPublishedText>
                  <BsDot size="20" color="#475569" />
                  <ViewsAndPublishedText isDark={isDark}>
                    {updatedPublishedTime}
                  </ViewsAndPublishedText>
                </ViewsAndPublishedContainer>
                <LikeDislikeAndSaveContainer>
                  <ReviewButtons
                    type="button"
                    isDark={isDark}
                    onClick={onClickedLikeButton}
                    color={isLikeClicked ? '#2563eb' : '#64748b'}
                  >
                    <BiLike size="18" />
                    Like
                  </ReviewButtons>
                  <ReviewButtons
                    type="button"
                    isDark={isDark}
                    onClick={onClickedDislikeButton}
                    color={isDislikeClicked ? '#2563eb' : '#64748b'}
                  >
                    <BiDislike size="18" />
                    Dislike
                  </ReviewButtons>
                  <ReviewButtons
                    type="button"
                    isDark={isDark}
                    onClick={onClickedSaveButton}
                    color={active ? '#2563eb' : '#64748b'}
                  >
                    <MdPlaylistAdd size="18" />
                    {active ? 'Saved' : 'Save'}
                  </ReviewButtons>
                </LikeDislikeAndSaveContainer>
              </ViewsAndLikeDislikeContainer>
              <BreakingLine isDark={isDark} />
              <VideoDetailsContainer>
                <ChannelLogo
                  src={videoItemDetails.videoDetails.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <ChannelName isDark={isDark}>
                    {videoItemDetails.videoDetails.name}
                  </ChannelName>
                  <SubscriberCount isDark={isDark}>
                    {videoItemDetails.videoDetails.subscriberCount} subscribers
                  </SubscriberCount>
                </div>
              </VideoDetailsContainer>
              <ChannelDescription isDark={isDark}>
                {videoItemDetails.videoDetails.description}
              </ChannelDescription>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onClickedAPIRetry = () => {
    this.getVideoItemDetailsData()
  }

  renderVideoItemDetailsFailureView = () => (
    <ApiFailureView onClickedAPIRetry={this.onClickedAPIRetry} />
  )

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

          return (
            <VideoItemDetailsMainContainer>
              <Header />
              <VideoItemDetailsContentContainer>
                <VideoItemDetailsNavigationItems />
                <VideoItemDetailsRightContainer
                  isDark={isDark}
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
