import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FeedContainer, FeedHeader, FeedContent, FeedFooter, UserImage, UserName, UserRole, FeedText, FeedLink, FeedTags, FeedbackInput, PublishButton } from './styles';
import Comment from '../Comments';
import profileImg from '../../assets/profile.png';
import steveJobsImg from '../../assets/steve.jpg';
import elonMuskImg from '../../assets/elo.jpeg';
import markZuckerbergImg from '../../assets/mark.jpg';
import UserImg from '../../assets/user.png';
import femaleImg from '../../assets/meta.jpeg';
import { Comment as CommentType } from '../../types/Comment';

const profileImages = [steveJobsImg, elonMuskImg, markZuckerbergImg,UserImg,femaleImg ];

const getRandomProfileImage = () => {
  const randomIndex = Math.floor(Math.random() * profileImages.length);
  return profileImages[randomIndex];
};

const Feed = () => {
  const [feedback, setFeedback] = useState('');
  const [comments, setComments] = useState<CommentType[]>(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [publishedAt] = useState(new Date());

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value);
  };

  const handlePublish = () => {
    const newComment: CommentType = {
      id: Date.now(),
      text: feedback,
      likes: 0,
      author: "Usuário",
      authorImg: getRandomProfileImage(),
    };
    setComments([...comments, newComment]);
    setFeedback('');
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const handleLikeComment = (id: number) => {
    setComments(comments.map(comment => {
      if (comment.id === id) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    }));
  };

  const timeAgo = formatDistanceToNow(publishedAt, { addSuffix: true });

  return (
    <FeedContainer>
      <FeedHeader>
        <UserImage src={profileImg} alt="Jane Cooper" />
        <div>
          <UserName>Thaleson silva</UserName>
          <UserRole>Dev full stack</UserRole>
        </div>
        <span>{timeAgo}</span>
      </FeedHeader>
      <FeedContent>
        <FeedText>Fala galeraa 👋</FeedText>
        <FeedText>
          Acabei de subir mais um projeto no meu portifa🚀
        </FeedText>
        <FeedLink href="https://todo-list-gamma-beige.vercel.app/" target="_blank">👉 TodoList/checklist</FeedLink>
        <FeedTags>#novoprojeto #REACT</FeedTags>
      </FeedContent>
      <FeedFooter>
        <FeedText>Deixe seu feedback</FeedText>
        <FeedbackInput 
          type="text" 
          placeholder="Escreva um comentário..." 
          value={feedback} 
          onChange={handleInputChange}
        />
        {feedback && <PublishButton onClick={handlePublish}>Publicar</PublishButton>}
      </FeedFooter>
      {comments.map(comment => (
        <Comment 
          key={comment.id} 
          comment={comment} 
          onDelete={handleDeleteComment} 
          onLike={handleLikeComment}
        />
      ))}
    </FeedContainer>
  );
};

export default Feed;
