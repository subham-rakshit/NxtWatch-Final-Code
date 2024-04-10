import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  height: 100vh;
`
export const GamingContentContainer = styled.div`
  height: 90%;
  display: flex;
`
// Gaming Route Main Content Style Start ****

export const GamingVideosRightContainer = styled.div`
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
export const GamingVideoHeader = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  display: ${props => (props.isApiFailure ? 'none' : 'flex')};
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

export const GamingVideoListsContainer = styled.ul`
  width: 95%;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: auto;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) and (min-width: 576px) {
    gap: 20px;
  }
  @media screen and (max-width: 575px) {
    gap: 15px;
  }
`
export const GamingVideoItemContainer = styled.li`
  width: 250px;
  height: 380px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media screen and (max-width: 767px) and (min-width: 576px) {
    width: 200px;
    height: 350px;
  }
  @media screen and (max-width: 575px) {
    width: 46%;
    height: 280px;
  }
`
export const GamingVideoThumbnailImg = styled.img`
  width: 100%;
  height: 80%;
  margin-bottom: 20px;
  background-size: cover;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`
export const GamingVideoTitle = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0;
  margin-bottom: 5px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const GamingVideoViewCount = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#64748b')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 0;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
// Gaming Route Main Content Style End ****
