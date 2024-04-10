import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'

import {MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
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

const VideoItemDetailsVideoSection = props => {
  const {
    videoItemDetails,
    clickedLike,
    clickedDisLike,
    isLikeClicked,
    isDislikeClicked,
  } = props

  const onClickedLike = () => {
    clickedLike()
  }

  const onClickedDislike = () => {
    clickedDisLike()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, updateVideoList, saveVideoList} = value

        const textColor = isDark ? '#94a3b8' : '#475569'

        // Find Index of Clicked VideoItem -->
        const index = saveVideoList.findIndex(
          eachVideo =>
            eachVideo.videoDetails.id === videoItemDetails.videoDetails.id,
        )

        // Finding Save Button isActive or not (According to the SaveVideosRoute video lists) -->
        let isSaved
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        // By Clicking Save btn, calling Context video data storing function which will store the videoItemData in Context for future usage -->
        const onClickSave = () => {
          updateVideoList(videoItemDetails)
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
                  {videoItemDetails.videoDetails.publishedAt}
                </ViewsAndPublishedText>
              </ViewsAndPublishedContainer>
              <LikeDislikeAndSaveContainer>
                <ReviewButtons
                  type="button"
                  isDark={isDark}
                  onClick={onClickedLike}
                  color={isLikeClicked ? '#2563eb' : '#64748b'}
                >
                  <BiLike size="18" />
                  Like
                </ReviewButtons>
                <ReviewButtons
                  type="button"
                  isDark={isDark}
                  onClick={onClickedDislike}
                  color={isDislikeClicked ? '#2563eb' : '#64748b'}
                >
                  <BiDislike size="18" />
                  Dislike
                </ReviewButtons>
                <ReviewButtons
                  type="button"
                  isDark={isDark}
                  onClick={onClickSave}
                  color={saveIconColor}
                >
                  <MdPlaylistAdd size="18" />
                  {isSaved ? 'Saved' : 'Save'}
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
export default VideoItemDetailsVideoSection
