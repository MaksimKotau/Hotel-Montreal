-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2018 at 06:19 PM
-- Server version: 5.7.17
-- PHP Version: 7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel-montreal`
--
CREATE DATABASE IF NOT EXISTS `hotel-montreal` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `hotel-montreal`;

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
CREATE TABLE `hotels` (
  `idh` int(11) NOT NULL,
  `hotel_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `descr` text COLLATE utf8_unicode_ci,
  `rating` tinyint(3) UNSIGNED NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`idh`, `hotel_name`, `descr`, `rating`, `price`, `image`) VALUES
(1, 'Radio City', 'Just a 4-minute walk from the center, this hotel have a daily continental breakfast. Classically furnished rooms offer free WiFi, a flat-screen TV and iPod docking station.\r\n\r\nAll rooms at the are equipped with a cable TV, a work desk and a coffee maker.\r\n\r\nGuests of the hotel can enjoy free access to the on-site fitness room. Meeting rooms are available, and the business center is open 24/7.\r\n\r\nThis is our guests\' favorite part of Mointreal, according to independent reviews. In this area you can shop \'til you drop for popular brands like H&M, Nike, Ralph Lauren.', 4, '200.00', 'images/hotels/hotel_1.jpg'),
(2, 'Radisson', 'Guests can enjoy the on-site bar. Free WiFi is provided throughout the property and private parking is available on site.\r\n\r\nA TV, as well as an iPod docking station are available. Each room includes a private bathroom.\r\n\r\nThere is a 24-hour front desk, an ATM and a hairdresser\'s at the property.\r\n\r\nThis is our guests\' favorite part of Montreal, according to independent reviews. In this area you can shop \'til you drop for popular brands like H&M, Nike, Ralph Lauren.\r\n\r\nThis property also has one of the top-rated locations in the city! Guests are happier about it compared to other properties in the area.\r\n\r\nThis property is also rated for the best value in New York City! Guests are getting more for their money when compared to other properties in this city.\r\n\r\nWe speak your language!', 5, '500.00', 'images/hotels/hotel_2.jpg'),
(4, 'The Manhattan', 'The Manhattan offers accommodations in Montreal City.\r\n\r\nEvery room at this hotel is air conditioned and is fitted with a flat-screen TV. Certain rooms feature a sitting area where you can relax. All rooms include a private bathroom. For your comfort, you will find free toiletries and a hairdryer.\r\n\r\nThere is a 24-hour front desk, an ATM, business center and a gift shop at the property.\r\n\r\nThis is our guests\' favorite part of Montreal, according to independent reviews.\r\n\r\nCouples in particular like the location – they rated it 8.8 for a two-person trip.', 4, '350.00', 'images/hotels/hotel_3.jpg'),
(5, 'The Watson Hotel', 'Located in Montreal, 1 km from Business center, The Watson Hotel features a restaurant, bar and free WiFi throughout the property. Guests can enjoy the on-site restaurant. Private parking is available on site.\r\n\r\nEach room at this hotel is air conditioned and has a flat-screen TV. You will find a coffee machine in the room. Each room has a private bathroom. Extras include free toiletries and a hairdryer.\r\n\r\nYou will find a 24-hour front desk and gift shop at the property.\r\n\r\nCouples in particular like the location – they rated it 8.3 for a two-person trip.\r\n\r\nThis property is also rated for the best value in Montreal! Guests are getting more for their money when compared to other properties in this city.', 3, '150.00', 'images/hotels/hotel_4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
CREATE TABLE `reservations` (
  `idr` int(11) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `confirmed` tinyint(1) NOT NULL,
  `idu` int(11) NOT NULL,
  `idh` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`idr`, `date_debut`, `date_fin`, `confirmed`, `idu`, `idh`) VALUES
(1, '2018-04-23', '2018-04-24', 1, 1, 5),
(2, '2018-04-24', '2018-04-30', 1, 1, 5),
(3, '2018-04-26', '2018-04-30', 1, 1, 2),
(4, '2018-04-27', '2018-04-29', 1, 1, 4),
(5, '2018-05-17', '2018-05-23', 0, 1, 5),
(6, '2018-05-17', '2018-05-23', 0, 1, 5),
(7, '2018-04-26', '2018-04-28', 0, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `idu` int(11) NOT NULL,
  `fname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idu`, `fname`, `lname`, `email`, `password`, `role`) VALUES
(1, 'Maksim', 'Kotau', 'maxkotov@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'USER'),
(17, 'admin', 'admin', 'admin@admin.ca', 'e10adc3949ba59abbe56e057f20f883e', 'ADMIN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`idh`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`idr`),
  ADD KEY `FK_users_reservations` (`idu`),
  ADD KEY `FK_hotels_reservations` (`idh`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idu`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `idh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `idr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
