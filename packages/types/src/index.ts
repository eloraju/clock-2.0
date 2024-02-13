export enum Action {
  START_GAME,
  PAUSE,
  RESUME,
  END_TURN,
  END_GAME,
  SWITCH_PLAYER,
}

export type Player = {
  name: string;
  army: string;
};

export type PlayerAction = {
  action: Action;
  player: string;
  timestamp: number;
};

export type Game = {
  id?: string;
  players: Player[];
  actions: PlayerAction[];
  startTime: number;
  round: number;
  started: boolean;
  ended: boolean;
  duration: number;
  turn: number;
  currentPlayer: number;
};

export type JSON = string;

export type OkRes = {
  error: false;
  status: number;
  body: JSON;
};

export type ErrRes = {
  error: true;
  status: number;
  body: JSON;
};
