import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {
  LeftNavigationContainer,
  NavigationItemsContainer,
  NavItem,
  NavItemText,
  ContactUsSection,
  ContactUsHeading,
  ContactLinkContainer,
  ContactLinkImg,
  ContactUsDescription,
} from './styledComponent'

const renderContactUsSection = isDark => (
  <ContactUsSection>
    <ContactUsHeading isDark={isDark}>CONTACT US</ContactUsHeading>
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
    <ContactUsDescription isDark={isDark}>
      Enjoy! Now to see your channels and recommendations!
    </ContactUsDescription>
  </ContactUsSection>
)

const renderNavigationItemsContainer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTab} = value

      const onClickedHomeTab = () => {
        changeTab('Home')
      }

      const onClickedTrendingTab = () => {
        changeTab('Trending')
      }

      const onClickedGamingTab = () => {
        changeTab('Gaming')
      }

      const onClickedSavedTab = () => {
        changeTab('Saved')
      }

      return (
        <NavigationItemsContainer>
          <Link to="/" className="link">
            <NavItem onClick={onClickedHomeTab} key="home">
              <AiFillHome size="18" color="#909090" />
              <NavItemText isDark={isDark}>Home</NavItemText>
            </NavItem>
          </Link>

          <Link to="/trending" className="link">
            <NavItem onClick={onClickedTrendingTab} key="trending">
              <HiFire size="18" color="#909090" />
              <NavItemText isDark={isDark}>Trending</NavItemText>
            </NavItem>
          </Link>

          <Link to="/gaming" className="link">
            <NavItem onClick={onClickedGamingTab} key="gaming">
              <SiYoutubegaming size="18" color="#909090" />
              <NavItemText isDark={isDark}>Gaming</NavItemText>
            </NavItem>
          </Link>

          <Link to="/saved-videos" className="link">
            <NavItem onClick={onClickedSavedTab} key="saved">
              <MdPlaylistAdd size="18" color="#909090" />
              <NavItemText isDark={isDark}>Saved videos</NavItemText>
            </NavItem>
          </Link>
        </NavigationItemsContainer>
      )
    }}
  </ThemeContext.Consumer>
)

const VideoItemDetailsNavigationItems = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <LeftNavigationContainer isDark={isDark}>
          {renderNavigationItemsContainer()}
          {renderContactUsSection(isDark)}
        </LeftNavigationContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(VideoItemDetailsNavigationItems)
