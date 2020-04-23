import React, { Fragment } from 'react';
import NavBarFooter from '../../components/common/navbar_footer'
import Albums from '../../components/albums'
import SectionWrapper from '../../components/section_wrapper'

const AlbumScreen = () => {  
  return (    
    <Fragment>
      <SectionWrapper>
        <Albums></Albums>
        <NavBarFooter/>
      </SectionWrapper>
    </Fragment>
  )
}

export default AlbumScreen;