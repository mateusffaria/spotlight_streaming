import React, { Fragment } from 'react';
import SectionWrapper from '../../components/section_wrapper'
import { Columns, Heading, Button } from 'react-bulma-components'
import styled from 'styled-components'

const MainHeading = styled(Heading)`
  margin-top: 30px;
`

const DescriptionList = styled.ul`
  margin-top: 30px;
  font-size: 20px;
  list-style-type: square;
`

const ButtonSubscribe = styled(Button)`
  border-width: 2px;
  margin-top: 50px;
`

const HomeScreen = () => {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
          <MainHeading className='has-text-weight-light has-text-centered has-text-white' size={1}>
            Your <span className='has-text-success has-text-weight-bold'>MUSIC</span> app
          </MainHeading>
        </Columns.Column>
      </Columns>
      <Columns className='is-centered is-mobile'>
        <Columns.Column mobile={{size:8, offset:1}} desktop={{size:4, offset:2}}>
          <DescriptionList className='has-text-white'>
            <li>Your <b className='has-text-primary'>Favorite</b> Musics</li>
            <li>Your <b className='has-text-primary'>Favorite</b> Podcasts</li>
            <li>All <b className='has-text-primary'>releases</b></li>
            <li><b className='has-text-primary'>Discovery</b> new styles and artists</li>
          </DescriptionList>
        </Columns.Column>
      </Columns>
      <Columns className='has-text-centered'>
        <Columns.Column>
          <a href="/users/sign_up">
            <ButtonSubscribe className='is-success is-outlined is-large has-text-white'>Join us now!</ButtonSubscribe>
          </a>
        </Columns.Column>
      </Columns>
    </SectionWrapper>
  );
}

export default HomeScreen;