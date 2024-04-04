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
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelName,
  SubscriberCount,
  ChannelDescription,
  ChannelDescriptionMobile,
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
    isSaveClicked: false,
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
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
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
      isSaveClicked,
    } = this.state

    const publishedTime = formatDistanceToNow(
      new Date(videoItemDetails.videoDetails.publishedAt),
    )
    const timeList = publishedTime.split(' ')
    const updatedPublishedTime = `${timeList[1]} ${timeList[2]} ago`
    // console.log(updatedPublishedTime)

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, updateVideoList, filterVideoList} = value

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
            if (isSaveClicked) {
              filterVideoList(videoItemDetails)
            } else {
              updateVideoList(videoItemDetails)
            }
          }

          const onClickedSaveButton = () => {
            this.setState(
              {
                isSaveClicked: !isSaveClicked,
              },
              callingUpdateVideoList,
            )
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
                    color={isLikeClicked ? '#3b82f6' : '#475569'}
                  >
                    <BiLike size="18" />
                    Like
                  </ReviewButtons>
                  <ReviewButtons
                    type="button"
                    isDark={isDark}
                    onClick={onClickedDislikeButton}
                    color={isDislikeClicked ? '#3b82f6' : '#475569'}
                  >
                    <BiDislike size="18" />
                    Dislike
                  </ReviewButtons>
                  <ReviewButtons
                    type="button"
                    isDark={isDark}
                    onClick={onClickedSaveButton}
                    color={isSaveClicked ? '#3b82f6' : '#475569'}
                  >
                    <MdPlaylistAdd size="18" />
                    {isSaveClicked ? 'Saved' : 'Save'}
                  </ReviewButtons>
                </LikeDislikeAndSaveContainer>
              </ViewsAndLikeDislikeContainer>
              <BreakingLine isDark={isDark} />
              <VideoDetailsContainer>
                <ChannelLogo
                  src={videoItemDetails.videoDetails.channel.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelDetailsContainer>
                  <ChannelName isDark={isDark}>
                    {videoItemDetails.videoDetails.channel.name}
                  </ChannelName>
                  <SubscriberCount isDark={isDark}>
                    {videoItemDetails.videoDetails.channel.subscriberCount}{' '}
                    subscribers
                  </SubscriberCount>

                  <ChannelDescription as="p" isDark={isDark}>
                    {videoItemDetails.videoDetails.description}
                  </ChannelDescription>
                </ChannelDetailsContainer>
              </VideoDetailsContainer>
              <ChannelDescriptionMobile as="p" isDark={isDark}>
                {videoItemDetails.videoDetails.description}
              </ChannelDescriptionMobile>
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
                <VideoItemDetailsRightContainer isDark={isDark}>
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
