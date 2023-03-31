import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 9px 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 2px;
  border: none;
  margin-left: 10px;
  background-color: rgba(4, 55, 184, 1);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  color: #fff;
  transition: background 250ms ease-in-out, color 250ms ease-in-out;
  &:hover,
  &:focus {
    background-color: rgba(240, 240, 240, 1);
    color: rgba(4, 55, 184, 1);
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 300px;
  font: inherit;
  font-size: 16px;
  padding: 8px 12px;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
