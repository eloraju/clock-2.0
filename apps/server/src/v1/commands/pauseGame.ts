import { Game } from "@repo/types";
import { Firestore } from "firebase-admin/firestore";

export async function pauseGame(db: Firestore, game: Game): Promise<string> {
  return "Not yet implemented";
}
