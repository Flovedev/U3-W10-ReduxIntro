const initialState = {
  favourites: {
    content: [],
    isLoading: false,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          content: state.favourites.content.filter(
            (e, i) => i !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
