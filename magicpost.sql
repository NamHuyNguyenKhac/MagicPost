-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 28, 2023 lúc 03:27 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `gathering_points`
--

INSERT INTO `gathering_points` (`id`, `name`, `address`, `employeeId`) VALUES
(1, 'Điểm tập kết miền Bắc', 'Hà Nội', NULL),
(2, 'Điểm tập kết miền Trung', 'Đà Nẵng', NULL),
(3, 'Điểm tập kết miền Nam', 'TP Hồ Chí Minh', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `package_info`
--

CREATE TABLE `package_info` (
  `id` int(11) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `fare` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `senderAddress` varchar(50) DEFAULT NULL,
  `receiverAddress` varchar(50) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `package_status`
--

CREATE TABLE `package_status` (
  `id` int(11) NOT NULL,
  `currentLocation` varchar(50) DEFAULT NULL,
  `nextLocation` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `privileges`
--

CREATE TABLE `privileges` (
  `id` int(11) NOT NULL,
  `url` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `sex` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNumber` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullName`, `sex`, `email`, `phoneNumber`, `dob`) VALUES
(1, 'pro', 'Nam', 'abc@gmail.com', '0123456789', '13-05-2003'),
(3, 'abc', 'nam', 'def@gmail.com', '0123456789', '20-10-2003');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_accounts`
--

INSERT INTO `user_accounts` (`id`, `userId`, `username`, `password`, `roleId`) VALUES
(7, 1, 'a', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_employee`
--

CREATE TABLE `user_employee` (
  `userId` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `siteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `package_status`
--
ALTER TABLE `package_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `user_accounts`
--
ALTER TABLE `user_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
