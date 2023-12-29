-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 29, 2023 lúc 05:22 AM
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
(1, 'An Giang', 'An Giang', 8, 3),
(2, 'Bà Rịa – Vũng Tàu', 'Bà Rịa – Vũng Tàu', 9, 3),
(3, 'Bạc Liêu', 'Bạc Liêu', 33, 3),
(4, 'Bắc Giang', 'Bắc Giang', 34, 1),
(5, 'Bắc Kạn', 'Bắc Kạn', 35, 1),
(6, 'Bắc Ninh', 'Bắc Ninh', 36, 1),
(7, 'Bến Tre', 'Bến Tre', 37, 3),
(8, 'Bình Dương', 'Bình Dương', 38, 3),
(9, 'Bình Định', 'Bình Định', 39, 2),
(10, 'Bình Phước', 'Bình Phước', 40, 3),
(11, 'Bình Thuận', 'Bình Thuận', 41, 2),
(12, 'Cà Mau', 'Cà Mau', 42, 3),
(13, 'Cao Bằng', 'Cao Bằng', 43, 1),
(14, 'Cần Thơ', 'Cần Thơ', 44, 3),
(15, 'Đà Nẵng', 'Đà Nẵng', 45, 2),
(16, 'Đắk Lắk', 'Đắk Lắk', 46, 2),
(17, 'Đắk Nông', 'Đắk Nông', 47, 2),
(18, 'Điện Biên', 'Điện Biên', 48, 1),
(19, 'Đồng Nai', 'Đồng Nai', 49, 3),
(20, 'Đồng Tháp', 'Đồng Tháp', 50, 3),
(21, 'Gia Lai', 'Gia Lai', 51, 2),
(22, 'Hà Giang', 'Hà Giang', 52, 1),
(23, 'Hà Nam', 'Hà Nam', 53, 1),
(24, 'Hà Nội', 'Hà Nội', 54, 1),
(25, 'Hà Tĩnh', 'Hà Tĩnh', 55, 2),
(26, 'Hải Dương', 'Hải Dương', 56, 1),
(27, 'Hải Phòng', 'Hải Phòng', 57, 1),
(28, 'Hậu Giang', 'Hậu Giang', 58, 3),
(29, 'Hòa Bình', 'Hòa Bình', 59, 1),
(30, 'Thành phố Hồ Chí Minh', 'Thành phố Hồ Chí Minh', 60, 3),
(31, 'Hưng Yên', 'Hưng Yên', 61, 1),
(32, 'Khánh Hòa', 'Khánh Hòa', 62, 2),
(33, 'Kiên Giang', 'Kiên Giang', 63, 3),
(34, 'Kon Tum', 'Kon Tum', 64, 2),
(35, 'Lai Châu', 'Lai Châu', 65, 1),
(36, 'Lạng Sơn', 'Lạng Sơn', 66, 1),
(37, 'Lào Cai', 'Lào Cai', 67, 1),
(38, 'Lâm Đồng', 'Lâm Đồng', 68, 2),
(39, 'Long An', 'Long An', 69, 3),
(40, 'Nam Định', 'Nam Định', 70, 1),
(41, 'Nghệ An', 'Nghệ An', 71, 2),
(42, 'Ninh Bình', 'Ninh Bình', 72, 1),
(43, 'Ninh Thuận', 'Ninh Thuận', 73, 2),
(44, 'Phú Thọ', 'Phú Thọ', 74, 1),
(45, 'Phú Yên', 'Phú Yên', 75, 2),
(46, 'Quảng Bình', 'Quảng Bình', 76, 2),
(47, 'Quảng Nam', 'Quảng Nam', 77, 2),
(48, 'Quảng Ngãi', 'Quảng Ngãi', 78, 2),
(49, 'Quảng Ninh', 'Quảng Ninh', 79, 1),
(50, 'Quảng Trị', 'Quảng Trị', 80, 2),
(51, 'Sóc Trăng', 'Sóc Trăng', 81, 3),
(52, 'Sơn La', 'Sơn La', 82, 1),
(53, 'Tây Ninh', 'Tây Ninh', 83, 3),
(54, 'Thái Bình', 'Thái Bình', 84, 1),
(55, 'Thái Nguyên', 'Thái Nguyên', 85, 1),
(56, 'Thanh Hóa', 'Thanh Hóa', 86, 2),
(57, 'Thừa Thiên Huế', 'Thừa Thiên Huế', 87, 2),
(58, 'Tiền Giang', 'Tiền Giang', 88, 3),
(59, 'Trà Vinh', 'Trà Vinh', 89, 3),
(60, 'Tuyên Quang', 'Tuyên Quang', 90, 1),
(61, 'Vĩnh Long', 'Vĩnh Long', 91, 3),
(62, 'Vĩnh Phúc', 'Vĩnh Phúc', 92, 1),
(63, 'Yên Bái', 'Yên Bái', 93, 1);

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
(20, 'Thao', 'Nữ', 'Thao@gmail.com', '5077237733', '29-09-1990'),
(21, 'Ngoc', 'Nữ', 'Ngoc@gmail.com', '5043384555', '01-12-2005'),
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
(32, 'Minh', 'Nam', 'Minh@gmail.com', '9163829423', '08-03-2001'),
(33, 'Alice Johnson', 'Nữ', 'AliceJohnson@gmail.com', '5477131796', '23-10-1999'),
(34, 'Daniel Smith', 'Nam', 'DanielSmith@gmail.com', '7965485527', '16-04-2003'),
(35, 'Sophia Rodriguez', 'Nữ', 'SophiaRodriguez@gmail.com', '3996549975', '07-03-2002'),
(36, 'Liam Williams', 'Nam', 'LiamWilliams@gmail.com', '6577128951', '29-09-1998'),
(37, 'Isabella Brown', 'Nữ', 'IsabellaBrown@gmail.com', '6503895894', '01-12-1992'),
(38, 'Ethan Martinez', 'Nam', 'EthanMartinez@gmail.com', '6284266435', '02-05-1993'),
(39, 'Olivia Davis', 'Nữ', 'OliviaDavis@gmail.com', '6678116673', '12-02-1999'),
(40, 'Mason Taylor', 'Nam', 'MasonTaylor@gmail.com', '2172962200', '04-02-2003'),
(41, 'Emma Anderson', 'Nữ', 'EmmaAnderson@gmail.com', '9768405121', '26-07-2002'),
(42, 'Aiden Campbell', 'Nam', 'AidenCampbell@gmail.com', '4000921284', '15-10-1995'),
(43, 'Mia Turner', 'Nữ', 'MiaTurner@gmail.com', '5196857650', '06-08-1998'),
(44, 'Caleb Mitchell', 'Nam', 'CalebMitchell@gmail.com', '7795513739', '31-03-2004'),
(45, 'Ava Walker', 'Nữ', 'AvaWalker@gmail.com', '0682026687', '01-09-1996'),
(46, 'Logan Nelson', 'Nam', 'LoganNelson@gmail.com', '8767685739', '23-08-2000'),
(47, 'Sophia White', 'Nữ', 'SophiaWhite@gmail.com', '4103145475', '05-12-1992'),
(48, 'Lucas Robinson', 'Nam', 'LucasRobinson@gmail.com', '0034507413', '22-11-1997'),
(49, 'Isabella Reed', 'Nữ', 'IsabellaReed@gmail.com', '6439000834', '08-03-2001'),
(50, 'Jackson Cooper', 'Nam', 'JacksonCooper@gmail.com', '8050036255', '27-06-1994'),
(51, 'Olivia Bell', 'Nữ', 'OliviaBell@gmail.com', '6028334468', '18-03-1999'),
(52, 'Elijah Ward', 'Nam', 'ElijahWard@gmail.com', '5314217344', '09-08-1993'),
(53, 'Amelia Fisher', 'Nữ', 'AmeliaFisher@gmail.com', '7875720982', '14-02-2002'),
(54, 'Daniel Hayes', 'Nam', 'DanielHayes@gmail.com', '7201656953', '30-12-1995'),
(55, 'Harper Griffin', 'Nữ', 'HarperGriffin@gmail.com', '6474537131', '07-11-1991'),
(56, 'Liam Stewart', 'Nam', 'LiamStewart@gmail.com', '1759800534', '19-05-2004'),
(57, 'Grace Murphy', 'Nữ', 'GraceMurphy@gmail.com', '3126041738', '25-10-1998'),
(58, 'Mason Perry', 'Nam', 'MasonPerry@gmail.com', '6932706034', '12-05-1990'),
(59, 'Chloe Bryant', 'Nữ', 'ChloeBryant@gmail.com', '2718091945', '09-01-2003'),
(60, 'Noah Foster', 'Nam', 'NoahFoster@gmail.com', '7793823387', '04-09-1996'),
(61, 'Ella Jenkins', 'Nữ', 'EllaJenkins@gmail.com', '2961858090', '28-11-2000'),
(62, 'Carter Cox', 'Nam', 'CarterCox@gmail.com', '7687823220', '17-08-1992'),
(63, 'Lily Wright', 'Nữ', 'LilyWright@gmail.com', '7234224388', '23-01-1994'),
(64, 'Landon Reynolds', 'Nam', 'LandonReynolds@gmail.com', '6085311731', '14-06-2001'),
(65, 'Addison Miller', 'Nữ', 'AddisonMiller@gmail.com', '3399311780', '03-07-1997'),
(66, 'Caleb Harris', 'Nam', 'CalebHarris@gmail.com', '8015840322', '29-09-1990'),
(67, 'Aria Young', 'Nữ', 'AriaYoung@gmail.com', '7438460454', '01-12-2005'),
(68, 'Ethan Turner', 'Nam', 'EthanTurner@gmail.com', '1154020598', '05-02-1993'),
(69, 'Scarlett Peterson', 'Nữ', 'ScarlettPeterson@gmail.com', '5266657970', '20-12-1999'),
(70, 'Owen Parker', 'Nam', 'OwenParker@gmail.com', '1654992507', '02-04-1991'),
(71, 'Zoe Phillips', 'Nữ', 'ZoePhillips@gmail.com', '8628661605', '26-07-2002'),
(72, 'Jack Richardson', 'Nam', 'JackRichardson@gmail.com', '7168753276', '15-10-1995'),
(73, 'Avery Martinez', 'Nữ', 'AveryMartinez@gmail.com', '6745747063', '06-08-1998'),
(74, 'Benjamin Price', 'Nam', 'BenjaminPrice@gmail.com', '1623410869', '31-03-2004'),
(75, 'Hannah Simmons', 'Nữ', 'HannahSimmons@gmail.com', '5258171377', '01-09-1996'),
(76, 'Wyatt Ross', 'Nam', 'WyattRoss@gmail.com', '8640025576', '23-08-2000'),
(77, 'Nora Morgan', 'Nữ', 'NoraMorgan@gmail.com', '2800196316', '05-12-1992'),
(78, 'Gabriel Taylor', 'Nam', 'GabrielTaylor@gmail.com', '4957594140', '22-11-1997'),
(79, 'Layla Perry', 'Nữ', 'LaylaPerry@gmail.com', '7176904861', '08-03-2001'),
(80, 'Grayson Mitchell', 'Nam', 'GraysonMitchell@gmail.com', '8915314032', '27-06-1994'),
(81, 'Aurora Bennett', 'Nữ', 'AuroraBennett@gmail.com', '2646655239', '18-03-1999'),
(82, 'Matthew Carter', 'Nam', 'MatthewCarter@gmail.com', '2370076139', '09-08-1993'),
(83, 'Aubrey Foster', 'Nữ', 'AubreyFoster@gmail.com', '5877668205', '14-02-2002'),
(84, 'David Hall', 'Nam', 'DavidHall@gmail.com', '0432989500', '30-12-1995'),
(85, 'Bella Adams', 'Nữ', 'BellaAdams@gmail.com', '3904350067', '07-11-1991'),
(86, 'John Jenkins', 'Nam', 'JohnJenkins@gmail.com', '5321654547', '19-05-2004'),
(87, 'Aaliyah Hill', 'Nữ', 'AaliyahHill@gmail.com', '3159358353', '25-10-1998'),
(88, 'Connor Nelson', 'Nam', 'ConnorNelson@gmail.com', '1198843855', '12-05-1990'),
(89, 'Riley Brooks', 'Nữ', 'RileyBrooks@gmail.com', '6018142702', '09-01-2003'),
(90, 'Leah Cook', 'Nam', 'LeahCook@gmail.com', '3571959254', '04-09-1996'),
(91, 'Luke Johnson', 'Nữ', 'LukeJohnson@gmail.com', '9453532416', '28-11-2000'),
(92, 'Stella Turner', 'Nam', 'StellaTurner@gmail.com', '1477690533', '17-08-1992'),
(93, 'Gabriel Clark', 'Nữ', 'GabrielClark@gmail.com', '9218577849', '23-01-1994'),
(94, 'Penelope Rogers', 'Nam', 'PenelopeRogers@gmail.com', '6013909844', '14-06-2001'),
(95, 'Michael Baker', 'Nữ', 'MichaelBaker@gmail.com', '5293346336', '03-07-1997'),
(96, 'Sophie Torres', 'Nam', 'SophieTorres@gmail.com', '9312924641', '29-09-1990'),
(97, 'Oliver Ward', 'Nữ', 'OliverWard@gmail.com', '3982387068', '01-12-2005'),
(98, 'Victoria Turner', 'Nam', 'VictoriaTurner@gmail.com', '4407027000', '05-02-1993'),
(99, 'Christopher Kelly', 'Nữ', 'ChristopherKelly@gmail.com', '5073109952', '20-12-1999'),
(100, 'Maya Davis', 'Nam', 'MayaDavis@gmail.com', '7520637514', '02-04-1991'),
(101, 'Li Wei', 'Nữ', 'Li Wei@gmail.com', '3949421581', '26-07-2002'),
(102, 'Zhang Mei', 'Nam', 'Zhang Mei@gmail.com', '1572370365', '15-10-1995'),
(103, 'Wang Jun', 'Nữ', 'Wang Jun@gmail.com', '8350713773', '06-08-1998'),
(104, 'Liu Yan', 'Nam', 'Liu Yan@gmail.com', '1655400372', '31-03-2004'),
(105, 'Chen Tao', 'Nữ', 'Chen Tao@gmail.com', '9451412553', '01-09-1996'),
(106, 'Zhao Ying', 'Nam', 'Zhao Ying@gmail.com', '5500011427', '23-08-2000'),
(107, 'Huang Lei', 'Nữ', 'Huang Lei@gmail.com', '9487610034', '05-12-1992'),
(108, 'Lin Xin', 'Nam', 'Lin Xin@gmail.com', '8448562441', '22-11-1997'),
(109, 'Xu Jie', 'Nữ', 'Xu Jie@gmail.com', '9684620669', '08-03-2001'),
(110, 'Sun Yifan', 'Nam', 'Sun Yifan@gmail.com', '1778028083', '27-06-1994'),
(111, 'Guo Hong', 'Nữ', 'Guo Hong@gmail.com', '3196947816', '18-03-1999'),
(112, 'Yang Hui', 'Nam', 'Yang Hui@gmail.com', '4840853970', '09-08-1993'),
(113, 'Xiao Mei', 'Nữ', 'Xiao Mei@gmail.com', '3441786766', '14-02-2002'),
(114, 'Fang Yuan', 'Nam', 'Fang Yuan@gmail.com', '7496784001', '30-12-1995'),
(115, 'He Wei', 'Nữ', 'He Wei@gmail.com', '4850331813', '07-11-1991'),
(116, 'Cao Yu', 'Nam', 'Cao Yu@gmail.com', '8190087003', '19-05-2004'),
(117, 'Lu Fang', 'Nữ', 'Lu Fang@gmail.com', '9395679178', '25-10-1998'),
(118, 'Xie Cheng', 'Nam', 'Xie Cheng@gmail.com', '0726013318', '12-05-1990'),
(119, 'Gao Li', 'Nữ', 'Gao Li@gmail.com', '7503340616', '09-01-2003'),
(120, 'Jiang Chen', 'Nam', 'Jiang Chen@gmail.com', '9471772158', '04-09-1996'),
(121, 'Yuan Ming', 'Nữ', 'Yuan Ming@gmail.com', '1688750718', '28-11-2000'),
(122, 'Hu Jia', 'Nam', 'Hu Jia@gmail.com', '4881464539', '17-08-1992'),
(123, 'Shi Wen', 'Nữ', 'Shi Wen@gmail.com', '0764512312', '23-01-1994'),
(124, 'Niu Xin', 'Nam', 'Niu Xin@gmail.com', '4319905997', '14-06-2001'),
(125, 'Zeng Yi', 'Nữ', 'Zeng Yi@gmail.com', '0572255173', '03-07-1997'),
(126, 'Pan Hong', 'Nam', 'Pan Hong@gmail.com', '8138033002', '29-09-1990'),
(127, 'Liang Wei', 'Nữ', 'Liang Wei@gmail.com', '2593069452', '01-12-2005'),
(128, 'Deng Lei', 'Nam', 'DengLei@gmail.com', '6815675662', '05-02-1993'),
(129, 'Qian Mei', 'Nữ', 'QianMei@gmail.com', '4645784105', '20-12-1999'),
(130, 'Zhu Jun', 'Nam', 'ZhuJun@gmail.com', '6666277763', '02-04-1991'),
(131, 'Wu Li', 'Nữ', 'WuLi@gmail.com', '1670464778', '26-07-2002'),
(132, 'Cheng Xin', 'Nam', 'ChengXin@gmail.com', '9738229727', '15-10-1995'),
(133, 'Tian Hao', 'Nữ', 'TianHao@gmail.com', '6733203190', '06-08-1998'),
(134, 'Zhou Fang', 'Nam', 'ZhouFang@gmail.com', '2948933986', '31-03-2004'),
(135, 'Rong Chen', 'Nữ', 'RongChen@gmail.com', '6181368868', '01-09-1996'),
(136, 'Wang Jing', 'Nam', 'WangJing@gmail.com', '3831306224', '23-08-2000'),
(137, 'Zhang Guo', 'Nữ', 'ZhangGuo@gmail.com', '3778208578', '18-03-1999'),
(138, 'Li Juan', 'Nam', 'LiJuan@gmail.com', '8514390353', '09-08-1993'),
(139, 'Yang Tao', 'Nữ', 'YangTao@gmail.com', '8148144219', '14-02-2002'),
(140, 'Xu Ming', 'Nam', 'XuMing@gmail.com', '6915609771', '30-12-1995'),
(141, 'Li Na', 'Nữ', 'LiNa@gmail.com', '0020068663', '07-11-1991'),
(142, 'Wang Hao', 'Nam', 'WangHao@gmail.com', '3547061025', '19-05-2004'),
(143, 'Chen Ying', 'Nữ', 'ChenYing@gmail.com', '9406271829', '25-10-1998'),
(144, 'Sun Wei', 'Nam', 'Sun Wei@gmail.com', '8104753268', '12-05-1990'),
(145, 'Gu Li', 'Nữ', 'Gu Li@gmail.com', '3877857146', '09-01-2003'),
(146, 'Jiang Yang', 'Nam', 'Jiang Yang@gmail.com', '7129466802', '04-09-1996'),
(147, 'Liu Jing', 'Nữ', 'Liu Jing@gmail.com', '5144437745', '28-11-2000'),
(148, 'Zhu Lei', 'Nam', 'Zhu Lei@gmail.com', '3513595814', '17-08-1992'),
(149, 'Shen Mei', 'Nữ', 'Shen Mei@gmail.com', '6096046307', '18-03-1999'),
(150, 'Xiao Wang', 'Nam', 'Xiao Wang@gmail.com', '9719668368', '09-08-1993'),
(151, 'Zhang Wei', 'Nữ', 'Zhang Wei@gmail.com', '5368059942', '14-02-2002'),
(152, 'Zhao Yu', 'Nam', 'Zhao Yu@gmail.com', '0247575360', '30-12-1995'),
(153, 'Han Xin', 'Nữ', 'Han Xin@gmail.com', '8539101579', '07-11-1991'),
(154, 'Wang Yuan', 'Nam', 'Wang Yuan@gmail.com', '7337369114', '19-05-2004'),
(155, 'Li Peng', 'Nữ', 'Li Peng@gmail.com', '7421748023', '25-10-1998'),
(156, 'Cheng Hong', 'Nam', 'Cheng Hong@gmail.com', '6068351627', '12-05-1990'),
(157, 'Zhao Wei', 'Nữ', 'Zhao Wei@gmail.com', '2271624333', '09-01-2003'),
(158, 'Zhu Lin', 'Nam', 'Zhu Lin@gmail.com', '0711185358', '04-09-1996'),
(159, 'Deng Ming', 'Nữ', 'Deng Ming@gmail.com', '5571886143', '28-11-2000'),
(160, 'Xu Yan', 'Nam', 'Xu Yan@gmail.com', '1622018671', '17-08-1992');

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
(9, 7, 'gphead3', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(10, 2, 'gpee3', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(11, 3, 'gphead1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(12, 4, 'gphead2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 2),
(13, 5, 'gpee1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(14, 6, 'gpee2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 3),
(15, 8, 'tphead1', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
(16, 9, 'tphead2', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 4),
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
(39, 32, 'test32', '$2a$10$2pZEjV6A3rOIU8h.rU2zTe/eAR/wOIGM6vLkj28YNMj4ANqhipaqW', 6),
(40, 33, 'tphead3', '123456', 4),
(41, 34, 'tphead4', '123456', 4),
(42, 35, 'tphead5', '123456', 4),
(43, 36, 'tphead6', '123456', 4),
(44, 37, 'tphead7', '123456', 4),
(45, 38, 'tphead8', '123456', 4),
(46, 39, 'tphead9', '123456', 4),
(47, 40, 'tphead10', '123456', 4),
(48, 41, 'tphead11', '123456', 4),
(49, 42, 'tphead12', '123456', 4),
(50, 43, 'tphead13', '123456', 4),
(51, 44, 'tphead14', '123456', 4),
(52, 45, 'tphead15', '123456', 4),
(53, 46, 'tphead16', '123456', 4),
(54, 47, 'tphead17', '123456', 4),
(55, 48, 'tphead18', '123456', 4),
(56, 49, 'tphead19', '123456', 4),
(57, 50, 'tphead20', '123456', 4),
(58, 51, 'tphead21', '123456', 4),
(59, 52, 'tphead22', '123456', 4),
(60, 53, 'tphead23', '123456', 4),
(61, 54, 'tphead24', '123456', 4),
(62, 55, 'tphead25', '123456', 4),
(63, 56, 'tphead26', '123456', 4),
(64, 57, 'tphead27', '123456', 4),
(65, 58, 'tphead28', '123456', 4),
(66, 59, 'tphead29', '123456', 4),
(67, 60, 'tphead30', '123456', 4),
(68, 61, 'tphead31', '123456', 4),
(69, 62, 'tphead32', '123456', 4),
(70, 63, 'tphead33', '123456', 4),
(71, 64, 'tphead34', '123456', 4),
(72, 65, 'tphead35', '123456', 4),
(73, 66, 'tphead36', '123456', 4),
(74, 67, 'tphead37', '123456', 4),
(75, 68, 'tphead38', '123456', 4),
(76, 69, 'tphead39', '123456', 4),
(77, 70, 'tphead40', '123456', 4),
(78, 71, 'tphead41', '123456', 4),
(79, 72, 'tphead42', '123456', 4),
(80, 73, 'tphead43', '123456', 4),
(81, 74, 'tphead44', '123456', 4),
(82, 75, 'tphead45', '123456', 4),
(83, 76, 'tphead46', '123456', 4),
(84, 77, 'tphead47', '123456', 4),
(85, 78, 'tphead48', '123456', 4),
(86, 79, 'tphead49', '123456', 4),
(87, 80, 'tphead50', '123456', 4),
(88, 81, 'tphead51', '123456', 4),
(89, 82, 'tphead52', '123456', 4),
(90, 83, 'tphead53', '123456', 4),
(91, 84, 'tphead54', '123456', 4),
(92, 85, 'tphead55', '123456', 4),
(93, 86, 'tphead56', '123456', 4),
(94, 87, 'tphead57', '123456', 4),
(95, 88, 'tphead58', '123456', 4),
(96, 89, 'tphead59', '123456', 4),
(97, 90, 'tphead60', '123456', 4),
(98, 91, 'tphead61', '123456', 4),
(99, 92, 'tphead62', '123456', 4),
(100, 93, 'tphead63', '123456', 4),
(101, 94, 'tpee3', '123456', 5),
(102, 95, 'tpee4', '123456', 5),
(103, 96, 'tpee5', '123456', 5),
(104, 97, 'tpee6', '123456', 5),
(105, 98, 'tpee7', '123456', 5),
(106, 99, 'tpee8', '123456', 5),
(107, 100, 'tpee9', '123456', 5),
(108, 101, 'tpee10', '123456', 5),
(109, 102, 'tpee11', '123456', 5),
(110, 103, 'tpee12', '123456', 5),
(111, 104, 'tpee13', '123456', 5),
(112, 105, 'tpee14', '123456', 5),
(113, 106, 'tpee15', '123456', 5),
(114, 107, 'tpee16', '123456', 5),
(115, 108, 'tpee17', '123456', 5),
(116, 109, 'tpee18', '123456', 5),
(117, 110, 'tpee19', '123456', 5),
(118, 111, 'tpee20', '123456', 5),
(119, 112, 'tpee21', '123456', 5),
(120, 113, 'tpee22', '123456', 5),
(121, 114, 'tpee23', '123456', 5),
(122, 115, 'tpee24', '123456', 5),
(123, 116, 'tpee25', '123456', 5),
(124, 117, 'tpee26', '123456', 5),
(125, 118, 'tpee27', '123456', 5),
(126, 119, 'tpee28', '123456', 5),
(127, 120, 'tpee29', '123456', 5),
(128, 121, 'tpee30', '123456', 5),
(129, 122, 'tpee31', '123456', 5),
(130, 123, 'tpee32', '123456', 5),
(131, 124, 'tpee33', '123456', 5),
(132, 125, 'tpee34', '123456', 5),
(133, 126, 'tpee35', '123456', 5),
(134, 127, 'tpee36', '123456', 5),
(135, 128, 'tpee37', '123456', 5),
(136, 129, 'tpee38', '123456', 5),
(137, 130, 'tpee39', '123456', 5),
(138, 131, 'tpee40', '123456', 5),
(139, 132, 'tpee41', '123456', 5),
(140, 133, 'tpee42', '123456', 5),
(141, 134, 'tpee43', '123456', 5),
(142, 135, 'tpee44', '123456', 5),
(143, 136, 'tpee45', '123456', 5),
(144, 137, 'tpee46', '123456', 5),
(145, 138, 'tpee47', '123456', 5),
(146, 139, 'tpee48', '123456', 5),
(147, 140, 'tpee49', '123456', 5),
(148, 141, 'tpee50', '123456', 5),
(149, 142, 'tpee51', '123456', 5),
(150, 143, 'tpee52', '123456', 5),
(151, 144, 'tpee53', '123456', 5),
(152, 145, 'tpee54', '123456', 5),
(153, 146, 'tpee55', '123456', 5),
(154, 147, 'tpee56', '123456', 5),
(155, 148, 'tpee57', '123456', 5),
(156, 149, 'tpee58', '123456', 5),
(157, 150, 'tpee59', '123456', 5),
(158, 151, 'tpee60', '123456', 5),
(159, 152, 'tpee61', '123456', 5),
(160, 153, 'tpee62', '123456', 5),
(161, 154, 'tpee63', '123456', 5),
(162, 155, 'tpee64', '123456', 5),
(163, 156, 'gphead4', '123456', 2),
(164, 157, 'gpee4', '123456', 3),
(165, 158, 'tphead64', '123456', 4),
(166, 159, 'tphead65', '123456', 4),
(167, 160, 'tpee64', '123456', 5);

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
(2, 1, 3),
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
