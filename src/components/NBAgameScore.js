import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchNGAMESCORE } from '../redux/actionGameScore';


const NBAdetails = () => {

    const gameScore = useSelector(state => state.game.score);
    console.log("Gameeeeeee", gameScore)
    const dispatch = useDispatch();
  
      useEffect(() => {
        dispatch(fetchNGAMESCORE())
      }, []) 

      return (
        <> 
          {
            gameScore.loading ? ((
              <h2> Loading... </h2>
            )) : gameScore.error ? (
              <h2> {gameScore.error} </h2>
            ) : (
                gameScore && gameScore.data && gameScore.data.map(game => <p>  {game.home_team_score} </p>)     
            )
            
          }
        </>
        )
    }

export default NBAdetails;