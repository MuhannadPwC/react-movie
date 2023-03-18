const express = require("express");
const {
  getWatchlater,
  getFavourites,
  postWatchlater,
  postFavourites,
  patchWatchlater,
  patchFavourites,
} = require("../controller/watchlistController");
const requireAuth = require("../middleware/requireAuth");

const watchlistRouter = express.Router();

// Require auth for adding and removing from watchlist
watchlistRouter.use(requireAuth);

watchlistRouter.get("/watchlater", getWatchlater);
watchlistRouter.post("/watchlater", postWatchlater);
watchlistRouter.patch("/watchlater", patchWatchlater);

watchlistRouter.get("/favourites", getFavourites);
watchlistRouter.post("/favourites", postFavourites);
watchlistRouter.patch("/favourites", patchFavourites);

module.exports = watchlistRouter;
