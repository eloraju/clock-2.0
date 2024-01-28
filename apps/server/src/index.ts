/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as express from "express";

const app = express();

app.use((req, res, next) => {
  const { body, url, params } = req;
  logger.log(`==========[${req.method}::${url}::Request]==========>`, {
    body,
    params,
  });
  next();
});

app.get("/hello", (req, res) => {
  res.send("Hello, World! How are you?");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

export const api = onRequest(app);
