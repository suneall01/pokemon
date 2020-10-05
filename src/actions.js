import axios from 'axios';
import C from './constants';

export const filterPokemons = (text) => ({
  type: C.FILTER_POKEMONS,
  payload: text,
});

export const getPokemons = () => async (dispatch) => {
  dispatch({ type: C.START_FETCHING });
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0';
  try {
    const resp = await axios.get(url);
    // console.log(resp);
    const data = resp.data.results.map((item) => {
      let val = item;
      val = {
        id: parseInt(item.url.split('/')[6], 10),
        name: item.name,
        url: item.url,
      };
      return val;
    });
    // console.log(data);
    dispatch({ type: C.SUCCESS_FETCHING });
    dispatch({ type: C.CLEAR_POKEMONS });
    dispatch({
      type: C.FETCHED_POKEMONS,
      payload: data,
    });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: C.CANCEL_FETCHING,
    });
  }
};

export const getPokemon = (name) => async (dispatch) => {
  dispatch({ type: C.START_FETCHING });
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  try {
    const resp = await axios.get(url);
    console.log(resp);
    dispatch({ type: C.SUCCESS_FETCHING });
    dispatch({
      type: C.FETCH_POKEMON,
      payload: resp.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: C.CANCEL_FETCHING,
    });
  }
};

export const getHabitat = () => async (dispatch) => {
  dispatch({ type: C.START_FETCHING });
  const url = 'https://pokeapi.co/api/v2/pokemon-habitat/';
  try {
    const resp = await axios.get(url);
    const data = resp.data.results.map((item) => {
      let val = item;
      val = {
        id: parseInt(item.url.split('/')[6], 10),
        name: item.name,
        url: item.url,
      };
      return val;
    });
    dispatch({ type: C.SUCCESS_FETCHING });
    dispatch({
      type: C.HABITAT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: C.CANCEL_FETCHING,
    });
  }
};

export const getRegion = () => async (dispatch) => {
  dispatch({ type: C.START_FETCHING });
  const url = 'https://pokeapi.co/api/v2/region/';
  try {
    const resp = await axios.get(url);
    const data = resp.data.results.map((item) => {
      let val = item;
      val = {
        id: parseInt(item.url.split('/')[6], 10),
        name: item.name,
        url: item.url,
      };
      return val;
    });
    dispatch({ type: C.SUCCESS_FETCHING });
    dispatch({
      type: C.REGION,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: C.CANCEL_FETCHING,
    });
  }
};

export const getGender = () => async (dispatch) => {
  dispatch({ type: C.START_FETCHING });
  const url = 'https://pokeapi.co/api/v2/gender/';
  try {
    const resp = await axios.get(url);
    const data = resp.data.results.map((item) => {
      let val = item;
      val = {
        id: parseInt(item.url.split('/')[6], 10),
        name: item.name,
        url: item.url,
      };
      return val;
    });
    dispatch({ type: C.SUCCESS_FETCHING });
    dispatch({
      type: C.GENDER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: C.CANCEL_FETCHING,
    });
  }
};

export const getFilterData = (data) => async (dispatch) => {
  dispatch({ type: C.START_FETCHING });
  const { currentFilter, clicked } = data;
  const url = `https://pokeapi.co/api/v2/${clicked}/${currentFilter}`;
  try {
    const resp = await axios.get(url);
    console.log({ resp });
    let data = [];
    switch (clicked) {
      case 'gender':
        data = resp.data.pokemon_species_details.map((item) => {
          const val = {
            id: parseInt(item.pokemon_species.url.split('/')[6], 10),
            name: item.pokemon_species.name,
            url: item.pokemon_species.url,
          };
          return val;
        });
        break;
      case 'pokemon-habitat':
        data = resp.data.pokemon_species.map((item) => {
          const val = {
            id: parseInt(item.url.split('/')[6], 10),
            name: item.name,
            url: item.url,
          };
          return val;
        });
        console.log({ data });
        break;
      default:
        data = resp.data.pokemon_entries.map((item) => {
          const val = {
            id: parseInt(item.pokemon_species.url.split('/')[6], 10),
            name: item.pokemon_species.name,
            url: item.pokemon_species.url,
          };
          return val;
        });
        break;
    }
    dispatch({ type: C.SUCCESS_FETCHING });
    dispatch({ type: C.CLEAR_POKEMONS });
    dispatch({
      type: C.FETCHED_POKEMONS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: C.CANCEL_FETCHING,
    });
  }
};
