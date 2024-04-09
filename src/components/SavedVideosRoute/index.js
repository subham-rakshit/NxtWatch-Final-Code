import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import NavigationItems from '../NavigationItems'

import './index.css'

import {
  SaveVideosMainContainer,
  SaveVideosContentContainer,
  SaveVideosRightContainer,
  SaveVideoHeader,
  HeaderContentArea,
  LogoContainer,
  HeaderText,
  SaveVideoListsContainer,
  SaveVideoItemContainer,
  SaveVideoThumbnailImg,
  VideoDetailsContainer,
  SaveVideoTitle,
  SaveVideoChannelName,
  SaveVideoViewsContainer,
  SaveVideoViews,
  NoSavedVideosContainer,
  NoSaveVideosImg,
  NoSaveVideosHeading,
  NoSaveVideosDescription,
  ChannelLogoInMobile,
} from './styledComponent'

const SavedVideosRoute = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, saveVideoList, updateVideoSavedStatus} = value

      const renderListOfSaveVideos = () => (
        <SaveVideoListsContainer>
          {saveVideoList.map(eachItem => {
            const timesTime = formatDistanceToNow(
              new Date(eachItem.videoDetails.publishedAt),
            )
            const timeList = timesTime.split(' ')
            const timeDistance = `${timeList[1]} ${timeList[2]} ago`
            const changeSaveVideoStatus = () => {
              updateVideoSavedStatus(eachItem.videoDetails.id)
            }
            return (
              <Link
                to={`/videos/${eachItem.videoDetails.id}`}
                className="save-video-link"
                key={eachItem.videoDetails.id}
                onClick={changeSaveVideoStatus}
              >
                <SaveVideoItemContainer>
                  <SaveVideoThumbnailImg
                    src={eachItem.videoDetails.thumbnailUrl}
                    alt="video thumbnail"
                  />

                  {/* Video Details in desktop version Start ---> */}
                  <VideoDetailsContainer>
                    <ChannelLogoInMobile
                      src={eachItem.videoDetails.profileImageUrl}
                      alt="channel logo"
                    />
                    <div>
                      <SaveVideoTitle isDark={isDark}>
                        {eachItem.videoDetails.title}
                      </SaveVideoTitle>
                      <SaveVideoChannelName isDark={isDark}>
                        {eachItem.videoDetails.name}
                      </SaveVideoChannelName>
                      <SaveVideoViewsContainer>
                        <SaveVideoViews isDark={isDark}>
                          {eachItem.videoDetails.viewCount} views
                        </SaveVideoViews>
                        <BsDot
                          size="20"
                          color={isDark ? '#94a3b8' : '#64748b'}
                        />
                        <SaveVideoViews isDark={isDark}>
                          {timeDistance}
                        </SaveVideoViews>
                      </SaveVideoViewsContainer>
                    </div>
                  </VideoDetailsContainer>
                  {/* Video Details in desktop version End ---> */}
                </SaveVideoItemContainer>
              </Link>
            )
          })}
        </SaveVideoListsContainer>
      )

      return (
        <SaveVideosMainContainer>
          <Header />
          <SaveVideosContentContainer>
            <NavigationItems />
            <SaveVideosRightContainer isDark={isDark} data-testid="savedVideos">
              <SaveVideoHeader isDark={isDark}>
                <HeaderContentArea>
                  <LogoContainer isDark={isDark}>
                    <HiFire size="28" color="#ff0000" />
                  </LogoContainer>
                  <HeaderText isDark={isDark}>Saved Videos</HeaderText>
                </HeaderContentArea>
              </SaveVideoHeader>
              <>
                {saveVideoList.length > 0 ? (
                  renderListOfSaveVideos()
                ) : (
                  <NoSavedVideosContainer>
                    <NoSaveVideosImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoSaveVideosHeading isDark={isDark}>
                      No saved videos found
                    </NoSaveVideosHeading>
                    <NoSaveVideosDescription isDark={isDark}>
                      You can save your videos while watching them
                    </NoSaveVideosDescription>
                  </NoSavedVideosContainer>
                )}
              </>
            </SaveVideosRightContainer>
          </SaveVideosContentContainer>
        </SaveVideosMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideosRoute
