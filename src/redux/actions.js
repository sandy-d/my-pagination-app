import axios from 'axios';

export const fetchBeers = page => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
      dispatch({
        type: 'FETCH_BEERS_SUCCESS',
        payload: response.data,
        currentPage: page
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_BEERS_FAILURE',
        error: error.message
      });
    }
  };
};
