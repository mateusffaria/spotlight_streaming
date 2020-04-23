import React, { Fragment, useState, useEffect } from 'react'
import { TiHeartOutline, TiHeart } from 'react-icons/ti'
import FavoriteService from '../../../services/favorites'

const Favorite = (props) =>{
  const [likeState, setLikeState] = useState(props.like_state);
  useEffect(() => {
    setLikeState(props.like_state);
  }, [props.like_state]);

  
  let LikedButton;  
  
  if(likeState){
    LikedButton = <TiHeart className='has-text-success bounceIn' size='25px' onClick={() => dislike()}></TiHeart>
  } else {
    LikedButton = <TiHeartOutline className='has-text-success bounceIn' size='25px' onClick={() => like()}></TiHeartOutline>
  }
  
  async function dislike() {
    await FavoriteService.delete(props.kind, props.id);
    setLikeState(false);
  }

  async function like() {    
    await FavoriteService.create(props.kind, props.id);
    setLikeState(true);
  }

  return(
    <Fragment>
      { LikedButton }
    </Fragment>
  );
}

export default Favorite;