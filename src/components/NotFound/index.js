import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import VideoItemDetailsNavigationItems from '../VideoItemDetailsNavigationItems'

import {
  NotFoundMainContainer,
  NotFoundContentContainer,
  NotFoundRightContainer,
  NotFoundImg,
  NotFoundErrorHeading,
  NotFoundErrorDescription,
} from './styedComponent'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundImg = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundMainContainer>
          <Header />
          <NotFoundContentContainer>
            <VideoItemDetailsNavigationItems />
            <NotFoundRightContainer isDark={isDark}>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundErrorHeading isDark={isDark}>
                Page Not Found
              </NotFoundErrorHeading>
              <NotFoundErrorDescription isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundErrorDescription>
            </NotFoundRightContainer>
          </NotFoundContentContainer>
        </NotFoundMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
