-- Adminer 4.8.1 MySQL 5.5.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DELIMITER ;;

DROP PROCEDURE IF EXISTS `add_user_to_group`;;
CREATE PROCEDURE `add_user_to_group`(IN `id_user` tinyint, IN `id_group` tinyint)
INSERT INTO `group_members` (`id_user`, `id_group`) VALUES
(id_user, id_group);;

DROP PROCEDURE IF EXISTS `create_group`;;
CREATE PROCEDURE `create_group`(IN `name` varchar(45) CHARACTER SET 'utf8', IN `description` varchar(45) CHARACTER SET 'utf8')
INSERT INTO `group` (`name`, `description`) VALUES
(name,	description);;

DROP PROCEDURE IF EXISTS `create_user`;;
CREATE PROCEDURE `create_user`(IN `name` varchar(45) CHARACTER SET 'utf8', IN `password` varchar(45) CHARACTER SET 'utf8')
INSERT INTO `user` (`name`, `password`) VALUES
(name,	password);;

DELIMITER ;

DROP TABLE IF EXISTS `action`;
CREATE TABLE `action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `group` (`id`, `name`, `description`) VALUES
(1,	'docente',	'docente del instituto isft'),
(2,	'alumno',	'alumno del instituto isft');

DROP TABLE IF EXISTS `group_accesses`;
CREATE TABLE `group_accesses` (
  `id_group` int(11) NOT NULL,
  `id_action` int(11) NOT NULL,
  KEY `id_group` (`id_group`),
  KEY `id_action` (`id_action`),
  CONSTRAINT `group_accesses_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `group` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `group_accesses_ibfk_2` FOREIGN KEY (`id_action`) REFERENCES `action` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `group_members`;
CREATE TABLE `group_members` (
  `id_user` int(11) NOT NULL,
  `id_group` int(11) NOT NULL,
  KEY `id_user` (`id_user`),
  KEY `id_group` (`id_group`),
  CONSTRAINT `group_members_ibfk_5` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `group_members_ibfk_6` FOREIGN KEY (`id_group`) REFERENCES `group` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `group_members_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `group_members_ibfk_2` FOREIGN KEY (`id_group`) REFERENCES `group` (`id`),
  CONSTRAINT `group_members_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `group_members_ibfk_4` FOREIGN KEY (`id_group`) REFERENCES `group` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `group_members` (`id_user`, `id_group`) VALUES
(2,	1),
(3,	2);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `user` (`id`, `name`, `password`) VALUES
(2,	'Barbara',	'Ba123'),
(3,	'Daniel',	'dani12');

DROP TABLE IF EXISTS `user_information`;
CREATE TABLE `user_information` (
  `id_user` int(11) NOT NULL,
  KEY `id_user` (`id_user`),
  CONSTRAINT `user_information_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `user_information_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- 2022-07-12 01:55:41