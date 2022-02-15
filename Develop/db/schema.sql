-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db
USE ecommerce_db
CREATE TABLE category (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
  product_name 'NOT NULL'
);
CREATE TABLE product (
   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL,
   product_name  'NOT NULL'
   price DECIMAL() NOT NULL,
   stock INT UNSIGNED NOT NULL default 10,
   category_id INT references category(id),
);
CREATE TABLE tag (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL,
  tag_name ''

);
CREATE TABLE product_tag (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL,
  product_id INT references product(id)
  tag_id INT references tag(id)
);

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

