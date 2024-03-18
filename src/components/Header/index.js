import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  Navbar,
  WebsiteLogo,
  NavItemContainer,
  Profile,
  LogoutButton,
} from './styledComponent'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, updateTheme} = value

      const changeTheme = () => {
        updateTheme()
      }

      const onClickedLogOut = () => {
        Cookies.remove('jwt_token')

        const {history} = props
        history.replace('/login')
      }

      return (
        <Navbar isDark={isDark}>
          <Link to="/">
            <WebsiteLogo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <NavItemContainer>
            {isDark ? (
              <FiSun
                size="22"
                color="#ffffff"
                cursor="pointer"
                onClick={changeTheme}
              />
            ) : (
              <FaMoon size="22" cursor="pointer" onClick={changeTheme} />
            )}
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutButton
              type="button"
              isDark={isDark}
              onClick={onClickedLogOut}
            >
              Logout
            </LogoutButton>
          </NavItemContainer>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Header)
