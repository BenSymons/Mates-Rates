DROP DATABASE IF EXISTS mates_rates;
CREATE DATABASE mates_rates;

\c mates_rates;

CREATE TABLE cities(
    city_id SERIAL PRIMARY KEY,
    city_name VARCHAR
);

CREATE TABLE restaurants(
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR,
    cuisine VARCHAR,
    rating INT,
    city_id INT REFERENCES cities(city_id)
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY, 
    user_name VARCHAR, 
    avatar_url VARCHAR
);

CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY, 
    comment_body TEXT, 
    rating INT, 
    user_id INT REFERENCES users(user_id),
    restaurant_id INT REFERENCES restaurants(restaurant_id)
);

INSERT INTO cities
(city_name)
VALUES
('Manchester'),
('Liverpool'),
('Leeds'),
('Newcastle'),
('Sheffield'),
('York'),
('Leicester');

INSERT INTO restaurants
(restaurant_name, cuisine, city_id)
VALUES
('Yard and Coop', 'Chicken', 1),
('Nandos', 'Portuguese', 2),
('Slug and Lettuce', 'Pub Grub', 4),
('Turtle Bay', 'Carribbean', 1),
('Peck and Yard', 'Asian', 1),
('Feast India', 'Indian', 7);

INSERT INTO users
(user_name, avatar_url)
VALUES
('Matt', 'https://aphoto.com'),
('Ben', 'https://photos.com'),
('Hayden', 'https://photo.com');

INSERT INTO comments
(comment_body, rating, user_id, restaurant_id)
VALUES
('Banging', 10, 1, 1),
('Great carribbean flavours', 8, 2, 4),
('Unbelievable Jeff', 9, 3, 6);

SELECT * FROM cities;
SELECT * FROM restaurants;
SELECT * FROM users;
SELECT * FROM comments;