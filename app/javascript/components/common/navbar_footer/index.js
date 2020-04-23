import React, { Fragment } from 'react'
import { Navbar, Container, Columns } from 'react-bulma-components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GoSearch, GoHeart, GoHome } from 'react-icons/go'

const NavBarWithBorder = styled(Navbar)`
  border-right-color: #25E809 !important;
  border-right-style: solid;
  border-right-width: 1px;
`

const ColumnsFullWidth = styled.div`
  margin-top: 10%;
  height:100%;
`

const NavBarFooter = () => {
  return(
    <Fragment>
      <NavBarWithBorder className='nav-bar-left' color='dark'>
        <Container className='margin-navbar'>
          <ColumnsFullWidth className='is-mobile is-vcentered'>
            <Columns.Column className='has-text-centered'>
              <Link to='/discovery' className='has-text-white hover-focus-green'>
                <GoHome size='25px' className='heartBeat'></GoHome>
              </Link>
            </Columns.Column>
          </ColumnsFullWidth>
        </Container>

        <Container>
          <Columns.Column className='has-text-centered'>
          <Link to='/favorite' className='has-text-white hover-focus-green'>
            <GoHeart size='25px' className='heartBeat'></GoHeart>
          </Link>
          </Columns.Column>
        </Container>

        <Container>
          <Columns.Column className='has-text-centered'>
          <Link to='/search' className='has-text-white hover-focus-green'>
            <GoSearch size='25px' className='heartBeat'></GoSearch>
          </Link>
          </Columns.Column>
        </Container>
      </NavBarWithBorder>
    </Fragment>
  );
}

export default NavBarFooter