import React, { Fragment, useState, useEffect } from 'react'
import { Heading, Columns, Image } from 'react-bulma-components'
import styled from 'styled-components'
import AlbumService from '../../services/albums'
import { useParams } from 'react-router-dom'
import Musics from '../musics'
import Favorite from '../common/favorite'
import { Link } from 'react-router-dom'

const DivVSpaced = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const Albums = () => {
  
  let { id } = useParams();
  const [album, setAlbum] = useState(['album']);

  async function fetchAlbum() {
    const response = await AlbumService.show(id);
    setAlbum(response.data);
  }
  
  useEffect(() => {
    fetchAlbum();
  }, [] );

  return(    
    <Fragment>
      <Heading className='has-text-info has-text-centered' size={6}>To add a song to your playlist just click on the icon on the right side and select your playlist, after that, you click on the playlist of the player below</Heading>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{size: 3}} mobile={{size: 10}}>
          <Image src={album.cover_url}></Image>
          <DivVSpaced>
            <Heading size={5} className='has-text-info has-text-centered'>{album.title}</Heading>
            <Link to={`/artists/${album.artist_id}`}>
              <Heading size={6} className='has-text-white has-text-centered vertical-spacing'>{album.artist_name}</Heading>
            </Link>
            <div className="has-text-centered">
              <Favorite id={id} kind='albums' like_state={album.favorite}></Favorite>
            </div>
          </DivVSpaced>
        </Columns.Column>
      </Columns>
      <Musics songs={album.songs || []}></Musics>
    </Fragment>
  );
}

export default Albums;