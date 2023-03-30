import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  padding: 6px 12px;
  border-radius: 2px;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 16px;
  transition: all 250ms ease;
  &:hover,
  &:focus {
    background-color: rgba(4, 55, 184, 1);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    color: #fff;
  }
`;
