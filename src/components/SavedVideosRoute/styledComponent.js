import styled from 'styled-components'

export const SaveVideosMainContainer = styled.div`
  height: 100vh;
`
export const SaveVideosContentContainer = styled.div`
  height: 90%;
  display: flex;
  //   border: 1px solid red;
`
export const SaveVideosRightContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
export const SaveVideoHeader = styled.div`
  width: 100%;
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`
export const HeaderContentArea = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 20px;
  //   border: 1px solid red;
`
export const LogoContainer = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: #cbd5e1;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeaderText = styled.h1`
  color: #1e293b;
  font-size: 28px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const SaveVideoListsContainer = styled.ul`
  height: 100%;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  //   border: 1px solid red;
`
export const SaveVideoItemContainer = styled.li`
  display: flex;
  gap: 20px;
  cursor: pointer;
  //   border: 1px solid red;
`
export const SaveVideoThumbnailImg = styled.img`
  width: 350px;
  height: 200px;
  object-fit: cover;
`
export const SaveVideoTitle = styled.h1`
  color: #1e293b;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0;
  max-width: 400px;
  line-height: 1.8;
  margin-bottom: 0;
`
export const SaveVideoChannelName = styled.p`
  color: #64748b;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 15px;
  margin-bottom: 0;
`
export const SaveVideoViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  //   border: 1px solid red;
`
export const SaveVideoViews = styled(SaveVideoChannelName)`
  color: #64748b;
  margin-top: 0;
  //   border: 1px solid red;
`
export const NoSavedVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   border: 1px solid red;
`
export const NoSaveVideosImg = styled.img`
  width: 400px;
`
export const NoSaveVideosHeading = styled.h1`
  color: #1e293b;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-top: 30px;
  margin-bottom: 0;
`
export const NoSaveVideosDescription = styled.p`
  color: #475569;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
`
