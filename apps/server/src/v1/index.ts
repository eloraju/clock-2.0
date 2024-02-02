import { Router } from "express";
import { createGame } from "./createGame";

// eslint-disable-next-line require-jsdoc
export function v1(
  games: FirebaseFirestore.CollectionReference,
  db: FirebaseFirestore.Firestore
) {
  const v1Router = Router();
  v1Router.post("/game", async (req, res) => {
    const id = await createGame(db, JSON.parse(req.body));
    res.status(200).send({ id });
  });

  v1Router.get("/game/:gameId", async (req, res) => {});

  return v1Router;
}
