CREATE TABLE "Users" (
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    salt TEXT NOT NULL,
    update_password_token TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Guests" (
    guest_id VARCHAR(16) PRIMARY KEY CHECK (LENGTH(guest_id) = 16),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_guests_createdAt ON "Guests"(created_at);


CREATE TABLE "Games" (
    game_id TEXT PRIMARY KEY,
    type VARCHAR(10) CHECK (type IN ('Blitz', 'Rapid', 'Bullet')),
    white_id TEXT NOT NULL,
    black_id TEXT NOT NULL,
    fen TEXT NOT NULL,
    start_time TIMESTAMP NOT NULL,
    game_status TEXT NOT NULL,
    winner TEXT
);

CREATE TABLE "Moves" (
    move_id SERIAL PRIMARY KEY,
    game_id TEXT REFERENCES "Games"(game_id) ON DELETE CASCADE,
    from_square TEXT NOT NULL,
    to_square TEXT NOT NULL,
    promotion TEXT,
    time TIMESTAMP NOT NULL
);

CREATE INDEX idx_moves_game_id ON "Moves"(game_id);


SELECT * FROM "Users";
SELECT * FROM "Guests";
SELECT * FROM "Games";
SELECT * FROM "Moves";