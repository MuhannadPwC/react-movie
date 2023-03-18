const user = JSON.parse(localStorage.getItem('user'));

export const getWatchLater = async () => {
  const response = await fetch(`/api/watchlist/watchlater`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });


  const list = await response.json();

  return list;
}

export const getFavourites = async () => {
  const response = await fetch(`/api/watchlist/favourites`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const list = await response.json();

  return list;
}

export const addToList = async (key, movie) => {
  const response = await fetch(`/api/watchlist/${key}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ email: user.email, movie }),
  });
  const json = await response.json();

  console.log(json);

  return json.success;
}

export const removeFromList = async (key, movie) => {
  const response = await fetch(`/api/watchlist/${key}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ email: user.email, movie }),
  });
  const json = await response.json();

  console.log(json);
}