import React, { Fragment, useEffect, useState, useRef } from 'react'
import { Columns, Button } from 'react-bulma-components'
import Music from './music'
import RecentlyHeards from '../../services/recently_heards'

const Musics = (props) => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);

  useEffect(() =>{
    setSongs(props.songs.map((song, key) =>
      <Music
        song={song}
        playing={playing.id == song.id}
        setPlaying={setPlaying}
        key={key}
        song_id={song.id}>
      </Music>
    ));
  }, [props.songs, playing]);

  return(
    <Fragment>
      <Columns.Column>
        {songs}
      </Columns.Column>      
    </Fragment>
  );
}

export default Musics;