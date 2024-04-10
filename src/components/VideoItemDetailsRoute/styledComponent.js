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
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 20px 0;
  }
  @media screen and (min-width: 992px) {
    width: 84%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
