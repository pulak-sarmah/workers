-- Migration number: 0001 	 2024-09-18T13:27:25.863Z
DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date DATE NOT NULL,
    genre VARCHAR(255) NOT NULL,
    rating INT NOT NULL
);