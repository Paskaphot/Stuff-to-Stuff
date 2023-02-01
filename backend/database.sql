-- DROP all table

DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `stuff`;

-- Table structure for table `user`

CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  `role` VARCHAR(10) NOT NULL,
  `hashedPassword` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table structure for table `stuff`

CREATE TABLE `stuff` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255),
  `picture` VARCHAR(255),
  `weight` DECIMAL(64,2),
  `height` DECIMAL(64,2),
  `is_certified` BOOL,
  `user_id` INT NOT NULL,
    FOREIGN KEY (user_id)  
    REFERENCES user(id),
  PRIMARY KEY (`id`)
);

-- Insert init users for table `user`

INSERT INTO user (username, mail, role, hashedPassword)
VALUES
("user0", "user0@mail.fr", "user", "000"),
("initAdmin", "ppierre.network@gmail.com", "admin", "000");

-- Insert init stuff for table `stuff`

INSERT INTO stuff (name, description, picture, weight, height, is_certified, user_id) 
VALUES
("Tour Eiffel", "La seule et unique", "tour-eiffel.png", 33000, 7300000, TRUE, 1),
("Titanic", "Le navire le plus luxueux ayant jamais coulé", "titanic.png", 5200, 52310000,TRUE, 1),
("Tracteur", "Le badass de la campagne", "tracteur.png", 265, 5000, TRUE, 1),
("Piano", "Un poids lourd laqué version concert", "piano.png", 105, 600, TRUE, 1),
("Hippopotame", "Grosse bête qui adore l'eau", "hippopotame.png", 150, 15000, TRUE, 1),
("Fer à repasser", "Y'en a qui trouvent ça utile...", "fer-repasser.png", 14.3, 1.2, TRUE, 1),
("Playmobil", "En avant les histoires !", "playmobil.png", 7.5, 0.012, TRUE, 1),
("Big Mac", "C'est quand la pause dej ?", "big-mac.png", 9, 219, TRUE, 1),
("Ballon de Football", "Y'a plus qu'à courir derrière", "ballon-football.png", 22, 425, TRUE, 1),
("Shaquille O'Neal", "Version 2021 (la pandémie lui a pas fait du bien)", "shaquille-o-neal.png", 216, 188, TRUE, 1)

INSERT INTO stuff (name, description, picture, height, is_certified, user_id) 
VALUES ("Faucon Millenium", "Allez vas-y p'tit gars, fais-moi péter c't'engin et on rentre !", "faucon-millenium.png", 758, TRUE, 1);

INSERT INTO stuff (name, description, picture, weight, is_certified, user_id) 
VALUES ("Lac Léman", "Ça fait beaucoup d'eau tout ça", "lac-leman.png", 89000000000000, TRUE, 1);