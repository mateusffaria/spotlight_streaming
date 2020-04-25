import React, { Fragment } from 'react'
import { Navbar, Container, Columns, Button, Dropdown } from 'react-bulma-components'
import logoImage from '../../../assets/images/logo.png'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
`

const Menu = () => {

  let actionButton;

  if(useLocation().pathname == '/'){
    actionButton = <a href="/users/sign_in" className="is-pulled-right is-right">
    <Button outlined={true} color="success" rounded={true}>Login</Button>
    </a>
  } else {
    actionButton = <Dropdown className='is-pulled-right is-right' color='dark' label={<FaUserEdit size='2em' color='#0AFFC2'/>}>
      <Dropdown.Item value='other'>
        <a href="/users/edit">Edit User</a>
      </Dropdown.Item>
      <Dropdown.Item value='other'>
        <a href="/users/sign_out" data-method='delete'>Log-out</a>
      </Dropdown.Item>
    </Dropdown>
  };

  return(
    <Fragment>
      <Navbar color="dark">
        <Container className={useLocation().pathname == '/'? null : 'container-left'}>
          <ColumnsFullWidth className="is-mobile">
            <Columns.Column desktop={{size: 2}} mobile={{size: 5}} className='logo-brand'>
              <img src={logoImage} alt="logo" className="image" width='110px'/>
            </Columns.Column>
            <Columns.Column className=' is-vcentered is-right verticalAlign'>
              {actionButton}
            </Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Menu;