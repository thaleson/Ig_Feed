import React from 'react';
import {LogoContainer,LogoIcon,LogoText} from './styles'
import igfeed from '../../assets/igfeed.svg'


interface LogoProps {}

const Logo: React.FC<LogoProps> = () => (
  <LogoContainer>
    <LogoIcon />
    <LogoText><img src={igfeed} alt="igfeed" /></LogoText>
  </LogoContainer>
);

export default Logo;
