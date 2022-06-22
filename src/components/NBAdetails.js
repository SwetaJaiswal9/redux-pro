import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchNBAPLAYERDETAILS } from '../redux/actionDetails';
import { useParams } from 'react-router-dom';
import { fetchNGAMESCORE } from '../redux/actionGameScore';


const NBAdetails = () => {

    const { id } = useParams();
    const playerData = useSelector(state => state.details.playerDetails);
    const gameScore = useSelector(state => state.game.score);
    const tId = playerData?.team?.id;
    //const gameId = gameScore?.data.filter(game => game?.id === tId).map(game => game?.home_team_score);
    //console.log("ffffffffff", gameId);
    const dispatch = useDispatch();
  
      useEffect(() => {
        dispatch(fetchNBAPLAYERDETAILS(id));
      }, []);

      useEffect(() => {
        dispatch(fetchNGAMESCORE(tId));
      }, [playerData]); 

      return (
        <> 
          { 
            playerData.loading ? ((
              <h2> Loading... </h2>
            )) : playerData.error ? (
              <h2> {playerData.error} </h2>
            ) : ( 
           <p> {playerData?.first_name} {playerData?.last_name} {playerData?.height_feet} {playerData?.team?.divison} {playerData?.team?.divison} {playerData?.team?.full_name} </p>
           )
          }

          {
            gameScore.loading ? ((
              <h2> Loading... </h2>
            )) : gameScore.error ? (
              <h2> {gameScore.error} </h2>
            ) : (
                gameScore && gameScore?.data && gameScore?.data.filter(game => game?.home_team?.id === tId).map(game => <p> {game?.home_team_score} </p>)   
            )
            
          }
        </>
        )
    }

export default NBAdetails;