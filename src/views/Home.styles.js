import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
    margin: 0 auto;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.heading};
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  align-self: ${({ isPrimary }) => !isPrimary && 'flex-end'};
  font-size: ${({ theme, isPrimary }) => isPrimary && theme.font.size.quote};
  font-style: ${({ isPrimary }) => isPrimary && 'italic'};
  font-weight: ${({ isPrimary, theme }) => !isPrimary && theme.font.weight.bold};
  margin: 5px 0;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 8px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 5px #ccc;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;
