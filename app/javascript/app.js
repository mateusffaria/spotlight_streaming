import React, { Fragment, useState, useEffect } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Routes from './routes'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Menu from './components/common/menu'

import 'app.scss'
import Player from './components/player'

function getLocation() {
  let location = useLocation(); 
}

const App = () => {
  return(
    <Fragment>
      <BrowserRouter>
        <Menu/>
        <Routes/>
        {location.pathname == '/'? null : <Player/>}
      </BrowserRouter>
    </Fragment>
  )
}

export default App;