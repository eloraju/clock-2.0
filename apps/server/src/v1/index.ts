import { Router } from "express";
import { createGame } from "./createGame";

// eslint-disable-next-line require-jsdoc
export function v1(db: FirebaseFirestore.Firestore) {
  const v1Router = Router();
  const games = db.collection("games");

  v1Router.post("/game", async (req, res) => {
    const id = await createGame(db, JSON.parse(req.body));
    res.status(200).send({ id });
  });

  v1Router.get("/game/:gameId", async (req, res) => {
    const game = await games.doc(req.params.gameId).get();
    res.status(200).send(game.data());
  });

  v1Router.post("/game/:gameId/switch", async (req, res) => {
    res.send("NOT YET IMPLEMENTED");
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

  return v1Router;
}
