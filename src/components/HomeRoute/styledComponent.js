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

// **** Home LEFT --> ****

export const LeftNavigationContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 20px 0;
  //   border: 1px solid blue;
`
export const NavigationItemsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  //   border: 1px solid red;
`
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0 16px;
`
export const NavItemText = styled.h1`
  color: #0f0f0f;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 15px;
  //   border: 1px solid red;
`
export const ContactUsHeading = styled.h1`
  color: #1e293b;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const ContactLinkContainer = styled.div`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  gap: 15px;
`
export const ContactLinkImg = styled.img`
  width: 30px;
  cursor: pointer;
`
export const ContactUsDescription = styled.p`
  color: #1e293b;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`
// **** Home RIGHT --> ****
export const RightContainer = styled(LeftNavigationContainer)`
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  background-color: #f1f5f9;
  padding: 0;
  //   border: 1px solid green;
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
`
export const PrimePlansContainer = styled.div`
  width: 38%;
  height: 100%;
  //   border: 1px solid red;
`
export const PrimeWebsiteLogo = styled.img`
  width: 140px;
`
export const PrimePlanDescription = styled(ContactUsDescription)`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
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
`
export const HomeVideoListMainContainer = styled.div`
  width: 95%;
  margin: 20px 0;
  //   border: 1px solid red;
`
export const SearchButtonContainer = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  //   background-color: red;
`
export const SearchBox = styled.input`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  color: #475569;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  outline: none;
  padding: 10px 12px;
`
export const SearchButton = styled.button`
  width: 120px;
  height: 100%;
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  outline: none;
  cursor: pointer;
`
