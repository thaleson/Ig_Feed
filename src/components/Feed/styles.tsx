import styled from 'styled-components';

export const FeedContainer = styled.div`
  background-color: #121212;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  color: var(--text-color);
`;

export const FeedHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  span {
    margin-left: auto;
    color: #aaaaaa;
    font-size: 14px;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  object-fit: cover;
  border: 2px solid var(--primary-color);
`;

export const UserName = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const UserRole = styled.p`
  font-size: 14px;
  color: #aaaaaa;
  margin: 0;
`;

export const FeedContent = styled.div`
  margin-bottom: 20px;
`;

export const FeedText = styled.p`
  margin: 10px 0;
`;

export const FeedLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FeedTags = styled.p`
  color: var(--primary-color);
  margin-top: 10px;
`;

export const FeedFooter = styled.div`
  border-top: 1px solid var(--border-color);
  padding-top: 15px;
`;

export const FeedbackInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: #121212;
  color: var(--text-color);
  margin-top: 10px;

  &::placeholder {
    color: #aaaaaa;
  }
`;

export const PublishButton = styled.button`
  background-color: var(--primary-color);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    background-color: #17a247;
  }
`;
