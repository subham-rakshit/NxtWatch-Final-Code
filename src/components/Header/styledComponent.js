import styled from 'styled-components'

export const Navbar = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 35px;
  //   border: 1px solid red;
  background-color: ${props => (props.isDark ? '#231f20' : '#f1f5f9')};
  @media screen and (max-width: 767px) {
    padding: 0 15px;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 83px;
  }
`
export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  //   border: 1px solid red;
  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`
export const Profile = styled.img`
  width: 28px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: ${props =>
    props.isDark ? '1px solid #ffffff' : '1px solid #3b82f6'};
  border-radius: 3px;
  outline: none;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  font-size: 13px;
  font-weight: 600;
  font-family: 'Roboto';
  padding: 6px 15px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MobileTabBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const MobileThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Popup Content Style -->

export const PopupLogoutCard = styled.div`
  width: 90%;
  max-width: 340px;
  height: 170px;
  background-color: ${props => (props.isDark ? '#231f20' : '#f1f5f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  border-radius: 10px;
  border: none;
`
export const PopupLogoutHeading = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const PopupLogoutBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const PopupCancelBtn = styled.button`
  width: 100px;
  background-color: transparent;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 8px 5px;
  outline: none;
  cursor: pointer;
`
export const PopupConfirmBtn = styled(PopupCancelBtn)`
  background-color: #3b82f6;
  color: #cbd5e1;
  border: none;
`

// Popup Menu Style -->

export const PopupMenuContainer = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#f1f5f9')};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //   border: 1px solid red;
`
export const PopupMenuNavTabContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  background-color: transparent;
  //   border: 1px solid red;
`
export const PopupMenuTabItem = styled.li`
  background-color: ${props => props.bgColor};
  //   border: 1px solid red;
`
export const TabItemContent = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 15px;
  //   border: 1px solid red;
`
export const PopupMenuTabItemText = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#231f20')};
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
  font-family: 'Roboto';
  //   border: 1px solid red;
`
