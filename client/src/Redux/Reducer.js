import { POST_ACTIVITY, GET_ACTIVITIS, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME, GET_COUNTRIES, ORDER_BY_NAME, ORDER_BY_CONTINENT, ORDER_FOR_POBLACION, ORDER_BY_ACTIVITY } from "./Actions";

const initialState = {
  AllCountries: [],
  countries: [],
  filter: [],
  activitis: [],
  activitisName: []

};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:

      return {
        ...state,
        AllCountries: action.payload,
        countries: action.payload
      };

    case GET_COUNTRY_BY_NAME:

      return {
        ...state,
        countries: action.payload
      };

    case GET_COUNTRY_BY_ID:

      return {
        ...state,
        countries: action.payload
      };
    case ORDER_BY_NAME:

      let arreglo = action.payload === 'asc' ?
        [...state.countries].sort(function (a, b) {
          if (a.Name[0] > b.Name[0]) {
            return 1
          }
          if (b.Name[0] > a.Name[0]) {
            return -1
          }
          return 0
        }) :
        [...state.countries].sort(function (a, b) {
          if (a.Name[0] > b.Name[0]) {
            return -1
          }
          if (b.Name[0] > a.Name[0]) {
            return 1
          }
          return 0
        })
      return {
        ...state,
        countries: arreglo.splice(0, 250)
      }
    case ORDER_BY_CONTINENT:

      return {
        ...state,
        countries: state.AllCountries.filter(e => e.Contienente === action.payload)
      }
    case ORDER_BY_ACTIVITY:

       let Ids = action.payload.map(e => e.countries[0].ID)
       let arr = []
       state.AllCountries.filter(e => {
        if (Ids.includes(e.ID)) {
           arr.push(e)
        }
      })
      return {
        ...state,
        countries: arr
      }
    case ORDER_FOR_POBLACION:

      const ord = action.payload === "min" ?
        [...state.countries].sort(function (a, b) {
          if (a.Poblacion > b.Poblacion) {
            return 1
          }
          if (b.Poblacion > a.Poblacion) {
            return -1
          }
          return 0
        }) :
        [...state.countries].sort(function (a, b) {
          if (a.Poblacion > b.Poblacion) {
            return -1
          }
          if (b.Poblacion > a.Poblacion) {
            return 1
          }
          return 0
        })
      return {
        ...state,
        countries: ord
      }
    case GET_ACTIVITIS:

      return {
        ...state,
        activitis: action.payload
      }
    case POST_ACTIVITY:
      
      return {
        ...state
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;



