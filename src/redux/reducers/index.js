const initialState = {
  favourites: {
    content: [],
    isLoading: false,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourite,
          content: [...state.favourite.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
