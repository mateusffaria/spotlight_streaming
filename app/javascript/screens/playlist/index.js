import React, { Fragment } from 'react';
import NavBarFooter from '../../components/common/navbar_footer'
import Playlists from '../../components/playlists'
import SectionWrapper from '../../components/section_wrapper'

const PlaylistScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Playlists></Playlists>
        <NavBarFooter/>
      </SectionWrapper>
    </Fragment>
  )
}

export default PlaylistScreen;