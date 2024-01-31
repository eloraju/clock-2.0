export type Foo = { bar: boolean };

export enum Action {
  PAUSE,
  END_TURN,
  START_GAME,
  END_GAME,
  START_TURN,
  CONTINUE,
}

export type Player = {
  name: string;
  army: string;
};

export type PlayerAction = {
  action: Action;
  player: Player;
  timestamp: number;
};

export type Game = {
  id?: string;
  players: Player[];
  actions: PlayerAction[];
  startTime?: number;
  round?: number;
  started?: boolean;
  totalTime?: number;
  turn?: number;
};
