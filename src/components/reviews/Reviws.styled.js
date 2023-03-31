import styled from 'styled-components';

export const Section = styled.section`
  padding: 24px 0;
`;

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ReviewItem = styled.li`
padding: 14px 28px;
margin-bottom: 14px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius:4px;
`;

export const ReviewerName = styled.p`
  margin: 14px 0;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.03em;
  color: rgba(4, 55, 184, 1);
`;

export const ReviewContent = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.5;
`;
