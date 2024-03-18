import styled from 'styled-components'

export const Navbar = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 35px;
  //   border: 1px solid red;
  background-color: ${props => (props.isDark ? '#424242' : '#f9f9f9 ')};
`
export const WebsiteLogo = styled.img`
  width: 100px;
  cursor: pointer;
`
export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  //   border: 1px solid red;
`
export const Profile = styled.img`
  width: 28px;
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
`
