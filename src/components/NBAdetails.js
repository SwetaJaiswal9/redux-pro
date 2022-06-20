import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchNBAPLAYERDETAILS } from '../redux/actionDetails';
import { useParams } from 'react-router-dom';


const NBAdetails = () => {

    const { id } = useParams();
    const playerData = useSelector(state => state.details.playerDetails);
    console.log("nnnnnnnn", playerData)
    const dispatch = useDispatch();
  
      useEffect(() => {
        dispatch(fetchNBAPLAYERDETAILS(id))
      }, []) 

      return (
        <> 
          {
            playerData.loading ? ((
              <h2> Loading... </h2>
            )) : playerData.error ? (
              <h2> {playerData.error} </h2>
            ) : (
           <p> {playerData.first_name} {playerData.last_name} 
            {playerData.height_feet} </p>)
            
          }
        </>
        )
    }

export default NBAdetails;