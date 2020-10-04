import axios from 'axios';
import C from './constants';

export const setFilter = (filter) => ({
  type: C.SET_FILTER,
  payload: filter,
});

export const setDisplayItem = (size) => ({
  type: C.DISPLAY_ITEM,
  payload: size,
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
