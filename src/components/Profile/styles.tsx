import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 20px;
`;

export const ProfileContainer = styled.div`
  background-color: #121212;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: #ffffff;
  border: 1px solid var(--border-color);
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid var(--primary-color);
  padding: 3px;
`;

export const ProfileName = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const ProfileRole = styled.p`
  font-size: 14px;
  color: #aaaaaa;
  margin: 5px 0 15px;
`;

export const EditButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: var(--primary-color);
    color: #ffffff;
  }
`;
