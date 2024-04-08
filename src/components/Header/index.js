import {Component} from 'react'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {MdMenu, MdClose, MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

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
  MobileTabBtn,
  MobileThemeBtn,
  PopupLogoutCard,
  PopupLogoutHeading,
  PopupLogoutBtnContainer,
  PopupCancelBtn,
  PopupConfirmBtn,
  PopupMenuContainer,
  PopupMenuNavTabContainer,
  PopupMenuTabItem,
  TabItemContent,
  PopupMenuTabItemText,
} from './styledComponent'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, updateTheme, activeTab, changeTab} = value
          const activeTabBg = isDark ? '#313131' : '#e2e8f0'

          const changeTheme = () => {
            updateTheme()
          }

          const onClickedLogOut = () => {
            Cookies.remove('jwt_token')

            const {history} = this.props
            history.replace('/login')
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
                {/* Website Logo Start --> */}
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
                {/* Website Logo Start --> */}

                {/* Theme Tab Btn Start --> */}
                <NavItemContainer>
                  {isDark ? (
                    <MobileThemeBtn onClick={changeTheme} data-testid="theme">
                      <FiSun size="20" color="#f9f9f9" cursor="pointer" />
                    </MobileThemeBtn>
                  ) : (
                    <MobileThemeBtn onClick={changeTheme} data-testid="theme">
                      <FaMoon size="20" cursor="pointer" />
                    </MobileThemeBtn>
                  )}
                  {/* Theme Tab Btn Start --> */}

                  {/* Profile Logo in Desktop --> */}
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  {/* Menu Logo in Mobile Starts --> */}
                  <Popup
                    trigger={
                      <MobileTabBtn type="button" aria-label="button">
                        <MdMenu
                          size="25"
                          className="mobile-logo"
                          color={isDark ? '#f9f9f9' : '#1e293b'}
                        />
                      </MobileTabBtn>
                    }
                    modal
                    className="popup-content"
                  >
                    {close => (
                      <PopupMenuContainer isDark={isDark}>
                        <MdClose
                          size="25"
                          color={isDark ? '#f9f9f9' : '#1e293b'}
                          onClick={() => close()}
                          className="close-popup-menu"
                        />
                        <PopupMenuNavTabContainer>
                          <Link to="/" className="popup-menu-link">
                            <PopupMenuTabItem
                              onClick={onClickedHomeTab}
                              bgColor={
                                activeTab === 'Home' ? activeTabBg : 'none'
                              }
                            >
                              <TabItemContent>
                                <AiFillHome
                                  size="20"
                                  color={
                                    activeTab === 'Home' ? '#ff0000' : '#909090'
                                  }
                                />
                                <PopupMenuTabItemText
                                  isDark={isDark}
                                  fontWeight={
                                    activeTab === 'Home' ? 'bold' : 'normal'
                                  }
                                >
                                  Home
                                </PopupMenuTabItemText>
                              </TabItemContent>
                            </PopupMenuTabItem>
                          </Link>

                          <Link to="/trending" className="popup-menu-link">
                            <PopupMenuTabItem
                              onClick={onClickedTrendingTab}
                              bgColor={
                                activeTab === 'Trending' ? activeTabBg : 'none'
                              }
                            >
                              <TabItemContent>
                                <HiFire
                                  size="20"
                                  color={
                                    activeTab === 'Trending'
                                      ? '#ff0000'
                                      : '#909090'
                                  }
                                />
                                <PopupMenuTabItemText
                                  isDark={isDark}
                                  fontWeight={
                                    activeTab === 'Trending' ? 'bold' : 'normal'
                                  }
                                >
                                  Trending
                                </PopupMenuTabItemText>
                              </TabItemContent>
                            </PopupMenuTabItem>
                          </Link>

                          <Link to="/gaming" className="popup-menu-link">
                            <PopupMenuTabItem
                              onClick={onClickedGamingTab}
                              bgColor={
                                activeTab === 'Gaming' ? activeTabBg : 'none'
                              }
                            >
                              <TabItemContent>
                                <SiYoutubegaming
                                  size="20"
                                  color={
                                    activeTab === 'Gaming'
                                      ? '#ff0000'
                                      : '#909090'
                                  }
                                />
                                <PopupMenuTabItemText
                                  isDark={isDark}
                                  fontWeight={
                                    activeTab === 'Gaming' ? 'bold' : 'normal'
                                  }
                                >
                                  Gaming
                                </PopupMenuTabItemText>
                              </TabItemContent>
                            </PopupMenuTabItem>
                          </Link>

                          <Link to="/saved-videos" className="popup-menu-link">
                            <PopupMenuTabItem
                              onClick={onClickedSavedTab}
                              bgColor={
                                activeTab === 'Saved' ? activeTabBg : 'none'
                              }
                            >
                              <TabItemContent>
                                <MdPlaylistAdd
                                  size="20"
                                  color={
                                    activeTab === 'Saved'
                                      ? '#ff0000'
                                      : '#909090'
                                  }
                                />
                                <PopupMenuTabItemText
                                  isDark={isDark}
                                  fontWeight={
                                    activeTab === 'Saved' ? 'bold' : 'normal'
                                  }
                                >
                                  Saved videos
                                </PopupMenuTabItemText>
                              </TabItemContent>
                            </PopupMenuTabItem>
                          </Link>
                        </PopupMenuNavTabContainer>
                      </PopupMenuContainer>
                    )}
                  </Popup>
                  {/* Menu Logo in Mobile End --> */}

                  {/* Logout Desktop Start -->  */}
                  <Popup
                    trigger={
                      <LogoutButton type="button" isDark={isDark}>
                        Logout
                      </LogoutButton>
                    }
                    modal
                    className="popup-content"
                  >
                    {close => (
                      <PopupLogoutCard isDark={isDark}>
                        <PopupLogoutHeading isDark={isDark}>
                          Are you sure you want to logout?
                        </PopupLogoutHeading>
                        <PopupLogoutBtnContainer className="logout-btn-container">
                          <PopupCancelBtn
                            isDark={isDark}
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </PopupCancelBtn>
                          <PopupConfirmBtn
                            type="button"
                            onClick={onClickedLogOut}
                          >
                            Confirm
                          </PopupConfirmBtn>
                        </PopupLogoutBtnContainer>
                      </PopupLogoutCard>
                    )}
                  </Popup>
                  {/* Logout Desktop End -->  */}

                  {/* Logout Mobile Start -->  */}
                  <Popup
                    trigger={
                      <MobileTabBtn type="button" aria-label="button">
                        <FiLogOut
                          size="20"
                          color={isDark ? '#f9f9f9' : '#1e293b'}
                        />
                      </MobileTabBtn>
                    }
                    modal
                    className="popup-content"
                  >
                    {close => (
                      <PopupLogoutCard isDark={isDark}>
                        <PopupLogoutHeading isDark={isDark}>
                          Are you sure you want to logout?
                        </PopupLogoutHeading>
                        <PopupLogoutBtnContainer className="logout-btn-container">
                          <PopupCancelBtn
                            isDark={isDark}
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </PopupCancelBtn>
                          <PopupConfirmBtn
                            type="button"
                            onClick={onClickedLogOut}
                          >
                            Confirm
                          </PopupConfirmBtn>
                        </PopupLogoutBtnContainer>
                      </PopupLogoutCard>
                    )}
                  </Popup>
                  {/* Logout Mobile End -->  */}
                </NavItemContainer>
              </Navbar>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)
