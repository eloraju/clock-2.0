export enum Action {
  START_GAME,
  PAUSE,
  RESUME,
  END_TURN,
  END_GAME,
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
