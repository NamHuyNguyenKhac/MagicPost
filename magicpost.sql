-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 28, 2023 lúc 05:32 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB-log
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `magicpost`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gathering_points`
--

CREATE TABLE `gathering_points` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `employeeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `gathering_points`
--

INSERT INTO `gathering_points` (`id`, `name`, `address`, `employeeId`) VALUES
(1, 'Điểm tập kết miền Bắc', 'Hà Nội', 3),
(2, 'Điểm tập kết miền Trung', 'Đà Nẵng', 4),
(3, 'Điểm tập kết miền Nam', 'TP Hồ Chí Minh', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `package_info`
--

CREATE TABLE `package_info` (
  `id` int(11) NOT NULL,
  `type` enum('Tài liệu','Hàng Hóa') DEFAULT NULL,
  `fare` int(11) DEFAULT NULL,
  `weight` decimal(3,2) DEFAULT NULL,
  `senderAddress` varchar(50) DEFAULT NULL,
  `receiverAddress` varchar(50) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `package_info`
--

INSERT INTO `package_info` (`id`, `type`, `fare`, `weight`, `senderAddress`, `receiverAddress`, `userId`) VALUES
(1, 'Tài liệu', 30000, '2.57', '23B Lê Lợi, Quận Hoàn Kiếm', '72 Pasteur, Quận 3', 15),
(2, 'Tài liệu', 52000, '1.63', '45 Điện Biên Phủ, Quận Ba Đình', '15 Bùi Viện, Quận 1', 16),
(3, 'Hàng Hóa', 52000, '1.50', '78 Hàng Điếu, Quận Hoàn Kiếm', '205 Nguyễn Thị Minh Khai, Quận 3', 18),
(4, 'Tài liệu', 57000, '1.00', '124 Lạc Trung, Quận Hai Bà Trưng', '40 Phạm Ngọc Thạch, Quận 3', 25),
(5, 'Hàng Hóa', 48000, '0.80', '56 Thái Hà, Quận Đống Đa', '88 Nguyễn Huệ, Quận 1', 22),
(6, 'Tài liệu', 22000, '1.00', '9 Nguyễn Tri Phương, Quận Hai Bà Trưng', '50 Bạch Đằng, Quận Hải Châu', 24),
(7, 'Tài liệu', 58000, '0.37', '33A Phan Đình Phùng, Quận Ba Đình', '89 Trần Phú, Quận Hải Châu', 28),
(8, 'Hàng Hóa', 65000, '1.50', '72 Đống Đa, Quận Hoàn Kiếm', '102 Nguyễn Chí Thanh, Quận Hải Châu', 14),
(9, 'Hàng Hóa', 54000, '1.29', '15 Hoàng Hoa Thám, Quận Ba Đình', '15 Lê Duẩn, Quận Hải Châu', 17),
(10, 'Tài liệu', 44000, '0.43', '205 Cầu Giấy, Quận Cầu Giấy', '73 Phan Châu Trinh, Quận Hải Châu', 21),
(11, 'Hàng Hóa', 35000, '1.14', '40 Lê Thánh Tông, Quận Hai Bà Trưng', '50 Bạch Đằng, Quận Hải Châu', 26),
(12, 'Tài liệu', 72000, '0.75', '88 Trần Nhật Duật, Quận Hoàn Kiếm', '124 Lạc Trung, Quận Hai Bà Trưng', 30);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `package_status`
--

CREATE TABLE `package_status` (
  `id` int(11) NOT NULL,
  `currentLocation` varchar(50) DEFAULT NULL,
  `nextLocation` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `createDate` date NOT NULL,
  `lastUpdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `package_status`
--

INSERT INTO `package_status` (`id`, `currentLocation`, `nextLocation`, `status`, `createDate`, `lastUpdate`) VALUES
(1, 'Hà Nội', 'Đà Nẵng', 'transporting', '2023-12-15', '2023-12-22'),
(2, 'Hà Nội', 'Hồ Chí Minh', 'transporting', '2023-12-14', '2023-12-23');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `privileges`
--

CREATE TABLE `privileges` (
  `id` int(11) NOT NULL,
  `url` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`) VALUES
(1, 'Lãnh đạo công ty', 'Người có quyền cao nhất trong công ty'),
(2, 'Trưởng điểm tập kết', 'Quản lý một điểm tập kết'),
(3, 'Nhân viên điểm tập kết', 'Nhân viên của một điểm tập kết'),
(4, 'Trưởng điểm giao dịch', 'Quản lý một điểm giao dịch'),
(5, 'Nhân viên điểm giao dịch', 'Nhân viên của một điểm giao dịch'),
(6, 'Người dùng', 'Người dùng đăng ký sử dụng web');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_privilege`
--

CREATE TABLE `role_privilege` (
  `id` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `privilegeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transaction_points`
--

CREATE TABLE `transaction_points` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `employeeId` int(11) DEFAULT NULL,
  `gatheringPointId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `transaction_points`
--

INSERT INTO `transaction_points` (`id`, `name`, `address`, `employeeId`, `gatheringPointId`) VALUES
(1, 'An Giang', 'An Giang', NULL, 3),
(2, 'Bà Rịa – Vũng Tàu', 'Bà Rịa – Vũng Tàu', NULL, 3),
(3, 'Bạc Liêu', 'Bạc Liêu', NULL, 3),
(4, 'Bắc Giang', 'Bắc Giang', NULL, 1),
(5, 'Bắc Kạn', 'Bắc Kạn', NULL, 1),
(6, 'Bắc Ninh', 'Bắc Ninh', NULL, 1),
(7, 'Bến Tre', 'Bến Tre', NULL, 3),
(8, 'Bình Dương', 'Bình Dương', NULL, 3),
(9, 'Bình Định', 'Bình Định', NULL, 2),
(10, 'Bình Phước', 'Bình Phước', NULL, 3),
(11, 'Bình Thuận', 'Bình Thuận', NULL, 2),
(12, 'Cà Mau', 'Cà Mau', NULL, 3),
(13, 'Cao Bằng', 'Cao Bằng', NULL, 1),
(14, 'Cần Thơ', 'Cần Thơ', NULL, 3),
(15, 'Đà Nẵng', 'Đà Nẵng', NULL, 2),
(16, 'Đắk Lắk', 'Đắk Lắk', NULL, 2),
(17, 'Đắk Nông', 'Đắk Nông', NULL, 2),
(18, 'Điện Biên', 'Điện Biên', NULL, 1),
(19, 'Đồng Nai', 'Đồng Nai', NULL, 3),
(20, 'Đồng Tháp', 'Đồng Tháp', NULL, 3),
(21, 'Gia Lai', 'Gia Lai', NULL, 2),
(22, 'Hà Giang', 'Hà Giang', NULL, 1),
(23, 'Hà Nam', 'Hà Nam', NULL, 1),
(24, 'Hà Nội', 'Hà Nội', NULL, 1),
(25, 'Hà Tĩnh', 'Hà Tĩnh', NULL, 2),
(26, 'Hải Dương', 'Hải Dương', NULL, 1),
(27, 'Hải Phòng', 'Hải Phòng', NULL, 1),
(28, 'Hậu Giang', 'Hậu Giang', NULL, 3),
(29, 'Hòa Bình', 'Hòa Bình', NULL, 1),
(30, 'Thành phố Hồ Chí Minh', 'Thành phố Hồ Chí Minh', NULL, 3),
(31, 'Hưng Yên', 'Hưng Yên', NULL, 1),
(32, 'Khánh Hòa', 'Khánh Hòa', NULL, 2),
(33, 'Kiên Giang', 'Kiên Giang', NULL, 3),
(34, 'Kon Tum', 'Kon Tum', NULL, 2),
(35, 'Lai Châu', 'Lai Châu', NULL, 1),
(36, 'Lạng Sơn', 'Lạng Sơn', NULL, 1),
(37, 'Lào Cai', 'Lào Cai', NULL, 1),
(38, 'Lâm Đồng', 'Lâm Đồng', NULL, 2),
(39, 'Long An', 'Long An', NULL, 3),
(40, 'Nam Định', 'Nam Định', NULL, 1),
(41, 'Nghệ An', 'Nghệ An', NULL, 2),
(42, 'Ninh Bình', 'Ninh Bình', NULL, 1),
(43, 'Ninh Thuận', 'Ninh Thuận', NULL, 2),
(44, 'Phú Thọ', 'Phú Thọ', NULL, 1),
(45, 'Phú Yên', 'Phú Yên', NULL, 2),
(46, 'Quảng Bình', 'Quảng Bình', NULL, 2),
(47, 'Quảng Nam', 'Quảng Nam', NULL, 2),
(48, 'Quảng Ngãi', 'Quảng Ngãi', NULL, 2),
(49, 'Quảng Ninh', 'Quảng Ninh', NULL, 1),
(50, 'Quảng Trị', 'Quảng Trị', NULL, 2),
(51, 'Sóc Trăng', 'Sóc Trăng', NULL, 3),
(52, 'Sơn La', 'Sơn La', NULL, 1),
(53, 'Tây Ninh', 'Tây Ninh', NULL, 3),
(54, 'Thái Bình', 'Thái Bình', NULL, 1),
(55, 'Thái Nguyên', 'Thái Nguyên', NULL, 1),
(56, 'Thanh Hóa', 'Thanh Hóa', NULL, 2),
(57, 'Thừa Thiên Huế', 'Thừa Thiên Huế', NULL, 2),
(58, 'Tiền Giang', 'Tiền Giang', NULL, 3),
(59, 'Trà Vinh', 'Trà Vinh', NULL, 3),
(60, 'Tuyên Quang', 'Tuyên Quang', NULL, 1),
(61, 'Vĩnh Long', 'Vĩnh Long', NULL, 3),
(62, 'Vĩnh Phúc', 'Vĩnh Phúc', NULL, 1),
(63, 'Yên Bái', 'Yên Bái', NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `sex` enum('Nam','Nữ') NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNumber` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullName`, `sex`, `email`, `phoneNumber`, `dob`) VALUES
(1, 'pro', 'Nam', 'abc@gmail.com', '0123456789', '13-05-2003'),
(2, 'Quang', 'Nam', 'Quang@gmail.com', '5295930527', '22-11-1997'),
(3, 'abc', 'Nam', 'def@gmail.com', '0123456789', '20-10-2003'),
(4, 'Tuấn', 'Nam', 'Tuan@gmail.com', '6087998928', '27-06-1994'),
(5, 'Trung', 'Nam', 'Trung@gmail.com', '3069852925', '18-03-1999'),
(6, 'Đức', 'Nam', 'Duc@gmail.com', '2725778486', '09-08-1993'),
(7, 'Hoàng', 'Nam', 'Hoang@gmail.com', '8369350539', '14-02-2002'),
(8, 'Anh', 'Nam', 'Anh@gmail.com', '5077225421', '30-12-1995'),
(9, 'Tung', 'Nam', 'Tùng@gmail.com', '6728559271', '07-11-1991'),
(10, 'Thành', 'Nam', 'Thanh@gmail.com', '3565229721', '19-05-2004'),
(11, 'Sơn', 'Nam', 'Son@gmail.com', '3593409407', '25-10-1998'),
(12, 'Dương', 'Nam', 'Duong@gmail.com', '8923515192', '12-05-1990'),
(13, 'Cường', 'Nam', 'Cuong@gmail.com', '0268340341', '09-01-2003'),
(14, 'Vũ', 'Nam', 'Vu@gmail.com', '2154201005', '04-09-1996'),
(15, 'Nam', 'Nam', 'Nam@gmail.com', '7111841253', '28-11-2000'),
(16, 'Hương', 'Nữ', 'Huong@gmail.com', '6605098417', '17-08-1992'),
(17, 'Lan', 'Nữ', 'Lan@gmail.com', '5025009012', '23-01-1994'),
(18, 'Linh', 'Nữ', 'Linh@gmail.com', '5977283178', '14-06-2001'),
(19, 'Hà', 'Nữ', 'Ha@gmail.com', '1516378489', '03-07-1997'),
(20, 'Thao', 'Nữ', 'Thảo@gmail.com', '5077237733', '29-09-1990'),
(21, 'Ngoc', 'Nữ', 'Ngọc@gmail.com', '5043384555', '01-12-2005'),
(22, 'Mai', 'Nữ', 'Mai@gmail.com', '6026395741', '05-02-1993'),
(23, 'Ánh', 'Nữ', 'Asnh@gmail.com', '0048873920', '20-12-1999'),
(24, 'An', 'Nữ', 'An@gmail.com', '3301958187', '02-04-1991'),
(25, 'Phương', 'Nữ', 'Phuong@gmail.com', '3285472637', '26-07-2002'),
(26, 'Thủy', 'Nữ', 'Thuy@gmail.com', '9334256333', '15-10-1995'),
(27, 'Thu', 'Nữ', 'Thu@gmail.com', '1858853935', '06-08-1998'),
(28, 'Loan', 'Nữ', 'Loan@gmail.com', '7389927579', '31-03-2004'),
(29, 'Hoa', 'Nữ', 'Hoa@gmail.com', '7517255793', '01-09-1996'),
(30, 'Trang', 'Nữ', 'Trang@gmail.com', '5909299503', '23-08-2000'),
(31, 'Hải', 'Nam', 'Hai@gmail.com', '2489170672', '05-12-1992'),
(32, 'Minh', 'Nam', 'Minh@gmail.com', '9163829423', '08-03-2001');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_accounts`
--

CREATE TABLE `user_accounts` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user_accounts`
--

INSERT INTO `user_accounts` (`id`, `userId`, `username`, `password`, `roleId`) VALUES
(7, 1, 'a', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 1),
(9, 7, 'test1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(10, 2, 'test2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(11, 3, 'test3', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(12, 4, 'test4', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(13, 5, 'test5', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(14, 6, 'test6', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(15, 8, 'test8', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(16, 9, 'test9', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(17, 10, 'test10', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(18, 11, 'test11', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(19, 12, 'test12', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(20, 13, 'test13', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(21, 14, 'test14', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(22, 15, 'test15', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(23, 16, 'test16', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(24, 17, 'test17', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(25, 18, 'test18', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(26, 19, 'test19', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(27, 20, 'test20', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(28, 21, 'test21', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(29, 22, 'test22', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(30, 23, 'test23', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(31, 24, 'test24', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(32, 25, 'test25', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(34, 27, 'test27', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(35, 28, 'test28', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(36, 29, 'test29', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(37, 30, 'test30', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(38, 31, 'test31', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(39, 32, 'test32', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_employee`
--

CREATE TABLE `user_employee` (
  `userId` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `siteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user_employee`
--

INSERT INTO `user_employee` (`userId`, `type`, `siteId`) VALUES
(1, NULL, NULL),
(3, 1, 1),
(4, 1, 2),
(5, 1, 1),
(6, 1, 2),
(8, 2, 1),
(9, 2, 2),
(10, 2, 1),
(11, 2, 2),
(7, 1, 3),
(2, 1, 3);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `gathering_points`
--
ALTER TABLE `gathering_points`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `package_info`
--
ALTER TABLE `package_info`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `package_status`
--
ALTER TABLE `package_status`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `privileges`
--
ALTER TABLE `privileges`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role_privilege`
--
ALTER TABLE `role_privilege`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `transaction_points`
--
ALTER TABLE `transaction_points`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_accounts`
--
ALTER TABLE `user_accounts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `gathering_points`
--
ALTER TABLE `gathering_points`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `package_info`
--
ALTER TABLE `package_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `package_status`
--
ALTER TABLE `package_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `privileges`
--
ALTER TABLE `privileges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `role_privilege`
--
ALTER TABLE `role_privilege`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `transaction_points`
--
ALTER TABLE `transaction_points`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `user_accounts`
--
ALTER TABLE `user_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
