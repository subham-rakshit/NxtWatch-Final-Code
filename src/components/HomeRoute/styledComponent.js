import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  height: 100vh;
`
export const HomeContentContainer = styled.div`
  height: 90%;
  display: flex;
  margin: auto;
  //   border: 1px solid red;
`

// **** Home RIGHT --> ****

export const RightContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#181818' : '#f8fafc')};
  //   border: 1px solid green;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 992px) {
    width: 84%;
    // border: 1px solid red;
  }
`
export const PrimeMemberContainer = styled.div`
  height: 40%;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    height: 30%;
    padding: 20px 20px;
    // border: 1px solid red;
  }
`
export const PrimePlansContainer = styled.div`
  width: 38%;
  height: 100%;
  //   border: 1px solid red;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
export const PrimeWebsiteLogo = styled.img`
  width: 140px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`

export const PrimePlanDescription = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 20px;
  font-weight: 450;
  font-family: 'Roboto';
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 15px;
  }
`
export const GetItNowBtn = styled.button`
  color: #1e293b;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  border: 1px solid #181818;
  outline: none;
  background-color: transparent;
  padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
`
export const HomeVideoListMainContainer = styled.div`
  width: 95%;
  margin: 20px 0;
  //   border: 1px solid red;
`
export const SearchButtonContainer = styled.div`
  width: 70%;
  height: 30px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 575px) {
    width: 100%;
    height: 25px;
  }
  @media screen and (max-width: 768px and min-width: 576px) {
    width: 80%;
    height: 25px;
  }
`
export const SearchBox = styled.input`
  background-color: ${props => (props.isDark ? 'transparent' : '#ffffff')};
  width: 100%;
  height: 100%;
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  border: 1px solid ${props => (props.isDark ? '#424242' : '#cbd5e1')};
  border-radius: 2px;
  outline: none;
  padding: 10px 12px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`
export const SearchButton = styled.button`
  width: 100px;
  height: 100%;
  background-color: ${props => (props.isDark ? '#212121' : '#f1f5f9')};
  border: 1px solid ${props => (props.isDark ? '#424242' : '#cbd5e1')};
  outline: none;
  cursor: pointer;
`
export const VideoItemListsContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  padding-left: 0;
  //   border: 1px solid red;
  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`
export const VideoItemContainer = styled.li`
  width: 230px;
  height: 280px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  //   border: 1px solid green;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
  @media screen and (max-width: 767px and min-width: 576px) {
    width: 230px;
    height: 250px;
  }
  @media screen and (min-width: 992px) {
    width: 320px;
    height: 320px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  height: 50%;
  @media screen and (max-width: 575px) {
    height: 60%;
    background-size: cover;
  }
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 8px;
  padding: 0 10px;
`
export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitleText = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 0;
  margin-bottom: 0;
`
export const VideoChannelName = styled(VideoTitleText)`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin-top: 10px;
  margin-bottom: 0;
  //   border: 1px solid red;
`
export const VideoViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  //   border: 1px solid red;
`
export const VideoViews = styled(VideoChannelName)`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin-top: 0;
  //   border: 1px solid red;
`

// Failure -->

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  //   border: 1px solid red;
`
export const FailureImage = styled.img`
  width: 300px;
  @media screen and (max-width: 768px) {
    width: 230px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0;
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
  }
`
export const FailureDescription = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 15px;
  }
`
export const RetryButton = styled.button`
  color: #f9f9f9;
  background-color: #4f46e5;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 12px 30px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 10px 25px;
  }
`
