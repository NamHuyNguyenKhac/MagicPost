-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 23, 2023 lúc 10:35 AM
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
-- Cơ sở dữ liệu: `demo`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer_account`
--

CREATE TABLE `customer_account` (
  `ID` int(11) NOT NULL,
  `Username` text NOT NULL,
  `Password` text NOT NULL,
  `Email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Bảng lưu trữ thông tin đăng nhập của khách hàng';

--
-- Đang đổ dữ liệu cho bảng `customer_account`
--

INSERT INTO `customer_account` (`ID`, `Username`, `Password`, `Email`) VALUES
(1, 'Guest', '123456', 'guest1@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer_info`
--

CREATE TABLE `customer_info` (
  `ID` int(11) NOT NULL,
  `Account_ID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `DOB` date NOT NULL,
  `Address` text NOT NULL,
  `Phone Number` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customer_info`
--

INSERT INTO `customer_info` (`ID`, `Account_ID`, `Name`, `DOB`, `Address`, `Phone Number`) VALUES
(1, 0, 'Trần Văn Gúet', '0000-00-00', 'Xuân Thủy Cầu Giấy HN', '32164897');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `employee`
--

CREATE TABLE `employee` (
  `EmployeeID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `DOB` date NOT NULL,
  `SĐT` text NOT NULL,
  `employee_username` text NOT NULL,
  `employee_password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gathering_point`
--

CREATE TABLE `gathering_point` (
  `ID_Diem_tap_ket` int(11) NOT NULL,
  `Tên điểm` text NOT NULL,
  `Địa chỉ` text NOT NULL,
  `SĐT` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `gathering_point`
--

INSERT INTO `gathering_point` (`ID_Diem_tap_ket`, `Tên điểm`, `Địa chỉ`, `SĐT`) VALUES
(1, 'Chi nhánh Hà Nội', 'TP Hà Nội', '0123456789');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gathering_point_employee`
--

CREATE TABLE `gathering_point_employee` (
  `ID_Diem_tap_ket` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `Chức vụ` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `parcels`
--

CREATE TABLE `parcels` (
  `parcel_id` int(11) NOT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `recipient_id` int(11) DEFAULT NULL,
  `weight` decimal(5,2) NOT NULL,
  `shipping_date` date NOT NULL,
  `delivery_status` enum('Pending','In Transit','Delivered') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transaction_point`
--

CREATE TABLE `transaction_point` (
  `ID_Diem_giao_dich` int(11) NOT NULL,
  `Tên điểm` text NOT NULL,
  `Địa chỉ` text NOT NULL,
  `SĐT` text NOT NULL,
  `ID Gathering Point` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `transaction_point`
--

INSERT INTO `transaction_point` (`ID_Diem_giao_dich`, `Tên điểm`, `Địa chỉ`, `SĐT`, `ID Gathering Point`) VALUES
(1, 'Cầu Giấy', 'Xuân Thủy Cầu Giấy HN', '0123456789', 1),
(2, 'Nam Từ Liêm', 'Nam Từ Liên HN', '0321654987', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transaction_point_employee`
--

CREATE TABLE `transaction_point_employee` (
  `ID_Diem_giao_dich` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `Chức vụ` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer_account`
--
ALTER TABLE `customer_account`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Restrict_username` (`Username`) USING HASH;

--
-- Chỉ mục cho bảng `customer_info`
--
ALTER TABLE `customer_info`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Account_ID` (`Account_ID`) USING BTREE;

--
-- Chỉ mục cho bảng `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmployeeID`),
  ADD UNIQUE KEY `Unique` (`employee_username`) USING HASH;

--
-- Chỉ mục cho bảng `gathering_point`
--
ALTER TABLE `gathering_point`
  ADD PRIMARY KEY (`ID_Diem_tap_ket`);

--
-- Chỉ mục cho bảng `gathering_point_employee`
--
ALTER TABLE `gathering_point_employee`
  ADD UNIQUE KEY `Unique` (`ID_Diem_tap_ket`,`EmployeeID`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Chỉ mục cho bảng `parcels`
--
ALTER TABLE `parcels`
  ADD PRIMARY KEY (`parcel_id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `recipient_id` (`recipient_id`);

--
-- Chỉ mục cho bảng `transaction_point`
--
ALTER TABLE `transaction_point`
  ADD PRIMARY KEY (`ID_Diem_giao_dich`),
  ADD KEY `ID Điểm tập kết liên kết` (`ID Gathering Point`);

--
-- Chỉ mục cho bảng `transaction_point_employee`
--
ALTER TABLE `transaction_point_employee`
  ADD UNIQUE KEY `Unique` (`ID_Diem_giao_dich`,`EmployeeID`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer_account`
--
ALTER TABLE `customer_account`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `employee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `gathering_point`
--
ALTER TABLE `gathering_point`
  MODIFY `ID_Diem_tap_ket` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `parcels`
--
ALTER TABLE `parcels`
  MODIFY `parcel_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `transaction_point`
--
ALTER TABLE `transaction_point`
  MODIFY `ID_Diem_giao_dich` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `gathering_point_employee`
--
ALTER TABLE `gathering_point_employee`
  ADD CONSTRAINT `gathering_point_employee_ibfk_1` FOREIGN KEY (`ID_Diem_tap_ket`) REFERENCES `gathering_point` (`ID_Diem_tap_ket`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gathering_point_employee_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `parcels`
--
ALTER TABLE `parcels`
  ADD CONSTRAINT `parcels_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `customer_account` (`ID`),
  ADD CONSTRAINT `parcels_ibfk_2` FOREIGN KEY (`recipient_id`) REFERENCES `customer_account` (`ID`);

--
-- Các ràng buộc cho bảng `transaction_point`
--
ALTER TABLE `transaction_point`
  ADD CONSTRAINT `transaction_point_ibfk_1` FOREIGN KEY (`ID Gathering Point`) REFERENCES `gathering_point` (`ID_Diem_tap_ket`);

--
-- Các ràng buộc cho bảng `transaction_point_employee`
--
ALTER TABLE `transaction_point_employee`
  ADD CONSTRAINT `transaction_point_employee_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_point_employee_ibfk_2` FOREIGN KEY (`ID_Diem_giao_dich`) REFERENCES `transaction_point` (`ID_Diem_giao_dich`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
