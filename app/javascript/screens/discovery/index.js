import React, { Fragment } from 'react';
import NavBarFooter from '../../components/common/navbar_footer'
import Discovery from '../../components/discovery'
import SectionWrapper from '../../components/section_wrapper'

const DiscoveryScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <NavBarFooter></NavBarFooter>
        <Discovery></Discovery>
      </SectionWrapper>
    </Fragment>
  )
}

export default DiscoveryScreen;