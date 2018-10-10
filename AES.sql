DROP DATABASE IF EXISTS `AES`;
CREATE DATABASE `AES`;
USE `AES`;

CREATE TABLE `Usuario` (
  `id_usu` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_usu` varchar(50) NOT NULL,
  `pass_usu` varchar(30) NOT NULL
);

CREATE TABLE `Reporte`(
  `id_rep` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_usu` varchar(500) NOT NULL,
  `cue_rep` varchar(500) NOT NULL
);
