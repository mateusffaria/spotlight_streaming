import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlaylistService from '../../services/playlist'
import { Heading, Columns } from 'react-bulma-components'
import styled from 'styled-components'
import { TiDeleteOutline } from 'react-icons/ti'

const MusicSeparator = styled.hr`
  height: 1px;
  margin-top: 0px;
`
const CustomSubHeading = styled(Heading)`
  margin-bottom: 0px !important;
  color: white !important;
`

const Playlists = () => {
  let { id } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([]);

  async function fetchPlaylist() {
    const response = await PlaylistService.show(id);
    setPlaylist(response.data);
    setSongs(response.data.songs);
  }

  useEffect(() => {
    fetchPlaylist();
  }, []);

  async function destroyMusic(song) {
    await PlaylistService.destroy(id,song);
    console.log('destroy');
    
    fetchPlaylist();    
  }
  
  const songsList = songs.map((song, key) =>
    <Columns className='is-mobile is-centered' key={key}>
      <Columns.Column desktop={{ size: 4 }} mobile={{ size: 8 }}>
        <Columns className='is-vcentered is-mobile'>
          <Columns.Column desktop={{ size: 8 }} mobile={{ size: 8 }}>
            <Heading size={5} className='has-text-white'>{song.name}</Heading>
            <CustomSubHeading size={6} className='has-text-white' subtitle>{song.singer}</CustomSubHeading>
          </Columns.Column>
          <TiDeleteOutline className='has-text-success heartBeat' size='25px' onClick={() => destroyMusic(song.id)}></TiDeleteOutline>
        </Columns>
        <MusicSeparator></MusicSeparator>
      </Columns.Column>
    </Columns>);

  return (
    <Fragment>
      <Columns.Column className='vertical-spacing'>
        <Heading className='has-text-white has-text-centered vertical-spacing'>{playlist.name} Music list</Heading>
      </Columns.Column>
        {songsList}
    </Fragment>
  );
}

export default Playlists;