import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

async function getFromList(key) {
  const response = await fetch(`/api/watchlist/${key}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  const list = await response.json();
  console.log(list);
  if (list.length > 0) {
    return JSON.parse(list);
  }
  return [];
}

async function addToList(key, item) {
  const response = await fetch(`/api/watchlist/${key}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ email: user.email, movie: item }),
  });
  const json = await response.json();

  return json.success;
}

async function removeFromList(key, item) {
  const response = await fetch(`/api/watchlist/${key}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ email: user.email, movie: item }),
  });
  const json = await response.json();

  return json.success;
}

const initialState = {
  favourites: getFromList("favourites"),
  watchLater: getFromList("watchlater"),
};

export const watchSlice = createSlice({
  name: "fav/watchlater",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const { key, movie } = action.payload;
      console.log(state.favourites);
      console.log(state.watchLater);
      if (addToList(key, movie)) {
        if (key === "favourites") {
          state.favourites.push(movie);
        }
        if (key === "watchlater") {
          state.watchLater.push(movie);
        }
      } else {
        if (removeFromList(key, movie)) {
          if (key === "favourites") {
            state.favourites = state.favourites.filter(
              (item) => item.id !== movie.id
            );
          }
          if (key === "watchlater") {
            state.watchLater = state.watchLater.filter(
              (item) => item.id !== movie.id
            );
          }
        }
      }
    },
  },
});

export default watchSlice.reducer;
export const { addItems } = watchSlice.actions;
export const selectWatchLater = (state) => state.watchlistReducer.watchLater;
export const selectFavourite = (state) => state.watchlistReducer.favourites;
