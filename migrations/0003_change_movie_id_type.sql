-- Migration number: 0003 	 2024-09-18T13:51:06.321Z
-- Migration number: 0004 	 2024-09-19T10:00:00.000Z

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    release_date DATE NOT NULL,
    genre VARCHAR(255) NOT NULL,
    rating INT NOT NULL
);