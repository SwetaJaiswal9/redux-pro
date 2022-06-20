import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchNBAPLAYER } from '../redux/action';
import { Link } from 'react-router-dom';


const NBAlist = () => {

  const playerData = useSelector(state => state.nba.players);
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
      playerData && playerData.data && playerData.data.map(player => <p> <Link to={`/details/${player.id}`}> {player.first_name} </Link> </p>)
      )
    }
  </>
  )
  }

export default NBAlist;
