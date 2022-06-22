import { FETCH_GAMESCORE_REQUEST, FETCH_GAMESCORE_SUCCESS, FETCH_GAMESCORE_FAILURE } from './typeGameScore';
import axios from 'axios';

export const fetchGAMESCORERequest = () => {
    return {
        type: FETCH_GAMESCORE_REQUEST
    }
}

export const fetchGAMESCORESuccess = score => {
    return {
        type: FETCH_GAMESCORE_SUCCESS,
        payload: score
    }
}

export const fetchGAMESCOREFailure = error => {
    return {
        type: FETCH_GAMESCORE_FAILURE,
        payload: error
    }
}

export const fetchNGAMESCORE = (tId) => {
    const options = {
        method: 'GET',
        url: 'https://free-nba.p.rapidapi.com/games',
        params: `{page: '0', per_page: '25', team_ids: ${tId}, Seasons: '2018'}`,
        headers: {
          'X-RapidAPI-Key': '2392b8d4c1msh9c5c90efe2fcf2ep130827jsn5dc5f442a558',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      };
      
    return (dispatch) => {

            dispatch(fetchGAMESCORERequest());
            axios.request(options)
                    .then((response) => {
                        const score = response.data;
                        dispatch(fetchGAMESCORESuccess(score));
                    })
                    .catch((error) => {
                        const errorMsg = error.message;
                        dispatch(fetchGAMESCOREFailure(errorMsg));
                    })
    }
}

