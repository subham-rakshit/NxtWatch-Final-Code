import styled from 'styled-components'

export const VideoItemDetailsMainContainer = styled.div`
  height: 100vh;
`

export const VideoItemDetailsContentContainer = styled.div`
  height: 90%;
  display: flex;
  margin: auto;
  //   border: 1px solid red;
`
export const VideoItemDetailsRightContainer = styled.div`
  height: 100%;
  width: 80%;
  //   border: 1px solid red;
  padding: 20px 30px;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#181818' : '#f8fafc')};
  @media screen and (min-width: 992px) {
    width: 84%;
  }
`
export const VideoItemDetailsTitle = styled.h1`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 20px;
  margin-bottom: 10px;
`
export const ViewsAndLikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  //   border: 1px solid red;
`
export const ViewsAndPublishedText = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const LikeDislikeAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const ReviewButtons = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
export const BreakingLine = styled.hr`
  border: 1px solid ${props => (props.isDark ? '#94a3b8' : '#cbd5e1')};
  opacity: 0.5;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  //   border: 1px solid red;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  //   border: 1px solid red;
`
export const ChannelDetailsContainer = styled.div``

export const ChannelName = styled.h1`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0;
  //   border: 1px solid red;
`
export const SubscriberCount = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const ChannelDescription = styled(ChannelName)`
  margin-top: 40px;
  font-weight: 400;
  line-height: 1.8;
`
