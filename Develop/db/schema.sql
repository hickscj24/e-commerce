-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db
USE ecommerce_db
CREATE TABLE category (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(30) NOT NULL
);
CREATE TABLE product (
   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
   price DECIMAL NOT NULL,
   stock INT UNSIGNED NOT NULL default 10,
   category_id INT references category(id)
);
CREATE TABLE tag (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(30)

);
CREATE TABLE product_tag (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_id INT references product(id),
  tag_id INT references tag(id)
);

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

