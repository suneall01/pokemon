import axios from 'axios';
import C from './constants';

export const setFilter = (filter) => ({
  type: C.SET_FILTER,
  payload: filter,
});

export const getPokemons = () => (dispatch) => {
  dispatch({ type: C.START_FETCHING });
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  return axios
    .get(url)
    .then((resp) => {
      // console.log(resp);
      const data = resp.data.results.map((item) => {
        let val = item;
        val = {
          id: item.url.split('/')[6],
          name: item.name,
          url: item.url,
        };
        return val;
      });
      dispatch({
        type: C.FETCHED_POKEMONS,
        payload: data,
      });
    })
    .catch(() => {
      dispatch({
        type: C.CANCEL_FETCHING,
      });
    });
};
