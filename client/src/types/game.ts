export type moveType = {
    from: string;
    to: string;
    promotion?: string;
    time: number;
};

export type gameType = {
    gameId: string;
    whiteId: string;
    blackId: string;
    fen: string;
    startTime: number;
    gameStatus: gameStatusType;
    drawRejects: {
        w: number;
        b: number;
    };
    drawRequested: {
        w: boolean;
        b: boolean;
    };
};

export type movesType = moveType[];

export type gameStatusType = {
    color: "w" | "b";
    status:
        | "playing"
        | "checkmate"
        | "timeout"
        | "resignation"
        | "forfeit"
        | "stalemate"
        | "threefold-repetition"
        | "insufficient-material"
        | "mutual-draw";
};
