import type {
  Firestore,
  DocumentReference,
  DocumentData,
} from "firebase-admin/firestore";

export type GameRef = DocumentReference<DocumentData>;

declare global {
  namespace Express {
    export interface Request {
      db: Firestore;
      game?: GameRef;
    }
  }
}
