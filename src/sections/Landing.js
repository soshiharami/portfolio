import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />
    <Triangle
      color="primaryDark"
      height={['15vw', '15vw']}
      width={['50vh', '50vh']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '50vh']}
      width={['50vw', '55vw']}
    />

    <Triangle
      color="primaryDark"
      height={['2vh', '55vh']}
      width={['75vw', '10vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[6, 7]}
              mb={[3, 4, 5]}
            >
              {`Hello 世界!`}
            </Heading>

            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[6, 7]}
              mb={[3, 4, 5]}
            >
              {`I'm soshi!`}
            </Heading>

            <Heading
              as="h4"
              color= '#f400f0'
              fontSize={[5, 5]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
             <TextLoop interval={5000}>
                {roles
                  .sort(() => deterministicBehaviour || Math.random() - 0.5)
                  .map((text) => (
                    <Text width={[0, 0]} key={text}>
                      {text}
                    </Text>
                  ))}
              </TextLoop>
            </Heading>

             <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
               {socialLinks.map(({ id, ...rest }) => (
                 <Box mx={5} fontSize={[5, 6, 6]} key={id}>
                   <SocialLink {...rest} />
                 </Box>
               ))}
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
