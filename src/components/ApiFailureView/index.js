import ThemeContext from '../../context/ThemeContext'

import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponent'

const ApiFailureView = props => {
  const {onClickedAPIRetry} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImageSrc = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const onClickRetry = () => {
          onClickedAPIRetry()
        }
        return (
          <FailureContainer>
            <FailureImage src={failureImageSrc} alt="failure view" />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default ApiFailureView
