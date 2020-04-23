import React, { Fragment } from 'react';
import NavBarFooter from '../../components/common/navbar_footer'
import Artists from '../../components/artists'
import SectionWrapper from '../../components/section_wrapper'

const ArtistScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Artists></Artists>
        <NavBarFooter/>
      </SectionWrapper>
    </Fragment>
  )
}

export default ArtistScreen;