import React from 'react';
import { CommentContainer, CommentHeader, CommentBody, CommentFooter, UserImage, UserName, CommentText, DeleteIcon, LikeButton } from './styles';
import { Comment as CommentType } from '../../types/Comment';

interface CommentProps {
  comment: CommentType;
  onDelete: (id: number) => void;
  onLike: (id: number) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, onDelete, onLike }) => {
  const handleLike = () => {
    onLike(comment.id);
  };

  return (
    <CommentContainer>
      <CommentHeader>
        <UserImage src={comment.authorImg} alt={comment.author} />
        <div>
          <UserName>{comment.author}</UserName>
          <span>Cerca de 2h</span>
        </div>
        <DeleteIcon onClick={() => onDelete(comment.id)}>🗑️</DeleteIcon>
      </CommentHeader>
      <CommentBody>
        <CommentText>{comment.text}</CommentText>
      </CommentBody>
      <CommentFooter>
        <LikeButton onClick={handleLike}>👍 Aplaudir • {comment.likes}</LikeButton>
      </CommentFooter>
    </CommentContainer>
  );
};

export default Comment;
