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
  VideoDetailsContainerMobile,
  SaveVideoTitle,
  SaveVideoChannelName,
  SaveVideoChannelNameMobile,
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
      const {isDark, saveVideoList} = value

      const renderListOfSaveVideos = () => (
        <SaveVideoListsContainer>
          {saveVideoList.map(eachItem => {
            const timesTime = formatDistanceToNow(
              new Date(eachItem.videoDetails.publishedAt),
            )
            const timeList = timesTime.split(' ')
            const timeDistance = `${timeList[1]} ${timeList[2]} ago`

            return (
              <Link
                to={`/videos/${eachItem.videoDetails.id}`}
                className="save-video-link"
                key={eachItem.videoDetails.id}
              >
                <SaveVideoItemContainer>
                  <SaveVideoThumbnailImg
                    src={eachItem.videoDetails.thumbnailUrl}
                    alt="video thumbnail"
                  />

                  {/* Video Details in desktop version ---> */}
                  <VideoDetailsContainer>
                    <SaveVideoTitle isDark={isDark}>
                      {eachItem.videoDetails.title}
                    </SaveVideoTitle>
                    <SaveVideoChannelName isDark={isDark}>
                      {eachItem.videoDetails.channel.name}
                    </SaveVideoChannelName>
                    <SaveVideoViewsContainer>
                      <SaveVideoViews isDark={isDark}>
                        {eachItem.videoDetails.viewCount}
                      </SaveVideoViews>
                      <BsDot size="20" color={isDark ? '#94a3b8' : '#64748b'} />
                      <SaveVideoViews isDark={isDark}>
                        {timeDistance}
                      </SaveVideoViews>
                    </SaveVideoViewsContainer>
                  </VideoDetailsContainer>

                  {/* Video Details in Mobile version ---> */}
                  <VideoDetailsContainerMobile>
                    <ChannelLogoInMobile
                      src={eachItem.videoDetails.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <div>
                      <SaveVideoTitle isDark={isDark}>
                        {eachItem.videoDetails.title}
                      </SaveVideoTitle>
                      <SaveVideoViewsContainer>
                        <SaveVideoChannelNameMobile isDark={isDark}>
                          {eachItem.videoDetails.channel.name}
                        </SaveVideoChannelNameMobile>
                        <BsDot
                          size="20"
                          color={isDark ? '#94a3b8' : '#64748b'}
                        />
                        <SaveVideoViews isDark={isDark}>
                          {eachItem.videoDetails.viewCount}
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
                  </VideoDetailsContainerMobile>
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
            <SaveVideosRightContainer isDark={isDark}>
              <>
                {saveVideoList.length > 0 ? (
                  <>
                    <SaveVideoHeader isDark={isDark}>
                      <HeaderContentArea>
                        <LogoContainer isDark={isDark}>
                          <HiFire size="28" color="#ff0000" />
                        </LogoContainer>
                        <HeaderText isDark={isDark}>Saved Videos</HeaderText>
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
