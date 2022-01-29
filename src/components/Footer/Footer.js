import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkItem>Call</LinkItem>
    <LinkItem href="tel:718-594-2432">718-594-2432</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkItem>Email</LinkItem>
    <LinkItem href="mailto:janekia.pinkard@gmail.com">janekia.pinkard@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time!</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/janekia?tab=repositories">
         <AiFillGithub size="3rem" />
       </SocialIcons>
       <SocialIcons href="https://www.linkedin.com/in/janekia-pinkard-7572a091/">
         <AiFillLinkedin size="3rem" />
       </SocialIcons>
       </SocialContainer>
    </SocialContainer>
  </FooterWrapper>
  );
};

export default Footer;