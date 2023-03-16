import { createSlice } from "@reduxjs/toolkit";

function getFromList(key) {
  const items = localStorage.getItem(key);
  if (items) {
    return JSON.parse(items);
  }
  return [];
}

function isStored(key, item) {
  const temp = localStorage.getItem(key);
  if (temp) {
    const items = JSON.parse(temp);
    return items.some((element) => element.id === item.id);
  }
  return false;
}

function addToList(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

const initialState = {
  favourites: getFromList("heart"),
  watchLater: getFromList("save"),
};

export const watchSlice = createSlice({
  name: "fav/watchlater",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const {key, movie} = action.payload
      if (isStored(key, movie)) {
        if (key === "heart") {
          state.favourites = state.favourites.filter(item => item.id !== movie.id)
          addToList(key, state.favourites)
        }
        else {
          state.watchLater = state.watchLater.filter(item => item.id !== movie.id)
          addToList(key, state.watchLater)
        }
      } else {
        if (key === "heart") {
          state.favourites.push(movie)
          addToList(key, state.favourites)
        } else {
          state.watchLater.push(movie)
          addToList(key, state.watchLater)
        }
      }
    }
  },
});

export default watchSlice.reducer
export const {addItems} = watchSlice.actions
export const selectWatchLater = (state) => state.watchlistReducer.watchLater
export const selectFavourite = (state) => state.watchlistReducer.favourites