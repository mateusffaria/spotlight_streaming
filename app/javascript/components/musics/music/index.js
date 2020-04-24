import React, { Fragment, useState, useEffect } from 'react'
import { Heading, Columns } from 'react-bulma-components'
import styled from 'styled-components'
import Favorite from '../../common/favorite'
import { MdPlaylistAdd } from 'react-icons/md'
import PlaylistService from '../../../services/playlist'
import { Link } from 'react-router-dom'


const MusicSeparator = styled.hr`
  height: 1px;
  margin-top: 0px;
`
const CustomSubHeading = styled(Heading)`
  margin-bottom: 0px !important;
`

const Music = (props) => {
  const [whichplaylist, setWhichplaylist] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  async function fetchPlaylists() {
    const response = await PlaylistService.index();
    setPlaylists(response.data.playlists);    
  }

  async function addToPlaylist(id, song) {
    await PlaylistService.insert_music(id,song);
    setWhichplaylist();
    alert('Added in you playlist');
    console.log('create');
  }

  function togglePlaylist() {
    setWhichplaylist(playlists.map((playlist, key)=>
      <div key={key}>
        <Link to={'#'} className='has-text-white hover-focus-green' id={playlist.id}
        onClick={() => addToPlaylist(playlist.id, props.song.id)}
        >{playlist.name}</Link>
      </div>
    ));    
  }

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return(
    <Fragment>
      <Columns className='is-mobile is-centered'>
        <Columns.Column desktop={{size:1}} mobile={{size: 2}}>
          <MdPlaylistAdd size='35px' className='has-text-white button-color-stop bounceIn hover-focus-green' onClick={() => togglePlaylist()}/>
          {whichplaylist}
        </Columns.Column>
        <Columns.Column desktop={{size: 4}} mobile={{size: 8}}>
          <Columns className='is-vcentered is-mobile'>
            <Columns.Column desktop={{size: 8}} mobile={{size: 8}}>
              <Heading size={5} className='has-text-white'>{props.song.title}</Heading>
              <CustomSubHeading size={6} className='has-text-white' subtitle>{props.song.artist_name}</CustomSubHeading>
            </Columns.Column>
            <Columns.Column desktop={{size:4}} mobile={{size:4}} className='is-pulled-right has-text-right'>
              <Favorite id={props.song.id} kind='songs' like_state={props.song.favorite}></Favorite>
            </Columns.Column>
          </Columns>
          <MusicSeparator></MusicSeparator>
        </Columns.Column>
      </Columns>
    </Fragment>
  );
}

export default Music;