import React, { Fragment, useState, useEffect } from 'react'
import FavoriteService from '../../services/favorites'
import ResultTabs from '../common/results_tabs'
import PlaylistService from '../../services/playlist'

const Favorites = () => {
  const [favorites, setFavorites] = useState({});
  const [playlists, setPlaylists] = useState({});

  async function fetchFavorites() {
    const response = await FavoriteService.index();
    setFavorites(response.data);
  }

  async function fetchPlaylist() {
    const response = await PlaylistService.index();
    setPlaylists(response.data);
  }  

  useEffect(() => {
    fetchFavorites();
    fetchPlaylist();
  }, [])

  return(
    <Fragment>
      <ResultTabs albums={favorites.albums || []} artists={favorites.artists || []} songs={favorites.songs || []} playlists={playlists.playlists || []}></ResultTabs>
    </Fragment>
  );
}

export default Favorites;