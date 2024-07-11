-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-sil.alwaysdata.net
-- Generation Time: Jul 11, 2024 at 02:58 AM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sil_rickowens`
--

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `genero` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `img`, `precio`, `categoria`, `cantidad`, `genero`) VALUES
(1, 'RICK OWENS JACKET', 'https://i.postimg.cc/DwFqb9MT/PRODUCTO-1-JACKET-LIDO-1-2100.jpg', 2100.00, 'JACKET', 10, 'Femenino'),
(2, 'RICK OWENS JACKET', 'https://i.postimg.cc/Jzqj3pfB/PRODUCTO-2-JACKET-LIDO-1-3095-2.jpg', 3095.00, 'JACKET', 10, 'Femenino'),
(3, 'RICK OWENS JACKET', 'https://i.postimg.cc/q7DnSzMJ/PRODUCTO-3-JACKET-LIDO.jpg', 1285.00, 'JACKET', 10, 'Femenino'),
(4, 'RICK OWENS BOOTS', 'https://i.postimg.cc/d17dYwL8/PRODUCTO-7-BOOTS.jpg', 2955.00, 'BOOTS', 10, 'Femenino'),
(5, 'RICK OWENS PANTS', 'https://i.postimg.cc/PrnDgGhw/PRODUCTO-12-PANTS2-830.jpg', 830.00, 'PANTS', 10, 'Femenino'),
(6, 'RICK OWENS PANTS', 'https://i.postimg.cc/dQydNQMF/PRODUCTO-13-PANTS-woman.jpg', 630.00, 'PANTS', 10, 'Femenino'),
(7, 'RICK OWENS BOXER', 'https://i.postimg.cc/8z16Ch7k/PRODUCTO-16-BOXER.jpg', 250.00, 'BOXER', 10, 'Femenino'),
(8, 'RICK OWENS TOP', 'https://i.postimg.cc/q7q6s4c9/PRODUCTO-17-TOP.jpg', 210.00, 'TOP', 10, 'Femenino'),
(9, 'prueba', 'https://i.postimg.cc/DwFqb9MT/PRODUCTO-1-JACKET-LIDO-1-2100.jpg', 100.00, 'prueba', 10, 'Femenino'),
(10, 'PRUEBAPUT', 'linkPRUEBAPUT', 10.00, 'pruebaPUT', 10, 'Femenino');

-- --------------------------------------------------------

--
-- Table structure for table `producto_talle`
--

CREATE TABLE `producto_talle` (
  `id_talle` int(11) NOT NULL,
  `id` int(11) DEFAULT NULL,
  `talle` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `producto_talle`
--

INSERT INTO `producto_talle` (`id_talle`, `id`, `talle`) VALUES
(131, 1, 'S'),
(132, 1, 'M'),
(133, 1, 'L'),
(134, 1, 'XL'),
(135, 1, 'XXL'),
(136, 1, 'S'),
(137, 1, 'M'),
(138, 1, 'L'),
(139, 1, 'XL'),
(140, 1, 'XXL'),
(141, 2, 'S'),
(142, 2, 'M'),
(143, 2, 'L'),
(144, 2, 'XL'),
(145, 2, 'XXL'),
(146, 2, 'S'),
(147, 2, 'M'),
(148, 2, 'L'),
(149, 2, 'XL'),
(150, 2, 'XXL'),
(151, 3, 'S'),
(152, 3, 'M'),
(153, 3, 'L'),
(154, 3, 'XL'),
(155, 3, 'XXL'),
(156, 3, 'S'),
(157, 3, 'M'),
(158, 3, 'L'),
(159, 3, 'XL'),
(160, 3, 'XXL'),
(161, 4, 'S'),
(162, 4, 'M'),
(163, 4, 'L'),
(164, 4, 'XL'),
(165, 4, 'XXL'),
(166, 4, 'S'),
(167, 4, 'M'),
(168, 4, 'L'),
(169, 4, 'XL'),
(170, 4, 'XXL'),
(171, 5, 'S'),
(172, 5, 'M'),
(173, 5, 'L'),
(174, 5, 'XL'),
(175, 5, 'XXL'),
(176, 5, 'S'),
(177, 5, 'M'),
(178, 5, 'L'),
(179, 5, 'XL'),
(180, 5, 'XXL'),
(181, 6, 'S'),
(182, 6, 'M'),
(183, 6, 'L'),
(184, 6, 'XL'),
(185, 6, 'XXL'),
(186, 6, 'S'),
(187, 6, 'M'),
(188, 6, 'L'),
(189, 6, 'XL'),
(190, 6, 'XXL'),
(191, 7, 'S'),
(192, 7, 'M'),
(193, 7, 'L'),
(194, 7, 'XL'),
(195, 7, 'XXL'),
(196, 7, 'S'),
(197, 7, 'M'),
(198, 7, 'L'),
(199, 7, 'XL'),
(200, 7, 'XXL'),
(201, 8, 'S'),
(202, 8, 'M'),
(203, 8, 'L'),
(204, 8, 'XL'),
(205, 8, 'XXL'),
(206, 8, 'S'),
(207, 8, 'M'),
(208, 8, 'L'),
(209, 8, 'XL'),
(210, 8, 'XXL'),
(212, NULL, 'XS'),
(214, 2, 'XS'),
(215, NULL, 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `producto_talle`
--
ALTER TABLE `producto_talle`
  ADD PRIMARY KEY (`id_talle`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `producto_talle`
--
ALTER TABLE `producto_talle`
  MODIFY `id_talle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=219;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `producto_talle`
--
ALTER TABLE `producto_talle`
  ADD CONSTRAINT `producto_talle_ibfk_1` FOREIGN KEY (`id`) REFERENCES `producto` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
