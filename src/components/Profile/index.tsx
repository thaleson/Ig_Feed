
import { ProfileContainer, ProfileImage, ProfileName, ProfileRole, EditButton, ProfileCard } from './styles';
import profileImg from '../../assets/profile.png';

const Profile = () => {
  return (
    <ProfileCard>
      <ProfileContainer>
        <ProfileImage src={profileImg} alt="Leslie Alexander" />
        <ProfileName>Thaleson silva</ProfileName>
        <ProfileRole>Dev full stack</ProfileRole>
        <EditButton>Editar seu perfil</EditButton>
      </ProfileContainer>
    </ProfileCard>
  );
};

export default Profile;
