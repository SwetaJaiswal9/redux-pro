import { FETCH_NBAPLAYER_REQUEST, FETCH_NBAPLAYER_SUCCESS, FETCH_NBAPLAYER_FAILURE } from './types';
import axios from 'axios';

export const fetchNBAPLAYERRequest = () => {
    return {
        type: FETCH_NBAPLAYER_REQUEST
    }
}

export const fetchNBAPLAYERSuccess = players => {
    return {
        type: FETCH_NBAPLAYER_SUCCESS,
        payload: players
    }
}

export const fetchNBAPLAYERFailure = error => {
    return {
        type: FETCH_NBAPLAYER_FAILURE,
        payload: error
    }
}

export const fetchNBAPLAYER = () => {
    const options = {
        method: 'GET',
        url: 'https://free-nba.p.rapidapi.com/players',
        params: {page: '0', per_page: '25'},
        headers: {
          'X-RapidAPI-Key': '2392b8d4c1msh9c5c90efe2fcf2ep130827jsn5dc5f442a558',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      };
    return (dispatch) => {
            dispatch(fetchNBAPLAYERRequest());
            console.log("Requested..!!!!")
            axios.request(options)
                    .then((response) => {
                        const players = response.data;
                        dispatch(fetchNBAPLAYERSuccess(players));
                        console.log("Successful..!!!!")
                    })
                    .catch((error) => {
                        const errorMsg = error.message;
                        dispatch(fetchNBAPLAYERFailure(errorMsg));
                        console.log("Error..!!!!")
                    })
    }
}




