import styled from 'styled-components';

export const Section = styled.section`
  padding: 24px 0;
`;

export const CreditList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

export const CreditItem = styled.li`
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`;

export const ActorName = styled.p`
margin:0;
padding: 10px 8px 5px 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.03em;
  color: rgba(4, 55, 184, 1);
`;

export const ActorChar = styled.p`
  margin: 0;
  padding: 5px 8px 10px 8px;
  line-height: 1.5;
`;