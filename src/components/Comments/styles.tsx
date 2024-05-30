import styled from 'styled-components';

export const CommentContainer = styled.div`
  background-color: #121212;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 10px 15px;
  margin: 10px 0;
  color: var(--text-color);
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    color: #aaaaaa;
    font-size: 12px;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  object-fit: cover;
  border: 2px solid var(--primary-color);
`;

export const UserName = styled.h3`
  font-size: 14px;
  margin: 0;

  span {
    color: #aaaaaa;
    font-size: 12px;
  }
`;

export const CommentBody = styled.div`
  margin-bottom: 10px;
`;

export const CommentText = styled.p`
  margin: 0;
`;

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteIcon = styled.span`
  margin-left: auto;
  cursor: pointer;
  font-size: 14px;
`;

export const LikeButton = styled.button`
  background-color: transparent;
  color: #aaaaaa;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: var(--primary-color);
  }
`;
