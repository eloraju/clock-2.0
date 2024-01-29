/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as express from "express";
import { logTraffic } from "./logging";
import * as admin from "firebase-admin";
import { createGame } from "./createGame";

const app = express();
admin.initializeApp();
const db = admin.firestore();
const games = db.collection("games");

app.use(logTraffic);

app.get("/hello", (req, res) => {
  res.send("Hello, World! How are you?");
});

app.get("/ping", (req, res) => {
  res.send({ ping: "pong" });
});

app.post("/game", async (req, res) => {
  const id = await createGame(db);
  res.status(200).send({ id });
});

app.get("/game/:gameId", async (req, res) => {
  //TODO: Add fp-ts optionals here
  const game = await games.doc(req.params.gameId).get();
  res.send(game.data());
});

export const api = onRequest(app);
