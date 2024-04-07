import styled from 'styled-components'

// Failure -->

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding: 0 15px;
  height: 100%;
  //   border: 1px solid blue;
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
