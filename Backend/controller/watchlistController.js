const User = require("../models/usersModel");

const isStored = (list, movie) => {
  if (list) {
    return list.some((item) => item.id === movie.id);
  }
  return false;
};

const removeFromList = (list, movie) => {
  const newList = list.filter((item) => item.id !== movie.id);

  return newList;
};

// WatchLater
// GET WatchLater list for user
const getWatchlater = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  const watchlater = user.watchlater;

  if (watchlater.length === 0) {
    return res
      .status(400)
      .json({ error: "This user does not have a watchlater list" });
  }

  return res.status(200).json({ watchlater });
};

// POST Watch later for user
const postWatchlater = async (req, res) => {
  const { email, movie } = req.body;

  const user = await User.findOne({ email });
  const watchlater = user.watchlater;

  if (isStored(watchlater, movie)) {
    return res
      .status(200)
      .json({ msg: "Movie is already in watch later list" });
  }

  watchlater.push(movie);
  user.watchlater = watchlater;
  user.save();
  return res.status(200).json({ msg: "Movie was added to watch later list" });
};

// PATCH remove from watch later
const patchWatchlater = async (req, res) => {
  const { id, movie } = req.body;

  const user = await User.findById(id);
  const watchlater = user.watchlater;
  const newWatchlater = removeFromList(watchlater, movie);

  user.watchlater = newWatchlater;
  user.save();

  return res.status(200).json({ success: true });
};

// Favourites
// GET Favourites list for user
const getFavourites = async (req, res) => {
  const { id } = req.body;

  const user = await User.findById(id);
  const favourites = user.favourites;

  if (favourites.length === 0) {
    return res
      .status(400)
      .json({ error: "This user does not have a favourites list" });
  }

  return res.status(200).json({ favourites });
};

// POST Favourites for user
const postFavourites = async (req, res) => {
  const { id, movie } = req.body;

  const user = await User.findById(id);
  const favourites = user.favourites;

  if (isStored(favourites, movie)) {
    return res.status(200).json({ msg: "Movie is already in favourites list" });
  }

  favourites.push(movie);
  user.favourites = favourites;
  user.save();
  return res.status(200).json({ msg: "Movie was added to favourites list" });
};

// PATCH remove from favourites
const patchFavourites = async (req, res) => {
  const { id, movie } = req.body;

  const user = await User.findById(id);
  const favourites = user.favourites;
  const newFavourites = removeFromList(favourites, movie);

  user.favourites = newFavourites;
  user.save();

  return res.status(200).json({ success: true });
};

module.exports = {
  getWatchlater,
  postWatchlater,
  patchWatchlater,
  getFavourites,
  postFavourites,
  patchFavourites,
};
