import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

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
} from './styledComponent'

class LoginRoute extends Component {
  state = {usernameInput: '', passwordInput: '', isShowPassword: false}

  // Submit From -->

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    const {history} = this.props
    history.replace('/')
  }

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

  //   Username Input -->

  getUpdateUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  renderUsernameInput = () => {
    const {usernameInput} = this.state

    return (
      <>
        <LabelElem htmlFor="username">USERNAME</LabelElem>
        <InputBox
          type="text"
          placeholder="Username"
          id="username"
          onChange={this.getUpdateUsername}
          value={usernameInput}
        />
      </>
    )
  }

  //   Password Input -->

  getUpdatePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  renderPasswordInput = () => {
    const {passwordInput, isShowPassword} = this.state

    return (
      <>
        <LabelElem htmlFor="password">PASSWORD</LabelElem>
        <PasswordInputBox
          type={isShowPassword ? 'text' : 'password'}
          placeholder="Password"
          id="password"
          onChange={this.getUpdatePassword}
          value={passwordInput}
        />
      </>
    )
  }

  //   ShowPassword Input -->

  passwordIsVisible = () => {
    const {isShowPassword} = this.state

    this.setState({isShowPassword: !isShowPassword})
  }

  renderShowPasswordInput = () => (
    <ShowPasswordContainer>
      <input
        type="checkbox"
        id="showPassword"
        onChange={this.passwordIsVisible}
      />
      <ShowPasswordLabelElem htmlFor="showPassword">
        Show Password
      </ShowPasswordLabelElem>
    </ShowPasswordContainer>
  )

  //   Main render() -->
  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginMainContainer className="login-main-container">
        <LoginContentCard className="login-content-card">
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer
            className="form-container"
            onSubmit={this.onSubmitLoginForm}
          >
            {this.renderUsernameInput()}
            {this.renderPasswordInput()}
            {this.renderShowPasswordInput()}
            <LoginButton type="submit">Login</LoginButton>
          </FormContainer>
        </LoginContentCard>
      </LoginMainContainer>
    )
  }
}

export default LoginRoute
