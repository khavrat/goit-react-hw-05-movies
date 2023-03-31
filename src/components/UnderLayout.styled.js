import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 6px 10px 6px 0;
  margin-bottom: 14px;
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
