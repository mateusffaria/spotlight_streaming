import React, { Fragment, useState, useEffect } from "react";
import { Columns, Tabs, Heading } from 'react-bulma-components';
import styled, { css } from "styled-components";
import Album from '../../common/album'
import Musics from '../../musics'
import Artist from '../artist'
import { Link, useLocation } from 'react-router-dom'

const CustomTab = styled(Tabs.Tab)`
  a{
    color: white;
    ${({ active }) => active && css`
      color: hsl(171, 100%, 41%) !important;
      border-color: hsl(171, 100%, 41%) !important;
    `}
  }
`

const ResultTab = (props) => {
  const [active_tab, setActive_tab] = useState('playlists');
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);


  useEffect(() => {
    setAlbums(props.albums.map((album, key) =>
      <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
        <Album artists_name={album.artists_name} title={album.title} cover_url={album.cover_url} id={album.id} favorite={album.favorite}></Album>
      </Columns.Column>
    ));

    setArtists(props.artists.map((artist, key) =>
      <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
        <Artist name={artist.name} photo_url={artist.photo_url} id={artist.id} favorite={artist.favorite}></Artist>
      </Columns.Column>
    ));


    setPlaylists(props.playlists.map((playlist, key) =>
      <Columns.Column key={key}>
        <Link to={`/playlists/${playlist.id}`}>
          <Heading className='has-text-white is-centered vertical-align'>{playlist.name}</Heading>
        </Link>
      </Columns.Column>
    ));
  }, [props]);

  function getLocation() {
    let location = useLocation(); 
  }

  return (
    <Fragment>
      <Tabs
        style={{ display: props.albums.length || props.artists.length || props.songs.length ? "" : "none" }}
        align='centered' size='medium'>
        <CustomTab active={active_tab == 'albums' ? true : false} onClick={() => setActive_tab('albums')}>
          Albums
        </CustomTab>
        <CustomTab active={active_tab == 'artists' ? true : false} onClick={() => setActive_tab('artists')}>
          Artists
        </CustomTab>
        <CustomTab active={active_tab == 'songs' ? true : false} onClick={() => setActive_tab('songs')}>
          Musics
        </CustomTab>
        {location.pathname == '/search'? null : 
          <CustomTab active={active_tab == 'playlists' ? true : false} onClick={() => setActive_tab('playlists')}>
            Playlists
          </CustomTab>
        }
      </Tabs>
      <div>
        <div style={{ display: active_tab != 'albums' ? "none" : "" }}>
          <Columns className="columns is-mobile is-multiline vertical-spacing">
            {albums}
          </Columns>
        </div>

        <div style={{ display: active_tab != 'artists' ? "none" : "" }}>
          <div className="columns is-mobile is-multiline vertical-spacing">
            {artists}
          </div>
        </div>

        <div style={{ display: active_tab != 'songs' ? "none" : "" }}>
          <div className="columns is-multiline vertical-spacing">
            <div className="column is-12">
              <Musics songs={props.songs || []}></Musics>
            </div>
          </div>
        </div>

        <div style={{ display: active_tab != 'playlists' ? "none" : "" }}>
          <div className="vertical-spacing">
            <div className="column is-12 has-text-centered">
              {playlists}
            </div>
            {location.pathname == '/search'? null : 
              <div className='has-text-white has-text-centered'>
                <p className='heartBeat button-color-play'>Create new playlist</p>
              </div>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ResultTab;