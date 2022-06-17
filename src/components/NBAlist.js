import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchNBAPLAYER } from '../redux/action'

const NBAlist = () => {
  const playerData = useSelector(state => state.players);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchNBAPLAYER())
    }, []) 
    
  return (
  <> 
    {
      playerData.loading ? ((
        <h2> Loading... </h2>
      )) : playerData.error ? (
        <h2> {playerData.error} </h2>
      ) : (
      playerData && playerData.data && playerData.data.map(player => <p>{player.first_name}</p>)
      )
    }
  </>
  )
  }

export default NBAlist;
