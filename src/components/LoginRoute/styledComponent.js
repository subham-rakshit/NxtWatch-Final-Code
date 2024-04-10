import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`
export const LoginContentCard = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
  box-shadow: ${props => (props.isDark ? 'none' : '4px 4px 30px 10px #e2e8f0')};
  border-radius: 6px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};

  @media screen and (max-width: 767px) {
    padding: 30px 0;
  }
`
export const WebsiteLogo = styled.img`
  width: 160px;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    width: 130px;
    margin-bottom: 30px;
  }
`
export const FormContainer = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const LabelElem = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#616e7c')};
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 6px;
`
export const InputBox = styled.input`
  color: #64748b;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 20px;
  border: ${props =>
    props.isDark ? '1px solid #475569' : '1px solid #cbd5e1'};
  border-radius: 4px;
  outline: none;
  padding: 10px 12px;
  background-color: transparent;
`
export const PasswordInputBox = styled(InputBox)`
  margin-bottom: 8px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 0;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
`
export const ShowPasswordLabelElem = styled(LabelElem)`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 0;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 10px 10px;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 10px;
`
