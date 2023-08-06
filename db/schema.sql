DROP DATABASE IF EXISTS recipes_dev;
CREATE DATABASE recipes_dev;

\c recipes_dev;


CREATE TABLE recipes(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
photo TEXT,
type VARCHAR(50),
cuisine VARCHAR(50),
is_vegan BOOLEAN,
difficulty VARCHAR(50),
ingredients TEXT NOT NULL,
description TEXT
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT,
 title TEXT,
 content TEXT,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
 recipes_id INTEGER REFERENCES recipes (id)
 ON DELETE CASCADE
);


DROP TABLE IF EXISTS nutrition;

CREATE TABLE nutrition(
    id SERIAL PRIMARY KEY,
    calories NUMERIC,
    fat NUMERIC,
    carbohydrates NUMERIC,
    protein NUMERIC,
    sugar NUMERIC,
    recipes_id INTEGER REFERENCES recipes (id)
    ON DELETE CASCADE
);


