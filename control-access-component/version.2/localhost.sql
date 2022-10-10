-- Adminer 4.8.1 MySQL 5.5.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DELIMITER ;;

DROP PROCEDURE IF EXISTS `create_user`;;
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `create_user`(IN `name` varchar(45) CHARACTER SET 'utf8', IN `password` varchar(45) CHARACTER SET 'utf8')
INSERT INTO `user` (`name`, `password`) VALUES
(name,	password);;

DROP PROCEDURE IF EXISTS `delete_user`;;
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `delete_user`(IN `id` int)
DELETE FROM user WHERE user.id = id;;

DROP PROCEDURE IF EXISTS `get_all_users`;;
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `get_all_users`()
SELECT name, password FROM user;;

DROP PROCEDURE IF EXISTS `update_user`;;
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `update_user`(IN `name` varchar(45) CHARACTER SET 'utf8', IN `password` varchar(45) CHARACTER SET 'utf8')
UPDATE user
  SET user.password = password
WHERE user.name = name;;

DELIMITER ;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- 2022-10-06 18:18:57