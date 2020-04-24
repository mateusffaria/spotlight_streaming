import React, { useState, useEffect } from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import PlaylistService from '../../services/playlist';
import RecentlyHeards from '../../services/recently_heards';

const Player = () => {

  const [playlist, setPlaylist] = useState([]);

  async function fetchPlayList() {
    const response = await PlaylistService.index();
    setPlaylist(response.data.playlists[0].songs);
  }

  useEffect(() => {
    fetchPlayList();
  }, []);

  
  const options = {
    audioLists: playlist,
    glassBg: true,
    showMiniProcessBar: true,
    showDownload: false,
    preload: true,
    autoPlay: true,
    bounds: 'body',
    playModeShowTime: 600,
    spaceBar: true,
    showProgressLoadBar: true,
    mode: 'full',
    remember: true,
    seeked: false,
    showDestroy: false,
    onAudioListsPanelChange() {
      fetchPlayList();
    },
    async onAudioPlay(audioInfo) {
      await RecentlyHeards.create(audioInfo.id);
    },    
  }

  return (
    <ReactJkMusicPlayer {...options} showMediaSession />
  );
};

export default Player;