-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema tienda
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tienda
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tienda` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `tienda` ;

-- -----------------------------------------------------
-- Table `tienda`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`categorias` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `nombreCategoria` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`idCategoria`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`articulos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`articulos` (
  `idArticulo` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `nombreArticulo` VARCHAR(45) NOT NULL COMMENT '',
  `descripcionArticulo` VARCHAR(250) NOT NULL COMMENT '',
  `idCategoria` INT NOT NULL COMMENT '',
  `precioArticulo` INT NOT NULL COMMENT '',
  `imagenArticulo` VARCHAR(250) NOT NULL COMMENT '',
  `codigoArticulo` VARCHAR(45) NOT NULL COMMENT '',
  `urlArticulo` VARCHAR(45) NULL COMMENT '',
  PRIMARY KEY (`idArticulos`)  COMMENT '',
  INDEX `idCategoria_idx` (`idCategoria` ASC)  COMMENT '',
  CONSTRAINT `idCategoria`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `tienda`.`categorias` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`usuarios` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `nombreUsuario` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`idUsuario`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`reserva` (
  `idReserva` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `idUsuario` INT NOT NULL COMMENT '',
  `codigoReserva` VARCHAR(45) NOT NULL COMMENT '',
  `precioTotal` INT NOT NULL DEFAULT 0 COMMENT '',
  PRIMARY KEY (`idReserva`)  COMMENT '',
  INDEX `idUsuario_idx` (`idUsuario` ASC)  COMMENT '',
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `tienda`.`usuarios` (`idUsuario`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`lineaPedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`lineaPedido` (
  `idLineaPedido` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `idReserva` INT NOT NULL COMMENT '',
  `codigoArticulo` VARCHAR(45) NOT NULL COMMENT '',
  `cantidadTotal` INT NOT NULL COMMENT '',
  `precio` INT NOT NULL COMMENT '',
  PRIMARY KEY (`idLineaPedido`)  COMMENT '',
  INDEX `idReserva_idx` (`idReserva` ASC)  COMMENT '',
  CONSTRAINT `idReserva`
    FOREIGN KEY (`idReserva`)
    REFERENCES `tienda`.`reserva` (`idReserva`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;