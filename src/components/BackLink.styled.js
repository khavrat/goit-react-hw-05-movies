import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 8px 16px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 2px;
  background-color: rgba(4, 55, 184, 1);
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  &:hover,
  &:focus {
    background-color: rgba(240, 240, 240, 1);
    color: #000;
  }

`;
