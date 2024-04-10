import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginMainContainer,
  LoginContentCard,
  WebsiteLogo,
  FormContainer,
  LabelElem,
  InputBox,
  PasswordInputBox,
  ShowPasswordContainer,
  ShowPasswordLabelElem,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class LoginRoute extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    isShowPassword: false,
    errorMsg: '',
  }

  // Submit From Success -->
  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    const {history} = this.props
    history.replace('/')
  }

  // Submit From Failure -->
  onSubmitFailure = errorMsg => {
    this.setState({errorMsg})
  }

  // Submit form functionality -->
  onSubmitLoginForm = async event => {
    event.preventDefault()

    const {usernameInput, passwordInput} = this.state

    const userDetails = {username: usernameInput, password: passwordInput}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  //   Main render() -->
  render() {
    const {errorMsg} = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          //   Username Input -->
          const getUpdateUsername = event => {
            this.setState({usernameInput: event.target.value})
          }

          const renderUsernameInput = () => {
            const {usernameInput} = this.state

            return (
              <>
                <LabelElem htmlFor="username" isDark={isDark}>
                  USERNAME
                </LabelElem>
                <InputBox
                  type="text"
                  placeholder="Username"
                  id="username"
                  onChange={getUpdateUsername}
                  value={usernameInput}
                  isDark={isDark}
                />
              </>
            )
          }

          //   Password Input -->
          const getUpdatePassword = event => {
            this.setState({passwordInput: event.target.value})
          }

          const renderPasswordInput = () => {
            const {passwordInput, isShowPassword} = this.state

            return (
              <>
                <LabelElem htmlFor="password" isDark={isDark}>
                  PASSWORD
                </LabelElem>
                <PasswordInputBox
                  type={isShowPassword ? 'text' : 'password'}
                  placeholder="Password"
                  id="password"
                  onChange={getUpdatePassword}
                  value={passwordInput}
                  isDark={isDark}
                />
              </>
            )
          }

          //   ShowPassword Input -->
          const passwordIsVisible = () => {
            const {isShowPassword} = this.state

            this.setState({isShowPassword: !isShowPassword})
          }

          const renderShowPasswordInput = () => (
            <ShowPasswordContainer>
              <input
                type="checkbox"
                id="showPassword"
                onChange={passwordIsVisible}
              />
              <ShowPasswordLabelElem htmlFor="showPassword" isDark={isDark}>
                Show Password
              </ShowPasswordLabelElem>
            </ShowPasswordContainer>
          )

          return (
            <LoginMainContainer isDark={isDark}>
              <LoginContentCard isDark={isDark}>
                <WebsiteLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.onSubmitLoginForm}>
                  {renderUsernameInput()}
                  {renderPasswordInput()}
                  {renderShowPasswordInput()}
                  <LoginButton type="submit">Login</LoginButton>
                  {errorMsg.length > 0 && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormContainer>
              </LoginContentCard>
            </LoginMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
