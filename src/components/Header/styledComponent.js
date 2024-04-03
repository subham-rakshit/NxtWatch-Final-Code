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
    padding: 8px 15px;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 90px;
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

export const MobileNavTabContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 15px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  //   border: 1px solid red;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TabItem = styled.li`
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  font-size: 15px;
  font-weight: ${props => props.fontWeight};
  font-family: 'Roboto';
`
