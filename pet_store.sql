-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2022 a las 21:05:39
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pet_store`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pets`
--

CREATE TABLE `pets` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `updatedAt` date DEFAULT NULL,
  `createdAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;


--
-- Volcado de datos para la tabla `pets`
--

INSERT INTO `pets` (`id`, `name`, `updatedAt`, `createdAt`) VALUES
(2, 'Canelo', NULL, NULL),
(4, 'Guero', NULL, NULL),
(5, 'Flaco', NULL, NULL),
(6, 'Laika', NULL, NULL),
(7, 'Rambo', NULL, NULL),
(8, 'Balto', NULL, NULL),
(9, 'Dogi', NULL, NULL),
(10, 'Firulais', '2022-06-01', '2022-06-01'),
(11, 'Huereke', '2022-06-01', '2022-06-01'),
(12, 'Bronco', '2022-06-01', '2022-06-01'),
(13, 'Junior', '2022-06-01', '2022-06-01'),
(14, 'Junior', '2022-06-01', '2022-06-01'),
(15, 'Terry', '2022-06-01', '2022-06-01'),
(16, 'Terry', '2022-06-01', '2022-06-01'),
(17, 'Terry', '2022-06-01', '2022-06-01'),
(18, 'Terry', '2022-06-01', '2022-06-01');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
