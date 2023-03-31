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
  border-bottom: 1px solid #000;
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
  text-shadow: 
  0 1px 0 hsl(174, 5%, 80%), 0 2px 0 hsl(174, 5%, 75%),
    0 1px 0 hsl(174, 5%, 70%), 0 1px 0 hsl(174, 5%, 66%),
    0 2px 0 hsl(174, 5%, 64%), 0 3px 0 hsl(174, 5%, 62%),
    0 7px 7px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.3);
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-right: 30px;
  `
export const Link = styled(NavLink)`
  padding: 10px 0;
  margin-right: 24px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  transition: color 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: rgba(4, 55, 184, 1);
  }
  &.active {
    color: rgba(4, 55, 184, 1);
    border-bottom: 3px solid rgba(4, 55, 184, 1);
  }
`;


