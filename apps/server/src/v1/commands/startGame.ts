import { Firestore } from "firebase-admin/firestore";

// eslint-disable-next-line require-jsdoc
export async function startGame(db: Firestore, gameId: string) {
  const game = db.collection("games").doc(gameId);
  await game.update({ started: true, startTime: Date.now() });
  return new Promise((res) => res("Not yet implemented"));
}
