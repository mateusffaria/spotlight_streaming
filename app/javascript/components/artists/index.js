import React, { Fragment, useState, useEffect } from 'react'
import { Heading, Columns, Image } from 'react-bulma-components'
import { useParams } from 'react-router-dom'
import Favorite from '../common/favorite'
import ArtistsService from '../../services/artists'
import Album from '../common/album'

const Artists = () => {
  let { id } = useParams();
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);

  async function fetchArtist() {
    const response = await ArtistsService.show(id);
    setArtist(response.data);
    setAlbums(response.data.albums);
  }

  useEffect(() =>{
    fetchArtist();
  }, []);

  const artists_components = albums.map((album, key) =>
    <Columns.Column desktop={{size:3}} mobile={{size:6}} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}></Album>
      <Favorite like_state={album.favorite}></Favorite>
    </Columns.Column>
  );

  return(
    <Fragment>
      <Heading className='has-text-white has-text-centered'>{artist.name}</Heading>
        <Columns desktop={{size:3}} mobile={{size:6}} className='is-vcentered is-centered has-text-centered'>
          <Columns.Column desktop={{size:3}} mobile={{size:6}}>
            <Image src={artist.photo_url} className='vertical-spacing'></Image>
            <Favorite like_state={artist.favorite} className='vertical-spacing'></Favorite>
          </Columns.Column>
        </Columns>        
      <Columns className='is-vcentered is-mobile'>
        {artists_components}
      </Columns>      
      
    </Fragment>
  );
}

export default Artists;