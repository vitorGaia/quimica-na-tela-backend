DROP DATABASE IF EXISTS quimica_na_tela_db;
CREATE DATABASE quimica_na_tela_db;

USE quimica_na_tela_db;

CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  display_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  image VARCHAR(250)
);

CREATE TABLE news (
  new_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  content VARCHAR(3000) NOT NULL,
  font VARCHAR(200) NOT NULL,
  image VARCHAR(250),
  link_reference_1 VARCHAR(250),
  link_reference_2 VARCHAR(250),
  published DATETIME,
  updated DATETIME,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE support_material_categories (
  material_category_id INT PRIMARY KEY AUTO_INCREMENT,
  material_category_name VARCHAR(50) NOT NULL
);

CREATE TABLE support_materials (
  material_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  `description` VARCHAR(3000) NOT NULL,
  `url` VARCHAR(250) NOT NULL,
  published DATETIME,
  updated DATETIME,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES support_material_categories (material_category_id)
);

CREATE TABLE podcast_categories (
  podcast_category_id INT PRIMARY KEY AUTO_INCREMENT,
  podcast_category_name VARCHAR(50) NOT NULL
);

CREATE TABLE podcasts (
  podcast_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  `number` INT NOT NULL,
  `description` VARCHAR(3000) NOT NULL,
  `url` VARCHAR(250) NOT NULL,
  published DATETIME,
  updated DATETIME,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES podcast_categories (podcast_category_id)
);

CREATE TABLE categories_intermediary (
  category_id INT,
  category_type ENUM('support_material', 'podcast'),
  PRIMARY KEY (category_id, category_type),
  FOREIGN KEY (category_id) REFERENCES support_material_categories (material_category_id),
  FOREIGN KEY (category_id) REFERENCES podcast_categories (podcast_category_id)
);

CREATE TABLE coments (
  coment_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  category_type ENUM('support_material', 'podcast') NOT NULL,
  category_id INT NOT NULL,
  content VARCHAR(3000) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id),
  FOREIGN KEY (category_id, category_type) REFERENCES categories_intermediary (category_id, category_type)
);
