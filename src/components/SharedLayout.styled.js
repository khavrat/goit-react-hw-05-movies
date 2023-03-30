import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`; 

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  background-color: rgba(240, 240, 240, 1);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);  }
`;

export const Logo = styled.p`
  margin: 10px;
`;

export const LogoText = styled.span`
  font-weight: 700;
  font-size: 30px;
  margin-left: 10px;
  display: inline-block;
  vertical-align: baseline;
  color: rgba(4, 55, 184, 1);
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-right: 30px;
  `
export const Link = styled(NavLink)`
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  transition: color 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: rgba(4, 55, 184, 1);
  }
`;


