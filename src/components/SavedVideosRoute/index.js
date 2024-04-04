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
  SaveVideoTitle,
  SaveVideoChannelName,
  SaveVideoViewsContainer,
  SaveVideoViews,
  NoSavedVideosContainer,
  NoSaveVideosImg,
  NoSaveVideosHeading,
  NoSaveVideosDescription,
} from './styledComponent'

const SavedVideosRoute = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, saveVideoList} = value
      console.log(isDark)
      console.log(saveVideoList)

      const renderListOfSaveVideos = () => (
        <>
          {saveVideoList.map(eachItem => {
            const timesTime = formatDistanceToNow(
              new Date(eachItem.videoDetails.publishedAt),
            )
            /* console.log(timesTime) */
            const timeList = timesTime.split(' ')
            const timeDistance = `${timeList[1]} ${timeList[2]} ago`

            return (
              <Link
                to={`/videos/${eachItem.videoDetails.id}`}
                className="save-video-link"
              >
                <SaveVideoItemContainer key={eachItem.videoDetails.id}>
                  <SaveVideoThumbnailImg
                    src={eachItem.videoDetails.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <div>
                    <SaveVideoTitle>
                      {eachItem.videoDetails.title}
                    </SaveVideoTitle>
                    <SaveVideoChannelName>
                      {eachItem.videoDetails.channel.name}
                    </SaveVideoChannelName>
                    <SaveVideoViewsContainer>
                      <SaveVideoViews>
                        {eachItem.videoDetails.viewCount}
                      </SaveVideoViews>
                      <BsDot size="20" color={isDark ? '#94a3b8' : '#64748b'} />
                      <SaveVideoViews>{timeDistance}</SaveVideoViews>
                    </SaveVideoViewsContainer>
                  </div>
                </SaveVideoItemContainer>
              </Link>
            )
          })}
        </>
      )

      return (
        <SaveVideosMainContainer className="save-videos-main-container">
          <Header />
          <SaveVideosContentContainer className="save-videos-content-container">
            <NavigationItems />
            <SaveVideosRightContainer
              className="save-videos-right-container"
              isDark={isDark}
            >
              <SaveVideoListsContainer>
                {saveVideoList.length > 0 ? (
                  <>
                    <SaveVideoHeader className="save-videos-header">
                      <HeaderContentArea className="header-content-area">
                        <LogoContainer>
                          <HiFire size="28" color="#ff0000" />
                        </LogoContainer>
                        <HeaderText>Saved Videos</HeaderText>
                      </HeaderContentArea>
                    </SaveVideoHeader>
                    {renderListOfSaveVideos()}
                  </>
                ) : (
                  <NoSavedVideosContainer>
                    <NoSaveVideosImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoSaveVideosHeading>
                      No saved videos found
                    </NoSaveVideosHeading>
                    <NoSaveVideosDescription>
                      You can save your videos while watching them
                    </NoSaveVideosDescription>
                  </NoSavedVideosContainer>
                )}
              </SaveVideoListsContainer>
            </SaveVideosRightContainer>
          </SaveVideosContentContainer>
        </SaveVideosMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideosRoute
