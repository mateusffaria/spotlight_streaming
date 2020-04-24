import React, { Fragment, useEffect, useState } from 'react'
import Album from '../common/album'
import styled from 'styled-components'
import { Columns, Heading } from 'react-bulma-components'
import AlbumService from '../../services/albums'

const DivVSpaced = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`

const Discovery = () => {
  const [recent_albums, setRecentAlbums] = useState([]);
  const [recommended_albums, setRecommendedAlbums] = useState([]);

  async function fetchAlbums() {
    const response = await AlbumService.index();
    setRecentAlbums(response.data['recent_albums']);
    setRecommendedAlbums(response.data['recommended_albums']);
  }

  useEffect(() =>{
    fetchAlbums();
  }, [] );

  const recent_albums_components = recent_albums.map((album, key) =>
    <Columns.Column desktop={{size: 3}} mobile={{size:6}} key={key}>
      <Album like_state={album.favorite} artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}></Album>
    </Columns.Column>
  );

  const recommended_albums_components = recommended_albums.map((album, key) =>
    <Columns.Column desktop={{size:3}} mobile={{size:6}} key={key}>
      <Album like_state={album.favorite} artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}></Album>
    </Columns.Column>
  );
  
  return(
    <Fragment>
      <Heading className='has-text-info' size={6}>To use this application you need to create a playlist, just click on the favorite link(heart) and create one, if you already created, dismiss this alert.</Heading>
      {recent_albums_components.length > 0 &&
        <div>
          <Heading className='has-text-success' size={4}> Recently Played </Heading>
          <Columns className='is-mobile'>
            {recent_albums_components}
          </Columns>
        </div>
      }

      {recommended_albums_components.length > 0 &&
        <DivVSpaced>
          <Heading className='has-text-success' size={4}> Suggestions </Heading>
          <Columns className='is-mobile'>
            {recommended_albums_components}
          </Columns>        
        </DivVSpaced>
      }
    </Fragment>
  );
}

export default Discovery;