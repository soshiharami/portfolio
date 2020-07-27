import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>

    <Triangle
      color="secondaryLight"
      height={['70vh', '90vh']}
      width={['140vw', '5vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['100vh', '100vh']}
      width={['50vw', '150vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['10vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const Skill = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="skills"/>
  </Section.Container>
);

export default Skill;
