import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  height: 100vh;
`

export const NotFoundContentContainer = styled.div`
  height: 90%;
  display: flex;
  margin: auto;
`
export const NotFoundRightContainer = styled.div`
  height: 100%;
  width: 80%;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '#f8fafc')};
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 20px 0;
  }
  @media screen and (min-width: 992px) {
    width: 84%;
  }
`
export const NotFoundImg = styled.img`
  width: 400px;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`
export const NotFoundErrorHeading = styled.h1`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 0;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
    margin-top: 20px;
  }
`

export const NotFoundErrorDescription = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-top: 15px;
  }
`
