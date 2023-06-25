const initialState = {
    beers: [],
    currentPage: 1,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BEERS_SUCCESS':
        return {
          ...state,
          beers: action.payload,
          currentPage: action.currentPage,
          error: null
        };
      case 'FETCH_BEERS_FAILURE':
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  