const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  })
});


// CREATE TABLE category (
//   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// category_name VARCHAR(30) NOT NULL
// );
// CREATE TABLE product (
//  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// product_name VARCHAR(30) NOT NULL,
//  price DECIMAL NOT NULL,
//  stock INT UNSIGNED NOT NULL default 10,
//  category_id INT references category(id)
// );
// CREATE TABLE tag (
//   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// tag_name VARCHAR(30)

// );
// CREATE TABLE product_tag (
//   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// product_id INT references product(id),
// tag_id INT references tag(id)
// );