
export interface Hand {
    cards: Card[];
    score: number;
}

export interface Card {
    code: string;
    image: string;
}

export interface Room {
    id: number;
    name: string;
    players: PlayerWithStatus[];
    bank: PlayerStatus;
    full: boolean;
}

export interface Player {
    id: string;
    name: string;
    score: number;
}

export interface PlayerWithStatus {
    player: Player;
    status: PlayerStatus;
}

export interface PlayerStatus {
    hand: Hand;
    move: Move;
    canDo: Action[];
}

export type Action = 'draw' | 'stay';

export type Move = 'wait' | 'in-game' | 'burst' | 'draw' | 'stay' | 'timeout' ;


export interface RoomEvent {
    type: string;
    round?: number;
    step?: number;
    room?: Room;
    roomId?: number;
    player?: Player;
    winners?: string;
    action?: Move;
}

export function card(code: string): Card {
  return { code, image: `assets/${code}.png` };
}
