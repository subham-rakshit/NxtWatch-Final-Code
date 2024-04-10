import styled from 'styled-components'

export const VideoContainer = styled.div`
  height: 400px;
  @media screen and (max-width: 767px) {
    height: 300px;
  }
`
export const VideoItemDetailsTitle = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    padding: 0 12px;
    font-size: 16px;
  }
`
export const ViewsAndLikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 12px;
  }
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
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
  @media screen and (max-width: 767px) {
    gap: 20px;
  }
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
  @media screen and (max-width: 767px) {
    padding: 0;
    margin-top: 10px;
  }
`
export const BreakingLine = styled.hr`
  border: 1px solid ${props => (props.isDark ? '#94a3b8' : '#cbd5e1')};
  opacity: 0.7;
  @media screen and (max-width: 767px) {
    margin: 20px 12px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    padding: 0 12px;
  }
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`

export const ChannelName = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const SubscriberCount = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const ChannelDescription = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 15px;
  margin-top: 40px;
  font-weight: 400;
  line-height: 1.8;
  margin-left: 70px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    padding: 0 12px;
    margin-left: 0;
    margin-top: 10px;
  }
`
