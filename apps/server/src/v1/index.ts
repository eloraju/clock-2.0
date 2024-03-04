import { Router } from "express";
import { switchActivePlayer } from "./commands/switchActivePlayer";
import { createGame } from "./commands/createGame";
import { logger } from "firebase-functions/v1";

export const v1Router = Router();

v1Router.post("/game", async (req, res) => {
  //TODO: Maybe some validation? Maybe a validation middleware?
  logger.debug("Parsing game with data:", req.body);
  const id = await createGame(req.db, req.body);
  res.status(200).send({ id });
});

v1Router.get("/game/:gameId", async (req, res) => {
  const game = req.db.collection("games").doc(req.params.gameId);
  res.status(200).send((await game.get()).data());
});

v1Router.use("/game/:gameId/*", (req, res, next) => {
  req.game = req.db.collection("games").doc(req.params.gameId);
});

v1Router.post("/game/:gameId/switch", async (req, res) => {
  res.send(await switchActivePlayer(req.game));
});
v1Router.post("/game/:gameId/pause", async (req, res) => {
  res.send("NOT YET IMPLEMENTED");
});
v1Router.post("/game/:gameId/resume", async (req, res) => {
  res.send("NOT YET IMPLEMENTED");
});
v1Router.post("/game/:gameId/start", async (req, res) => {
  res.send("NOT YET IMPLEMENTED");
});
v1Router.post("/game/:gameId/end", async (req, res) => {
  res.send("NOT YET IMPLEMENTED");
});
