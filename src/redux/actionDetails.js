import { FETCH_NBAPLAYERDETAILS_REQUEST, FETCH_NBAPLAYERDETAILS_SUCCESS, FETCH_NBAPLAYERDETAILS_FAILURE } from './typesDetails';
import axios from 'axios';

export const fetchNBAPLAYERDETAILSRequest = () => {
    return {
        type: FETCH_NBAPLAYERDETAILS_REQUEST
    }
}

export const fetchNBAPLAYERDETAILSSuccess = playerDetails => {
    return {
        type: FETCH_NBAPLAYERDETAILS_SUCCESS,
        payload: playerDetails
    }
}

export const fetchNBAPLAYERDETAILSFailure = error => {
    return {
        type: FETCH_NBAPLAYERDETAILS_FAILURE,
        payload: error
    }
}

export const fetchNBAPLAYERDETAILS = (id) => {
    const options = {
        method: 'GET',
        url: `https://free-nba.p.rapidapi.com/players/${id}`,
        params: {page: '0', per_page: '25'},
        headers: {
          'X-RapidAPI-Key': '2392b8d4c1msh9c5c90efe2fcf2ep130827jsn5dc5f442a558',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      };
    return (dispatch) => {
            dispatch(fetchNBAPLAYERDETAILSRequest());
            axios.request(options)
                    .then((response) => {
                        const playerDetails = response.data;
                        dispatch(fetchNBAPLAYERDETAILSSuccess(playerDetails));
                    })
                    .catch((error) => {
                        const errorMsg = error.message;
                        dispatch(fetchNBAPLAYERDETAILSFailure(errorMsg));
                    })
    }
}




