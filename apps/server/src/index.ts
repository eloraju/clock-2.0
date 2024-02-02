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
import { v1 } from "./v1";

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

app.use("/v1", v1(games, db));

export const api = onRequest(app);
