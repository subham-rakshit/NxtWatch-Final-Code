import {Component} from 'react'

import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd, MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import './index.css'

import {
  HomeMainContainer,
  HomeContentContainer,
  LeftNavigationContainer,
  RightContainer,
  NavigationItemsContainer,
  NavItem,
  NavItemText,
  ContactUsSection,
  ContactUsHeading,
  ContactLinkContainer,
  ContactLinkImg,
  ContactUsDescription,
  PrimeMemberContainer,
  PrimePlansContainer,
  PrimeWebsiteLogo,
  PrimePlanDescription,
  GetItNowBtn,
  HomeVideoListMainContainer,
  SearchButtonContainer,
  SearchBox,
  SearchButton,
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
      //   console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
    // console.log(formatDistanceToNow(new Date('Apr 19, 2020')))
  }

  renderNavigationItemsContainer = () => (
    <NavigationItemsContainer>
      <NavItem>
        <AiFillHome size="18" color="#475569" />
        <NavItemText>Home</NavItemText>
      </NavItem>
      <NavItem>
        <HiFire size="18" color="#475569" />
        <NavItemText>Trending</NavItemText>
      </NavItem>
      <NavItem>
        <SiYoutubegaming size="18" color="#475569" />
        <NavItemText>Gaming</NavItemText>
      </NavItem>
      <NavItem>
        <MdPlaylistAdd size="18" color="#475569" />
        <NavItemText>Saved videos</NavItemText>
      </NavItem>
    </NavigationItemsContainer>
  )

  renderContactUsSection = () => (
    <ContactUsSection>
      <ContactUsHeading>CONTACT US</ContactUsHeading>
      <ContactLinkContainer>
        <li>
          <ContactLinkImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
        </li>
        <li>
          <ContactLinkImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
        </li>
        <li>
          <ContactLinkImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </li>
      </ContactLinkContainer>
      <ContactUsDescription>
        Enjoy! Now to see your channels and recommendations!
      </ContactUsDescription>
    </ContactUsSection>
  )

  renderHomeContentPrimeDealSection = () => (
    <>
      <PrimeMemberContainer className="prime-member-container">
        <PrimePlansContainer className="prime-plans-container">
          <PrimeWebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <PrimePlanDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </PrimePlanDescription>
          <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
        </PrimePlansContainer>
        <MdClose size="20" color="#475569" cursor="pointer" />
      </PrimeMemberContainer>
    </>
  )

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderSearchBoxElement = () => {
    const {searchInput, videoLists} = this.state
    console.log(videoLists)

    return (
      <SearchButtonContainer>
        <SearchBox
          type="search"
          placeholder="Search"
          onChange={this.updateSearchInput}
          value={searchInput}
        />
        <SearchButton type="button" aria-label="search-button">
          <BsSearch size="12" color="#64748b" />
        </SearchButton>
      </SearchButtonContainer>
    )
  }

  renderVideoItems = () => {
    const {videoLists} = this.state

    return (
      <ul>
        {videoLists.map(video => {
          const timesTime = formatDistanceToNow(new Date(video.publishedAt))
          const timeList = timesTime.split(' ')
          const timeDistance = `${timeList[1]} ${timeList[2]} ago`
          return (
            <li key={video.id}>
              <img src={video.thumbnailUrl} alt="video thumbnail" />
              <div>
                <img src={video.channel.profileImageUrl} alt="channel logo" />
                <div>
                  <p>{video.title}</p>
                  <p>{video.channel.name}</p>
                  <div>
                    <p>{`${video.viewCount} views`}</p>
                    <p>{timeDistance}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  renderHomeVideosContentSuccessViews = () => (
    <>
      {this.renderSearchBoxElement()}
      {this.renderVideoItems()}
    </>
  )

  renderHomeVideoContentInProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="40" width="50" />
    </div>
  )

  renderHomeVideoListsContentViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderHomeVideosContentSuccessViews()
      case apiStatusConstant.inProgress:
        return this.renderHomeVideoContentInProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeMainContainer className="home-container">
        <Header />
        <HomeContentContainer className="home-content">
          <LeftNavigationContainer className="home-left">
            {this.renderNavigationItemsContainer()}
            {this.renderContactUsSection()}
          </LeftNavigationContainer>

          <RightContainer className="home-right">
            {this.renderHomeContentPrimeDealSection()}
            <HomeVideoListMainContainer>
              {this.renderHomeVideoListsContentViews()}
            </HomeVideoListMainContainer>
          </RightContainer>
        </HomeContentContainer>
      </HomeMainContainer>
    )
  }
}

export default HomeRoute
