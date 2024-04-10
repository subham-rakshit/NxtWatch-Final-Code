import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  height: 100vh;
`
export const TrendingContentContainer = styled.div`
  height: 90%;
  display: flex;
`
export const TrendingVideosRightContainer = styled.div`
  width: 80%;
  height: 100%;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 992px) {
    width: 84%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
export const TrendingVideoHeader = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  display: ${props => (props.isApiStatusFailure ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`
export const HeaderContentArea = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  gap: 20px;
`
export const LogoContainer = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: ${props => (props.isDark ? '#000000' : '#cbd5e1')};
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeaderText = styled.h1`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  font-size: 25px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const TrendingVideoListsContainer = styled.ul`
  width: 95%;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: auto;
  margin-bottom: 20px;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`
export const TrendingVideoItemContainer = styled.li`
  display: flex;
  gap: 20px;
  cursor: pointer;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`
export const TrendingVideoThumbnailImg = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
  @media screen and (max-width: 767px and min-width: 576px) {
    width: 320px;
  }
  @media screen and (min-width: 992px) {
    width: 350px;
  }
`

export const TrendingVideoDetailsContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 575px) {
    display: flex;
    gap: 15px;
    padding: 0 15px;
  }
`

export const TrendingVideoTitle = styled.p`
  width: 70%;
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0;
  line-height: 1.5;
  margin-bottom: 0;
  @media screen and (max-width: 575px) {
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
  }
  @media screen and (max-width: 991px) and (min-width: 576px) {
    font-size: 18px;
    width: 100%;
    line-height: 1.5;
  }
`
export const TrendingVideoChannelName = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#64748b')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 15px;
  margin-bottom: 0;
  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`
export const TrendingVideoViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingVideoViews = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#64748b')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
`

export const ChannelLogoInMobile = styled.img`
  display: none;
  @media screen and (max-width: 575px) {
    display: block;
    width: 40px;
    height: 40px;
  }
`
