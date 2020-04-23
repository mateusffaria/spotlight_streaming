import React from 'react'

import AlbumScreen from './screens/album';
import DiscoveryScreen from './screens/discovery';
import FavoriteScreen from './screens/favorite';
import HomeScreen from './screens/home';
import SearchScreen from './screens/search';
import Artist from './screens/artist';
import PlaylistScreen from './screens/playlist'
import { Switch, Route } from 'react-router-dom'


const Routes = () => (
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/albums/:id' component={AlbumScreen} />
      <Route exact path='/discovery' component={DiscoveryScreen} />
      <Route exact path='/favorite' component={FavoriteScreen} />
      <Route exact path='/search' component={SearchScreen} />
      <Route exact path='/artists/:id' component={Artist} />
      <Route exact path='/playlists/:id' component={PlaylistScreen} />
    </Switch>
);

export default Routes;