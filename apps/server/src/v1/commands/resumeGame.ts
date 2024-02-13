import { Game } from "@repo/types";
import { Firestore } from "firebase-admin/firestore";
import { logger } from "firebase-functions/v1";

// eslint-disable-next-line require-jsdoc
export async function resumeGame(db: Firestore, gameId: string) {
  const game = ((await db.collection("games").doc(gameId).get()).data() as Game)
    .actions;
  logger.debug("Resuming game", { game });

  return new Promise((res) => res("Not yet implemented"));
}
