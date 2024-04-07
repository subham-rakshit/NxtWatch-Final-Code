import {Component} from 'react'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {MdMenu, MdClose} from 'react-icons/md'

// import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'
// import {RiCloseLine} from 'react-icons/ri'

import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {
  Navbar,
  WebsiteLogo,
  NavItemContainer,
  Profile,
  LogoutButton,
  MobileNavTabContainer,
  TabItem,
} from './styledComponent'

class Header extends Component {
  state = {menuIsClicked: false}

  render() {
    const {menuIsClicked} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, updateTheme, activeTab, changeTab} = value

          const changeTheme = () => {
            updateTheme()
          }

          const onClickedLogOut = () => {
            Cookies.remove('jwt_token')

            const {history} = this.props
            history.replace('/login')
          }

          const onClickedMenuLogo = () => {
            this.setState({menuIsClicked: !menuIsClicked})
          }

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
            <>
              <Navbar isDark={isDark}>
                <Link to="/">
                  <WebsiteLogo
                    src={
                      isDark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                    onClick={onClickedHomeTab}
                  />
                </Link>
                <NavItemContainer>
                  {isDark ? (
                    <FiSun
                      size="20"
                      color="#f9f9f9"
                      cursor="pointer"
                      onClick={changeTheme}
                    />
                  ) : (
                    <FaMoon size="20" cursor="pointer" onClick={changeTheme} />
                  )}

                  {/* Profile Logo in Desktop --> */}
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  {/* Menu Logo in Mobile --> */}
                  {menuIsClicked ? (
                    <MdClose
                      size="25"
                      className="mobile-logo"
                      color={isDark ? '#f9f9f9' : '#1e293b'}
                      onClick={onClickedMenuLogo}
                    />
                  ) : (
                    <MdMenu
                      size="25"
                      className="mobile-logo"
                      color={isDark ? '#f9f9f9' : '#1e293b'}
                      onClick={onClickedMenuLogo}
                    />
                  )}

                  {/* Logout Desktop -->  */}
                  <LogoutButton
                    type="button"
                    isDark={isDark}
                    onClick={onClickedLogOut}
                  >
                    Logout
                  </LogoutButton>

                  {/* Logout Mobile -->  */}
                  <FiLogOut
                    size="20"
                    onClick={onClickedLogOut}
                    className="mobile-logo"
                    color={isDark ? '#f9f9f9' : '#1e293b'}
                  />
                </NavItemContainer>
              </Navbar>

              {/* NavItems in mobile view --> */}
              {menuIsClicked && (
                <MobileNavTabContainer isDark={isDark}>
                  <Link to="/" className="link">
                    <TabItem
                      isDark={isDark}
                      key="home"
                      fontWeight={activeTab === 'Home' ? 'bold' : 'normal'}
                      onClick={onClickedHomeTab}
                    >
                      Home
                    </TabItem>
                  </Link>

                  <Link to="/trending" className="link">
                    <TabItem
                      isDark={isDark}
                      key="trending"
                      fontWeight={activeTab === 'Trending' ? 'bold' : 'normal'}
                      onClick={onClickedTrendingTab}
                    >
                      Trending
                    </TabItem>
                  </Link>

                  <Link to="/gaming" className="link">
                    <TabItem
                      isDark={isDark}
                      key="gaming"
                      fontWeight={activeTab === 'Gaming' ? 'bold' : 'normal'}
                      onClick={onClickedGamingTab}
                    >
                      Gaming
                    </TabItem>
                  </Link>

                  <Link to="/saved-videos" className="link">
                    <TabItem
                      isDark={isDark}
                      key="saved"
                      fontWeight={activeTab === 'Saved' ? 'bold' : 'normal'}
                      onClick={onClickedSavedTab}
                    >
                      Saved videos
                    </TabItem>
                  </Link>
                </MobileNavTabContainer>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)
