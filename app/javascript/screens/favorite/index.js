import React, { Fragment } from 'react';
import NavBarFooter from '../../components/common/navbar_footer'
import SectionWrapper from '../../components/section_wrapper'
import { Heading } from 'react-bulma-components'
import Favorites from '../../components/favorites'

const FavoriteScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Liked & Playlists</Heading>
        <NavBarFooter></NavBarFooter>
        <Favorites></Favorites>
      </SectionWrapper>
    </Fragment>
  );
}

export default FavoriteScreen;