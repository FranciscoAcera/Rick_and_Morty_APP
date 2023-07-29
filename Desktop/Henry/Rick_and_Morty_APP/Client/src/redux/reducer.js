import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      const addedCharacter = [...state.allCharacters, payload];
      return {
        ...state,
        allCharacters: addedCharacter,
        myFavorites: addedCharacter,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case FILTER:
      let copy2 = [...state.allCharacters];
      let filterGender = copy2.filter((character) => {
        return character.gender === payload;
      });
      return {
        ...state,
        myFavorites: filterGender,
      };
    case ORDER:
      let copy3 = [...state.allCharacters];
      return {
        ...state,
        myFavorites: copy3.sort((a, b) => {
          return payload === 'A' ? a.id - b.id : b.id - a.id;
        }),
      };
    default:
      return { ...state };
  }
};
export default reducer;
