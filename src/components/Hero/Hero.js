import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio!
      </SectionTitle>
      <SectionText>
       The purpose of this website is to show visitors my work, and to give individuals a chance to interact with one of my projects! 
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/janekia-pinkard-7572a091/"}>Learn More!</Button>
    </LeftSection>
  </Section>
);

export default Hero;