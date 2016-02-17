-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.6.17 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para tienda
CREATE DATABASE IF NOT EXISTS `tienda` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tienda`;


-- Volcando estructura para tabla tienda.articulos
CREATE TABLE IF NOT EXISTS `articulos` (
  `idArticulo` int(11) NOT NULL AUTO_INCREMENT,
  `nombreArticulo` varchar(45) NOT NULL,
  `descripcionArticulo` varchar(250) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `precioArticulo` int(11) NOT NULL,
  `imagenArticulo` varchar(250) NOT NULL,
  `codigoArticulo` varchar(45) NOT NULL,
  `urlArticulo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idArticulo`),
  KEY `idCategoria_idx` (`idCategoria`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`idCategoria`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.articulos: ~20 rows (aproximadamente)
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` (`idArticulo`, `nombreArticulo`, `descripcionArticulo`, `idCategoria`, `precioArticulo`, `imagenArticulo`, `codigoArticulo`, `urlArticulo`) VALUES
	(1, 'Macbeth', 'Giuseppe Verdi', 1, 100, 'img/entradas/entradas-macbeth.jpg', 'E001', NULL),
	(2, 'La Boheme', 'Giacomo Puccini', 1, 125, 'img/entradas/entradas-boheme.jpg', 'E002', NULL),
	(3, 'Aida', 'Giuseppe Verdi', 1, 150, 'img/entradas/entradas-aida.jpg', 'E003', NULL),
	(4, 'A Midsummer Nights Dream', 'Benjamin Britten', 1, 175, 'img/entradas/entradas-midsummer.jpg', 'E004', NULL),
	(5, 'La Flauta Magica', 'Mozart', 1, 200, 'img/entradas/entradas-flautamagica.jpg', 'E005', NULL),
	(6, 'Caro Hotel', 'Hotel de vanguardia y ambiente exclusivo en pleno centro de Valencia', 2, 100, 'img/alojamiento/hotel-caro.jpg', 'A001', NULL),
	(7, 'AdHoc Carmen', 'Trato exquisito y todas las comodidades en el barrio del Carmen', 2, 125, 'img/alojamiento/hotel-adhoc.jpg', 'A002', NULL),
	(8, 'The Westin', 'Lujo y distincion en uno de los hoteles mas elitistas de la ciudad', 2, 150, 'img/alojamiento/hotel-westin.jpg', 'A003', NULL),
	(9, 'Las Arenas', 'Hotel Balneario para disfrutar de unos dias de relax y bienestar', 2, 175, 'img/alojamiento/hotel-lasarenas.jpg', 'A004', NULL),
	(10, 'Palau de la Mar', 'Alojate a solo un paso de distancia de la Opera de Valencia', 2, 200, 'img/alojamiento/hotel-palaudelamar.jpg', 'A005', NULL),
	(11, 'Canalla Bistro', 'Chef Ricard Camarena', 3, 50, 'img/restaurantes/rest-canallabistro.jpg', 'R001', NULL),
	(12, 'Riff', '2 estrellas Michelin', 3, 60, 'img/restaurantes/rest-riff.jpg', 'R002', NULL),
	(13, 'Vertical', 'Disfruta de sus espectaculares vistas', 3, 70, 'img/restaurantes/rest-vertical.jpg', 'R003', NULL),
	(14, 'La Sucursal', 'Cocina de fusion', 3, 80, 'img/restaurantes/rest-sucursal.jpg', 'R004', NULL),
	(15, 'El Poblet', 'Chef Quique Dacosta', 3, 90, 'img/restaurantes/rest-poblet.jpg', 'R005', NULL),
	(16, 'CAC', 'Descubre todo lo que ofrece la Ciudad de las Artes y las Ciencias', 4, 50, 'img/actividades/actividad-cac.jpg', 'T001', NULL),
	(17, 'Lo mejor de Valencia', 'Dejate llevar por el encanto del casco antiguo de Valencia', 4, 55, 'img/actividades/actividad-lomejor.jpg', 'T002', NULL),
	(18, 'Albufera y Paella', 'Sumergete en la vida que rodea la Albufera de Valencia', 4, 60, 'img/actividades/actividad-albufera.jpg', 'T003', NULL),
	(19, 'Porcelana y Horchata', 'Visita la factoria de Lladro y degusta una tradicional horchata valenciana', 4, 65, 'img/actividades/actividad-porcelana.jpg', 'T004', NULL),
	(20, 'Tour Vinicola', 'Un recorrido por la region de Utiel-Requena para amantes del vino', 4, 70, 'img/actividades/actividad-vinicola.jpg', 'T005', NULL);
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `idCategoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCategoria` varchar(45) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.categorias: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` (`idCategoria`, `nombreCategoria`) VALUES
	(1, 'Entradas'),
	(2, 'Alojamiento'),
	(3, 'Restaurantes'),
	(4, 'Tours y Actividades');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.lineapedidos
CREATE TABLE IF NOT EXISTS `lineapedidos` (
  `idPedido` int(11) NOT NULL,
  `idArticulo` int(11) NOT NULL,
  `nombreArticulo` varchar(50) DEFAULT NULL,
  `unidades` int(11) DEFAULT NULL,
  `precio` bigint(20) DEFAULT NULL,
  KEY `idPedido` (`idPedido`),
  KEY `idArticulo` (`idArticulo`),
  CONSTRAINT `FK_lineapedidos_articulos` FOREIGN KEY (`idArticulo`) REFERENCES `articulos` (`idArticulo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idPedido` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`idPedido`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.lineapedidos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `lineapedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `lineapedidos` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `idPedido` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL DEFAULT '0',
  `fechaPedido` date DEFAULT NULL,
  `precioTotal` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.pedidos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(45) DEFAULT NULL,
  `emailUsuario` varchar(100) DEFAULT NULL,
  `rolUsuario` varchar(45) DEFAULT NULL,
  `contrasenaUsuario` varchar(45) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.usuarios: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`idUsuario`, `nombreUsuario`, `emailUsuario`, `rolUsuario`, `contrasenaUsuario`) VALUES
	(4, 'user', 'user@user.com', 'usuario', 'user'),
	(5, 'admin', 'admin@admin.com', 'administrador', 'admin');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;