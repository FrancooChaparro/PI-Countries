import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_CONTINENT = 'ORDER_BY_CONTINENT';
export const ORDER_FOR_POBLACION = 'ORDER_FOR_POBLACION';
export const ORDER_BY_ACTIVITY = 'ORDER_BY_ACTIVITY';
export const GET_ACTIVITIS = 'GET_ACTIVITIS';
export const POST_ACTIVITY = 'POST_ACTIVITY';


export function postActivity(payload) { 
  return async function(dispatch){
      const response = await axios.post(`http://localhost:3001/activities`,payload);
      return response;
  };
};

export function getActivitis() { 
  return async function(dispatch){
      let json = await axios.get(`http://localhost:3001/activitis`);

      return dispatch({
          type: GET_ACTIVITIS,
          payload: json.data.result
      });
  };
};



export function getCountries() { 
  return async function(dispatch){
      let json = await axios.get(`http://localhost:3001/countries`);
      return dispatch({
          type: GET_COUNTRIES,
          payload: json.data.result
      });
  };
};


export function getCountriesByName (name) { // filtrar perro por name
  return async function(dispatch){
      try{ 
          let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
          return dispatch({
              type: GET_COUNTRY_BY_NAME,
              payload: json.data.result
          });
      }catch(error) {
          alert(error.response.data.error);
      }
  };
};

export function getCountriesById(id) {
  return async function(dispatch){
      try{
          let json = await axios.get(`http://localhost:3001/countries/${id}`);
          return dispatch({
              type: GET_COUNTRY_BY_ID,
              payload: json.data.result
          });
      } catch(error) {
          console.log(error);
      }
  };
};


export function orderByName(payload) {
  return {
      type: ORDER_BY_NAME,
      payload: payload
  };
};


export function orderByContinent(payload) {  
  return {
      type: ORDER_BY_CONTINENT,
      payload: payload
  };
};


export function orderByPoblacion(payload) { 

  return {
      type: ORDER_FOR_POBLACION,
      payload: payload
  };
};

export function orderByActivity(payload) { 
  return async function(dispatch){
    try{ 
        let json = await axios.get(`http://localhost:3001/activitis?name=${payload}`);
        console.log(json.data.result);
        return dispatch({
            type: ORDER_BY_ACTIVITY,
            payload: json.data.result
        });
    }catch(error) {
        alert(error.response.data.error);
    }
};
};