-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 29, 2023 lúc 11:31 AM
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
(1, 'Điểm tập kết miền Bắc', 'Hà Nội', 2),
(2, 'Điểm tập kết miền Trung', 'Đà Nẵng', 3),
(3, 'Điểm tập kết miền Nam', 'TP Hồ Chí Minh', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `package_info`
--

CREATE TABLE `package_info` (
  `id` int(11) NOT NULL,
  `type` enum('Tài liệu','Hàng Hóa') DEFAULT NULL,
  `fare` int(11) DEFAULT NULL,
  `weight` decimal(3,2) DEFAULT NULL,
  `senderAddress` int(5) DEFAULT NULL,
  `receiverAddress` int(5) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `package_info`
--

INSERT INTO `package_info` (`id`, `type`, `fare`, `weight`, `senderAddress`, `receiverAddress`, `userId`) VALUES
(1, 'Tài liệu', 30000, '2.57', 24, 15, 15),
(2, 'Tài liệu', 52000, '1.63', 24, 15, 16),
(3, 'Hàng Hóa', 52000, '1.50', 24, 15, 18),
(4, 'Tài liệu', 57000, '1.00', 24, 15, 25),
(5, 'Hàng Hóa', 48000, '0.80', 24, 15, 22),
(6, 'Tài liệu', 22000, '1.00', 24, 15, 24),
(7, 'Tài liệu', 58000, '0.37', 24, 30, 28),
(8, 'Hàng Hóa', 65000, '1.50', 24, 30, 14),
(9, 'Hàng Hóa', 54000, '1.29', 24, 30, 17),
(10, 'Tài liệu', 44000, '0.43', 24, 30, 21),
(11, 'Hàng Hóa', 35000, '1.14', 24, 30, 26),
(12, 'Tài liệu', 72000, '0.75', 24, 30, 30);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `package_status`
--

CREATE TABLE `package_status` (
  `id` int(11) NOT NULL,
  `currentLocation` varchar(50) DEFAULT NULL,
  `nextLocation` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `createDate` datetime NOT NULL,
  `lastUpdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `package_status`
--

INSERT INTO `package_status` (`id`, `currentLocation`, `nextLocation`, `status`, `createDate`, `lastUpdate`) VALUES
(1, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Trung', 'Processing', '2023-12-15 00:00:00', '2023-12-22 00:00:00'),
(2, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Trung', 'Processing', '2023-12-14 00:00:00', '2023-12-23 00:00:00'),
(3, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Trung', 'Processing', '2023-12-21 17:25:32', '2023-12-29 11:25:01'),
(4, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Trung', 'Processing', '2023-12-20 17:25:32', '2023-12-29 11:25:01'),
(5, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Trung', 'Processing', '2023-12-13 17:25:32', '2023-12-29 11:25:01'),
(6, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Trung', 'Processing', '2023-12-13 17:25:32', '2023-12-29 11:25:01'),
(7, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Nam', 'Processing', '2023-12-13 17:25:32', '2023-12-29 11:25:01'),
(8, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Nam', 'Processing', '2023-12-13 17:25:32', '2023-12-29 11:25:01'),
(9, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Nam', 'Processing', '2023-12-07 17:25:32', '2023-12-29 11:25:01'),
(10, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Nam', 'Processing', '2023-12-15 17:25:32', '2023-12-29 11:25:01'),
(11, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Nam', 'Processing', '2023-12-13 17:25:32', '2023-12-29 11:25:01'),
(12, 'Điểm tập kết miền Bắc', 'Điểm tập kết miền Nam', 'Processing', '2023-12-14 17:25:32', '2023-12-29 11:25:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `privileges`
--

CREATE TABLE `privileges` (
  `id` int(11) NOT NULL,
  `url` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `privileges`
--

INSERT INTO `privileges` (`id`, `url`, `description`) VALUES
(1, '/admin', 'Quản lý điểm, trưởng điểm, đơn hàng');

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

--
-- Đang đổ dữ liệu cho bảng `role_privilege`
--

INSERT INTO `role_privilege` (`id`, `roleId`, `privilegeId`) VALUES
(1, 1, 1);

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
(1, 'Điểm giao dịch An Giang', 'An Giang', 33, 3),
(2, 'Điểm giao dịch Bà Rịa – Vũng Tàu', 'Bà Rịa – Vũng Tàu', 34, 3),
(3, 'Điểm giao dịch Bạc Liêu', 'Bạc Liêu', 35, 3),
(4, 'Điểm giao dịch Bắc Giang', 'Bắc Giang', 36, 1),
(5, 'Điểm giao dịch Bắc Kạn', 'Bắc Kạn', 37, 1),
(6, 'Điểm giao dịch Bắc Ninh', 'Bắc Ninh', 38, 1),
(7, 'Điểm giao dịch Bến Tre', 'Bến Tre', 39, 3),
(8, 'Điểm giao dịch Bình Dương', 'Bình Dương', 40, 3),
(9, 'Điểm giao dịch Bình Định', 'Bình Định', 41, 2),
(10, 'Điểm giao dịch Bình Phước', 'Bình Phước', 42, 3),
(11, 'Điểm giao dịch Bình Thuận', 'Bình Thuận', 43, 2),
(12, 'Điểm giao dịch Cà Mau', 'Cà Mau', 44, 3),
(13, 'Điểm giao dịch Cao Bằng', 'Cao Bằng', 45, 1),
(14, 'Điểm giao dịch Cần Thơ', 'Cần Thơ', 46, 3),
(15, 'Điểm giao dịch Đà Nẵng', 'Đà Nẵng', 47, 2),
(16, 'Điểm giao dịch Đắk Lắk', 'Đắk Lắk', 48, 2),
(17, 'Điểm giao dịch Đắk Nông', 'Đắk Nông', 49, 2),
(18, 'Điểm giao dịch Điện Biên', 'Điện Biên', 50, 1),
(19, 'Điểm giao dịch Đồng Nai', 'Đồng Nai', 51, 3),
(20, 'Điểm giao dịch Đồng Tháp', 'Đồng Tháp', 52, 3),
(21, 'Điểm giao dịch Gia Lai', 'Gia Lai', 53, 2),
(22, 'Điểm giao dịch Hà Giang', 'Hà Giang', 54, 1),
(23, 'Điểm giao dịch Hà Nam', 'Hà Nam', 55, 1),
(24, 'Điểm giao dịch Hà Nội', 'Hà Nội', 56, 1),
(25, 'Điểm giao dịch Hà Tĩnh', 'Hà Tĩnh', 57, 2),
(26, 'Điểm giao dịch Hải Dương', 'Hải Dương', 58, 1),
(27, 'Điểm giao dịch Hải Phòng', 'Hải Phòng', 59, 1),
(28, 'Điểm giao dịch Hậu Giang', 'Hậu Giang', 60, 3),
(29, 'Điểm giao dịch Hòa Bình', 'Hòa Bình', 61, 1),
(30, 'Điểm giao dịch Thành phố Hồ Chí Minh', 'Thành phố Hồ Chí Minh', 62, 3),
(31, 'Điểm giao dịch Hưng Yên', 'Hưng Yên', 63, 1),
(32, 'Điểm giao dịch Khánh Hòa', 'Khánh Hòa', 64, 2),
(33, 'Điểm giao dịch Kiên Giang', 'Kiên Giang', 65, 3),
(34, 'Điểm giao dịch Kon Tum', 'Kon Tum', 66, 2),
(35, 'Điểm giao dịch Lai Châu', 'Lai Châu', 67, 1),
(36, 'Điểm giao dịch Lạng Sơn', 'Lạng Sơn', 68, 1),
(37, 'Điểm giao dịch Lào Cai', 'Lào Cai', 69, 1),
(38, 'Điểm giao dịch Lâm Đồng', 'Lâm Đồng', 70, 2),
(39, 'Điểm giao dịch Long An', 'Long An', 71, 3),
(40, 'Điểm giao dịch Nam Định', 'Nam Định', 72, 1),
(41, 'Điểm giao dịch Nghệ An', 'Nghệ An', 73, 2),
(42, 'Điểm giao dịch Ninh Bình', 'Ninh Bình', 74, 1),
(43, 'Điểm giao dịch Ninh Thuận', 'Ninh Thuận', 75, 2),
(44, 'Điểm giao dịch Phú Thọ', 'Phú Thọ', 76, 1),
(45, 'Điểm giao dịch Phú Yên', 'Phú Yên', 77, 2),
(46, 'Điểm giao dịch Quảng Bình', 'Quảng Bình', 78, 2),
(47, 'Điểm giao dịch Quảng Nam', 'Quảng Nam', 79, 2),
(48, 'Điểm giao dịch Quảng Ngãi', 'Quảng Ngãi', 80, 2),
(49, 'Điểm giao dịch Quảng Ninh', 'Quảng Ninh', 81, 1),
(50, 'Điểm giao dịch Quảng Trị', 'Quảng Trị', 82, 2),
(51, 'Điểm giao dịch Sóc Trăng', 'Sóc Trăng', 83, 3),
(52, 'Điểm giao dịch Sơn La', 'Sơn La', 84, 1),
(53, 'Điểm giao dịch Tây Ninh', 'Tây Ninh', 85, 3),
(54, 'Điểm giao dịch Thái Bình', 'Thái Bình', 86, 1),
(55, 'Điểm giao dịch Thái Nguyên', 'Thái Nguyên', 87, 1),
(56, 'Điểm giao dịch Thanh Hóa', 'Thanh Hóa', 88, 2),
(57, 'Điểm giao dịch Thừa Thiên Huế', 'Thừa Thiên Huế', 89, 2),
(58, 'Điểm giao dịch Tiền Giang', 'Tiền Giang', 90, 3),
(59, 'Điểm giao dịch Trà Vinh', 'Trà Vinh', 91, 3),
(60, 'Điểm giao dịch Tuyên Quang', 'Tuyên Quang', 92, 1),
(61, 'Điểm giao dịch Vĩnh Long', 'Vĩnh Long', 93, 3),
(62, 'Điểm giao dịch Vĩnh Phúc', 'Vĩnh Phúc', 8, 1),
(63, 'Điểm giao dịch Yên Bái', 'Yên Bái', 9, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `sex` enum('Male','Female') NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNumber` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullName`, `sex`, `email`, `phoneNumber`, `dob`) VALUES
(1, 'pro', 'Male', 'abc@gmail.com', '0123456789', '13-05-2003'),
(2, 'Nguyễn Quang', 'Male', 'Quang@gmail.com', '5295930527', '22-11-1997'),
(3, 'abc', 'Male', 'def@gmail.com', '0123456789', '20-10-2003'),
(4, 'Nguyễn Tuấn', 'Male', 'Tuan@gmail.com', '6087998928', '27-06-1994'),
(5, 'Nguyễn Trung', 'Male', 'Trung@gmail.com', '3069852925', '18-03-1999'),
(6, 'Nguyễn Đức', 'Male', 'Duc@gmail.com', '2725778486', '09-08-1993'),
(7, 'Nguyễn Hoàng', 'Male', 'Hoang@gmail.com', '8369350539', '14-02-2002'),
(8, 'Nguyễn Anh', 'Male', 'Anh@gmail.com', '5077225421', '30-12-1995'),
(9, 'Nguyễn Tung', 'Male', 'Tùng@gmail.com', '6728559271', '07-11-1991'),
(10, 'Nguyễn Thành', 'Male', 'Thanh@gmail.com', '3565229721', '19-05-2004'),
(11, 'Nguyễn Sơn', 'Male', 'Son@gmail.com', '3593409407', '25-10-1998'),
(12, 'Nguyễn Dương', 'Male', 'Duong@gmail.com', '8923515192', '12-05-1990'),
(13, 'Nguyễn Cường', 'Male', 'Cuong@gmail.com', '0268340341', '09-01-2003'),
(14, 'Nguyễn Vũ', 'Male', 'Vu@gmail.com', '2154201005', '04-09-1996'),
(15, 'Nguyễn Nam', 'Male', 'Nam@gmail.com', '7111841253', '28-11-2000'),
(16, 'Nguyễn Thị Hương', 'Female', 'Huong@gmail.com', '6605098417', '17-08-1992'),
(17, 'Nguyễn Thị Lan', 'Female', 'Lan@gmail.com', '5025009012', '23-01-1994'),
(18, 'Nguyễn Thị Linh', 'Female', 'Linh@gmail.com', '5977283178', '14-06-2001'),
(19, 'Nguyễn Thị Hà', 'Female', 'Ha@gmail.com', '1516378489', '03-07-1997'),
(20, 'Nguyễn Thị Thao', 'Female', 'Thao@gmail.com', '5077237733', '29-09-1990'),
(21, 'Nguyễn Thị Ngoc', 'Female', 'Ngoc@gmail.com', '5043384555', '01-12-2005'),
(22, 'Nguyễn Thị Mai', 'Female', 'Mai@gmail.com', '6026395741', '05-02-1993'),
(23, 'Nguyễn Thị Ánh', 'Female', 'Asnh@gmail.com', '0048873920', '20-12-1999'),
(24, 'Nguyễn Thị An', 'Female', 'An@gmail.com', '3301958187', '02-04-1991'),
(25, 'Nguyễn Thị Phương', 'Female', 'Phuong@gmail.com', '3285472637', '26-07-2002'),
(26, 'Nguyễn Thị Thủy', 'Female', 'Thuy@gmail.com', '9334256333', '15-10-1995'),
(27, 'Nguyễn Thị Thu', 'Female', 'Thu@gmail.com', '1858853935', '06-08-1998'),
(28, 'Nguyễn Thị Loan', 'Female', 'Loan@gmail.com', '7389927579', '31-03-2004'),
(29, 'Nguyễn Thị Hoa', 'Female', 'Hoa@gmail.com', '7517255793', '01-09-1996'),
(30, 'Nguyễn Thị Trang', 'Female', 'Trang@gmail.com', '5909299503', '23-08-2000'),
(31, 'Nguyễn Hải', 'Male', 'Hai@gmail.com', '2489170672', '05-12-1992'),
(32, 'Nguyễn Minh', 'Male', 'Minh@gmail.com', '9163829423', '08-03-2001'),
(33, 'Alice Johnson', 'Female', 'AliceJohnson@gmail.com', '5477131796', '23-10-1999'),
(34, 'Daniel Smith', 'Male', 'DanielSmith@gmail.com', '7965485527', '16-04-2003'),
(35, 'Sophia Rodriguez', 'Female', 'SophiaRodriguez@gmail.com', '3996549975', '07-03-2002'),
(36, 'Liam Williams', 'Male', 'LiamWilliams@gmail.com', '6577128951', '29-09-1998'),
(37, 'Isabella Brown', 'Female', 'IsabellaBrown@gmail.com', '6503895894', '01-12-1992'),
(38, 'Ethan Martinez', 'Male', 'EthanMartinez@gmail.com', '6284266435', '02-05-1993'),
(39, 'Olivia Davis', 'Female', 'OliviaDavis@gmail.com', '6678116673', '12-02-1999'),
(40, 'Mason Taylor', 'Male', 'MasonTaylor@gmail.com', '2172962200', '04-02-2003'),
(41, 'Emma Anderson', 'Female', 'EmmaAnderson@gmail.com', '9768405121', '26-07-2002'),
(42, 'Aiden Campbell', 'Male', 'AidenCampbell@gmail.com', '4000921284', '15-10-1995'),
(43, 'Mia Turner', 'Female', 'MiaTurner@gmail.com', '5196857650', '06-08-1998'),
(44, 'Caleb Mitchell', 'Male', 'CalebMitchell@gmail.com', '7795513739', '31-03-2004'),
(45, 'Ava Walker', 'Female', 'AvaWalker@gmail.com', '0682026687', '01-09-1996'),
(46, 'Logan Nelson', 'Male', 'LoganNelson@gmail.com', '8767685739', '23-08-2000'),
(47, 'Sophia White', 'Female', 'SophiaWhite@gmail.com', '4103145475', '05-12-1992'),
(48, 'Lucas Robinson', 'Male', 'LucasRobinson@gmail.com', '0034507413', '22-11-1997'),
(49, 'Isabella Reed', 'Female', 'IsabellaReed@gmail.com', '6439000834', '08-03-2001'),
(50, 'Jackson Cooper', 'Male', 'JacksonCooper@gmail.com', '8050036255', '27-06-1994'),
(51, 'Olivia Bell', 'Female', 'OliviaBell@gmail.com', '6028334468', '18-03-1999'),
(52, 'Elijah Ward', 'Male', 'ElijahWard@gmail.com', '5314217344', '09-08-1993'),
(53, 'Amelia Fisher', 'Female', 'AmeliaFisher@gmail.com', '7875720982', '14-02-2002'),
(54, 'Daniel Hayes', 'Male', 'DanielHayes@gmail.com', '7201656953', '30-12-1995'),
(55, 'Harper Griffin', 'Female', 'HarperGriffin@gmail.com', '6474537131', '07-11-1991'),
(56, 'Liam Stewart', 'Male', 'LiamStewart@gmail.com', '1759800534', '19-05-2004'),
(57, 'Grace Murphy', 'Female', 'GraceMurphy@gmail.com', '3126041738', '25-10-1998'),
(58, 'Mason Perry', 'Male', 'MasonPerry@gmail.com', '6932706034', '12-05-1990'),
(59, 'Chloe Bryant', 'Female', 'ChloeBryant@gmail.com', '2718091945', '09-01-2003'),
(60, 'Noah Foster', 'Male', 'NoahFoster@gmail.com', '7793823387', '04-09-1996'),
(61, 'Ella Jenkins', 'Female', 'EllaJenkins@gmail.com', '2961858090', '28-11-2000'),
(62, 'Carter Cox', 'Male', 'CarterCox@gmail.com', '7687823220', '17-08-1992'),
(63, 'Lily Wright', 'Female', 'LilyWright@gmail.com', '7234224388', '23-01-1994'),
(64, 'Landon Reynolds', 'Male', 'LandonReynolds@gmail.com', '6085311731', '14-06-2001'),
(65, 'Addison Miller', 'Female', 'AddisonMiller@gmail.com', '3399311780', '03-07-1997'),
(66, 'Caleb Harris', 'Male', 'CalebHarris@gmail.com', '8015840322', '29-09-1990'),
(67, 'Aria Young', 'Female', 'AriaYoung@gmail.com', '7438460454', '01-12-2005'),
(68, 'Ethan Turner', 'Male', 'EthanTurner@gmail.com', '1154020598', '05-02-1993'),
(69, 'Scarlett Peterson', 'Female', 'ScarlettPeterson@gmail.com', '5266657970', '20-12-1999'),
(70, 'Owen Parker', 'Male', 'OwenParker@gmail.com', '1654992507', '02-04-1991'),
(71, 'Zoe Phillips', 'Female', 'ZoePhillips@gmail.com', '8628661605', '26-07-2002'),
(72, 'Jack Richardson', 'Male', 'JackRichardson@gmail.com', '7168753276', '15-10-1995'),
(73, 'Avery Martinez', 'Female', 'AveryMartinez@gmail.com', '6745747063', '06-08-1998'),
(74, 'Benjamin Price', 'Male', 'BenjaminPrice@gmail.com', '1623410869', '31-03-2004'),
(75, 'Hannah Simmons', 'Female', 'HannahSimmons@gmail.com', '5258171377', '01-09-1996'),
(76, 'Wyatt Ross', 'Male', 'WyattRoss@gmail.com', '8640025576', '23-08-2000'),
(77, 'Nora Morgan', 'Female', 'NoraMorgan@gmail.com', '2800196316', '05-12-1992'),
(78, 'Gabriel Taylor', 'Male', 'GabrielTaylor@gmail.com', '4957594140', '22-11-1997'),
(79, 'Layla Perry', 'Female', 'LaylaPerry@gmail.com', '7176904861', '08-03-2001'),
(80, 'Grayson Mitchell', 'Male', 'GraysonMitchell@gmail.com', '8915314032', '27-06-1994'),
(81, 'Aurora Bennett', 'Female', 'AuroraBennett@gmail.com', '2646655239', '18-03-1999'),
(82, 'Matthew Carter', 'Male', 'MatthewCarter@gmail.com', '2370076139', '09-08-1993'),
(83, 'Aubrey Foster', 'Female', 'AubreyFoster@gmail.com', '5877668205', '14-02-2002'),
(84, 'David Hall', 'Male', 'DavidHall@gmail.com', '0432989500', '30-12-1995'),
(85, 'Bella Adams', 'Female', 'BellaAdams@gmail.com', '3904350067', '07-11-1991'),
(86, 'John Jenkins', 'Male', 'JohnJenkins@gmail.com', '5321654547', '19-05-2004'),
(87, 'Aaliyah Hill', 'Female', 'AaliyahHill@gmail.com', '3159358353', '25-10-1998'),
(88, 'Connor Nelson', 'Male', 'ConnorNelson@gmail.com', '1198843855', '12-05-1990'),
(89, 'Riley Brooks', 'Female', 'RileyBrooks@gmail.com', '6018142702', '09-01-2003'),
(90, 'Leah Cook', 'Male', 'LeahCook@gmail.com', '3571959254', '04-09-1996'),
(91, 'Luke Johnson', 'Female', 'LukeJohnson@gmail.com', '9453532416', '28-11-2000'),
(92, 'Stella Turner', 'Male', 'StellaTurner@gmail.com', '1477690533', '17-08-1992'),
(93, 'Gabriel Clark', 'Female', 'GabrielClark@gmail.com', '9218577849', '23-01-1994'),
(94, 'Penelope Rogers', 'Male', 'PenelopeRogers@gmail.com', '6013909844', '14-06-2001'),
(95, 'Michael Baker', 'Female', 'MichaelBaker@gmail.com', '5293346336', '03-07-1997'),
(96, 'Sophie Torres', 'Male', 'SophieTorres@gmail.com', '9312924641', '29-09-1990'),
(97, 'Oliver Ward', 'Female', 'OliverWard@gmail.com', '3982387068', '01-12-2005'),
(98, 'Victoria Turner', 'Male', 'VictoriaTurner@gmail.com', '4407027000', '05-02-1993'),
(99, 'Christopher Kelly', 'Female', 'ChristopherKelly@gmail.com', '5073109952', '20-12-1999'),
(100, 'Maya Davis', 'Male', 'MayaDavis@gmail.com', '7520637514', '02-04-1991'),
(101, 'Li Wei', 'Female', 'Li Wei@gmail.com', '3949421581', '26-07-2002'),
(102, 'Zhang Mei', 'Male', 'Zhang Mei@gmail.com', '1572370365', '15-10-1995'),
(103, 'Wang Jun', 'Female', 'Wang Jun@gmail.com', '8350713773', '06-08-1998'),
(104, 'Liu Yan', 'Male', 'Liu Yan@gmail.com', '1655400372', '31-03-2004'),
(105, 'Chen Tao', 'Female', 'Chen Tao@gmail.com', '9451412553', '01-09-1996'),
(106, 'Zhao Ying', 'Male', 'Zhao Ying@gmail.com', '5500011427', '23-08-2000'),
(107, 'Huang Lei', 'Female', 'Huang Lei@gmail.com', '9487610034', '05-12-1992'),
(108, 'Lin Xin', 'Male', 'Lin Xin@gmail.com', '8448562441', '22-11-1997'),
(109, 'Xu Jie', 'Female', 'Xu Jie@gmail.com', '9684620669', '08-03-2001'),
(110, 'Sun Yifan', 'Male', 'Sun Yifan@gmail.com', '1778028083', '27-06-1994'),
(111, 'Guo Hong', 'Female', 'Guo Hong@gmail.com', '3196947816', '18-03-1999'),
(112, 'Yang Hui', 'Male', 'Yang Hui@gmail.com', '4840853970', '09-08-1993'),
(113, 'Xiao Mei', 'Female', 'Xiao Mei@gmail.com', '3441786766', '14-02-2002'),
(114, 'Fang Yuan', 'Male', 'Fang Yuan@gmail.com', '7496784001', '30-12-1995'),
(115, 'He Wei', 'Female', 'He Wei@gmail.com', '4850331813', '07-11-1991'),
(116, 'Cao Yu', 'Male', 'Cao Yu@gmail.com', '8190087003', '19-05-2004'),
(117, 'Lu Fang', 'Female', 'Lu Fang@gmail.com', '9395679178', '25-10-1998'),
(118, 'Xie Cheng', 'Male', 'Xie Cheng@gmail.com', '0726013318', '12-05-1990'),
(119, 'Gao Li', 'Female', 'Gao Li@gmail.com', '7503340616', '09-01-2003'),
(120, 'Jiang Chen', 'Male', 'Jiang Chen@gmail.com', '9471772158', '04-09-1996'),
(121, 'Yuan Ming', 'Female', 'Yuan Ming@gmail.com', '1688750718', '28-11-2000'),
(122, 'Hu Jia', 'Male', 'Hu Jia@gmail.com', '4881464539', '17-08-1992'),
(123, 'Shi Wen', 'Female', 'Shi Wen@gmail.com', '0764512312', '23-01-1994'),
(124, 'Niu Xin', 'Male', 'Niu Xin@gmail.com', '4319905997', '14-06-2001'),
(125, 'Zeng Yi', 'Female', 'Zeng Yi@gmail.com', '0572255173', '03-07-1997'),
(126, 'Pan Hong', 'Male', 'Pan Hong@gmail.com', '8138033002', '29-09-1990'),
(127, 'Liang Wei', 'Female', 'Liang Wei@gmail.com', '2593069452', '01-12-2005'),
(128, 'Deng Lei', 'Male', 'DengLei@gmail.com', '6815675662', '05-02-1993'),
(129, 'Qian Mei', 'Female', 'QianMei@gmail.com', '4645784105', '20-12-1999'),
(130, 'Zhu Jun', 'Male', 'ZhuJun@gmail.com', '6666277763', '02-04-1991'),
(131, 'Wu Li', 'Female', 'WuLi@gmail.com', '1670464778', '26-07-2002'),
(132, 'Cheng Xin', 'Male', 'ChengXin@gmail.com', '9738229727', '15-10-1995'),
(133, 'Tian Hao', 'Female', 'TianHao@gmail.com', '6733203190', '06-08-1998'),
(134, 'Zhou Fang', 'Male', 'ZhouFang@gmail.com', '2948933986', '31-03-2004'),
(135, 'Rong Chen', 'Female', 'RongChen@gmail.com', '6181368868', '01-09-1996'),
(136, 'Wang Jing', 'Male', 'WangJing@gmail.com', '3831306224', '23-08-2000'),
(137, 'Zhang Guo', 'Female', 'ZhangGuo@gmail.com', '3778208578', '18-03-1999'),
(138, 'Li Juan', 'Male', 'LiJuan@gmail.com', '8514390353', '09-08-1993'),
(139, 'Yang Tao', 'Female', 'YangTao@gmail.com', '8148144219', '14-02-2002'),
(140, 'Xu Ming', 'Male', 'XuMing@gmail.com', '6915609771', '30-12-1995'),
(141, 'Li Na', 'Female', 'LiNa@gmail.com', '0020068663', '07-11-1991'),
(142, 'Wang Hao', 'Male', 'WangHao@gmail.com', '3547061025', '19-05-2004'),
(143, 'Chen Ying', 'Female', 'ChenYing@gmail.com', '9406271829', '25-10-1998'),
(144, 'Sun Wei', 'Male', 'Sun Wei@gmail.com', '8104753268', '12-05-1990'),
(145, 'Gu Li', 'Female', 'Gu Li@gmail.com', '3877857146', '09-01-2003'),
(146, 'Jiang Yang', 'Male', 'Jiang Yang@gmail.com', '7129466802', '04-09-1996'),
(147, 'Liu Jing', 'Female', 'Liu Jing@gmail.com', '5144437745', '28-11-2000'),
(148, 'Zhu Lei', 'Male', 'Zhu Lei@gmail.com', '3513595814', '17-08-1992'),
(149, 'Shen Mei', 'Female', 'Shen Mei@gmail.com', '6096046307', '18-03-1999'),
(150, 'Xiao Wang', 'Male', 'Xiao Wang@gmail.com', '9719668368', '09-08-1993'),
(151, 'Zhang Wei', 'Female', 'Zhang Wei@gmail.com', '5368059942', '14-02-2002'),
(152, 'Zhao Yu', 'Male', 'Zhao Yu@gmail.com', '0247575360', '30-12-1995'),
(153, 'Han Xin', 'Female', 'Han Xin@gmail.com', '8539101579', '07-11-1991'),
(154, 'Wang Yuan', 'Male', 'Wang Yuan@gmail.com', '7337369114', '19-05-2004'),
(155, 'Li Peng', 'Female', 'Li Peng@gmail.com', '7421748023', '25-10-1998'),
(156, 'Cheng Hong', 'Male', 'Cheng Hong@gmail.com', '6068351627', '12-05-1990'),
(157, 'Zhao Wei', 'Female', 'Zhao Wei@gmail.com', '2271624333', '09-01-2003'),
(158, 'Zhu Lin', 'Male', 'Zhu Lin@gmail.com', '0711185358', '04-09-1996'),
(159, 'Deng Ming', 'Female', 'Deng Ming@gmail.com', '5571886143', '28-11-2000'),
(160, 'Xu Yan', 'Male', 'Xu Yan@gmail.com', '1622018671', '17-08-1992');

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
(8, 2, 'gphead1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(9, 3, 'gphead2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(10, 4, 'gphead3', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(11, 5, 'gpee1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(12, 6, 'gpee2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(13, 7, 'gpee3', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(15, 8, 'tphead1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(16, 9, 'tphead2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(17, 10, 'tpee1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(18, 11, 'tpee2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(19, 12, 'guest1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(20, 13, 'guest2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(21, 14, 'guest3', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(22, 15, 'guest4', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(23, 16, 'guest5', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(24, 17, 'guest6', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(25, 18, 'guest7', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(26, 19, 'guest8', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(27, 20, 'guest9', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(28, 21, 'guest10', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(29, 22, 'guest11', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(30, 23, 'guest12', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(31, 24, 'guest13', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(32, 25, 'guest14', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(34, 27, 'guest15', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(35, 28, 'guest16', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(36, 29, 'guest17', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(37, 30, 'guest18', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(38, 31, 'guest19', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(39, 32, 'guest20', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(40, 33, 'tphead3', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(41, 34, 'tphead4', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(42, 35, 'tphead5', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(43, 36, 'tphead6', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(44, 37, 'tphead7', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(45, 38, 'tphead8', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(46, 39, 'tphead9', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(47, 40, 'tphead10', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(48, 41, 'tphead11', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(49, 42, 'tphead12', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(50, 43, 'tphead13', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(51, 44, 'tphead14', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(52, 45, 'tphead15', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(53, 46, 'tphead16', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(54, 47, 'tphead17', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(55, 48, 'tphead18', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(56, 49, 'tphead19', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(57, 50, 'tphead20', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(58, 51, 'tphead21', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(59, 52, 'tphead22', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(60, 53, 'tphead23', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(61, 54, 'tphead24', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(62, 55, 'tphead25', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(63, 56, 'tphead26', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(64, 57, 'tphead27', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(65, 58, 'tphead28', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(66, 59, 'tphead29', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(67, 60, 'tphead30', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(68, 61, 'tphead31', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(69, 62, 'tphead32', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(70, 63, 'tphead33', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(71, 64, 'tphead34', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(72, 65, 'tphead35', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(73, 66, 'tphead36', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(74, 67, 'tphead37', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(75, 68, 'tphead38', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(76, 69, 'tphead39', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(77, 70, 'tphead40', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(78, 71, 'tphead41', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(79, 72, 'tphead42', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(80, 73, 'tphead43', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(81, 74, 'tphead44', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(82, 75, 'tphead45', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(83, 76, 'tphead46', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(84, 77, 'tphead47', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(85, 78, 'tphead48', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(86, 79, 'tphead49', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(87, 80, 'tphead50', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(88, 81, 'tphead51', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(89, 82, 'tphead52', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(90, 83, 'tphead53', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(91, 84, 'tphead54', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(92, 85, 'tphead55', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(93, 86, 'tphead56', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(94, 87, 'tphead57', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(95, 88, 'tphead58', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(96, 89, 'tphead59', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(97, 90, 'tphead60', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(98, 91, 'tphead61', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(99, 92, 'tphead62', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(100, 93, 'tphead63', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(101, 94, 'tpee3', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(102, 95, 'tpee4', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(103, 96, 'tpee5', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(104, 97, 'tpee6', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(105, 98, 'tpee7', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(106, 99, 'tpee8', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(107, 100, 'tpee9', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(108, 101, 'tpee10', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(109, 102, 'tpee11', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(110, 103, 'tpee12', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(111, 104, 'tpee13', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(112, 105, 'tpee14', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(113, 106, 'tpee15', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(114, 107, 'tpee16', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(115, 108, 'tpee17', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(116, 109, 'tpee18', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(117, 110, 'tpee19', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(118, 111, 'tpee20', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(119, 112, 'tpee21', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(120, 113, 'tpee22', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(121, 114, 'tpee23', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(122, 115, 'tpee24', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(123, 116, 'tpee25', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(124, 117, 'tpee26', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(125, 118, 'tpee27', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(126, 119, 'tpee28', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(127, 120, 'tpee29', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(128, 121, 'tpee30', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(129, 122, 'tpee31', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(130, 123, 'tpee32', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(131, 124, 'tpee33', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(132, 125, 'tpee34', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(133, 126, 'tpee35', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(134, 127, 'tpee36', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(135, 128, 'tpee37', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(136, 129, 'tpee38', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(137, 130, 'tpee39', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(138, 131, 'tpee40', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(139, 132, 'tpee41', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(140, 133, 'tpee42', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(141, 134, 'tpee43', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(142, 135, 'tpee44', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(143, 136, 'tpee45', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(144, 137, 'tpee46', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(145, 138, 'tpee47', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(146, 139, 'tpee48', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(147, 140, 'tpee49', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(148, 141, 'tpee50', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(149, 142, 'tpee51', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(150, 143, 'tpee52', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(151, 144, 'tpee53', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(152, 145, 'tpee54', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(153, 146, 'tpee55', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(154, 147, 'tpee56', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(155, 148, 'tpee57', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(156, 149, 'tpee58', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(157, 150, 'tpee59', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(158, 151, 'tpee60', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(159, 152, 'tpee61', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(160, 153, 'tpee62', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(161, 154, 'tpee63', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(162, 155, 'tpee64', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5),
(163, 156, 'gphead4', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(164, 157, 'gpee4', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(165, 158, 'tphead64', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(166, 159, 'tphead65', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(167, 160, 'tpee65', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 5);

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
(5, 1, 1),
(6, 1, 2),
(10, 2, 1),
(11, 2, 2),
(7, 1, 3),
(94, 2, 3),
(95, 2, 4),
(96, 2, 5),
(97, 2, 6),
(98, 2, 7),
(99, 2, 8),
(100, 2, 9),
(101, 2, 10),
(102, 2, 11),
(103, 2, 12),
(104, 2, 13),
(105, 2, 14),
(106, 2, 15),
(107, 2, 16),
(108, 2, 17),
(109, 2, 18),
(110, 2, 19),
(111, 2, 20),
(112, 2, 21),
(113, 2, 22),
(114, 2, 23),
(115, 2, 24),
(116, 2, 25),
(117, 2, 26),
(118, 2, 27),
(119, 2, 28),
(120, 2, 29),
(121, 2, 30),
(122, 2, 31),
(123, 2, 32),
(124, 2, 33),
(125, 2, 34),
(126, 2, 35),
(127, 2, 36),
(128, 2, 37),
(129, 2, 38),
(130, 2, 39),
(131, 2, 40),
(132, 2, 41),
(133, 2, 42),
(134, 2, 43),
(135, 2, 44),
(136, 2, 45),
(137, 2, 46),
(138, 2, 47),
(139, 2, 48),
(140, 2, 49),
(141, 2, 50),
(142, 2, 51),
(143, 2, 52),
(144, 2, 53),
(145, 2, 54),
(146, 2, 55),
(147, 2, 56),
(148, 2, 57),
(149, 2, 58),
(150, 2, 59),
(151, 2, 60),
(152, 2, 61),
(153, 2, 62),
(154, 2, 63);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `privileges`
--
ALTER TABLE `privileges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `role_privilege`
--
ALTER TABLE `role_privilege`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `transaction_points`
--
ALTER TABLE `transaction_points`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT cho bảng `user_accounts`
--
ALTER TABLE `user_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
