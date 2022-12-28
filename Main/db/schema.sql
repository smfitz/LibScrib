DROP DATABASE IF EXISTS libscrib_db;
CREATE DATABASE libscrib_db;


USE libscrib_db;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email STR,
  password STR
);

CREATE TABLE search (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    isbn INT NOT NULL VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE SET NULL

);
CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(255) NOT NULL,
    title STR,
    text STR,
    user_id INT,
    FOREIGN KEY (user_id)
    REFERENCES search(id)
    ON DELETE SET NULL,
    FOREIGN KEY (search_id)
    REFERENCES reviews(id)
    ON DELETE SET NULL