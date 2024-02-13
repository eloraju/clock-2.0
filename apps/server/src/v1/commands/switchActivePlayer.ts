import { ErrRes, OkRes } from "@repo/types";
import { GameRef } from "../../../types";
import * as E from "fp-ts/Either";

export async function switchActivePlayer(
  game?: GameRef
): Promise<E.Either<ErrRes, OkRes>> {
  if (!game) {
    E.left({ error: true, status: 500, body: "no go hombre" } as ErrRes);
  }
  return E.right({ error: false, body: "ok", status: 200 });
}
