import React, { Fragment } from 'react'
import NavBarFooter from '../../components/common/navbar_footer'
import SectionWrapper from '../../components/section_wrapper'
import { Heading } from 'react-bulma-components'
import Search from '../../components/search'

const SearchScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Search</Heading>
        <Search></Search>
        <NavBarFooter></NavBarFooter>
      </SectionWrapper>
    </Fragment>
  )
}

export default SearchScreen;