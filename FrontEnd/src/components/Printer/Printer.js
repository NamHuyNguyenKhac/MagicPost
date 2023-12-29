import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faHouse,
  faMagnifyingGlass,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Printer.css";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Printer() {
  return (
    <div className="allPrinterCointaner">
      <div className="labelWrapper">
        <div className="labelLeft">MAGIC POST</div>

        <div className="labelRight">
          <div className="labelImageWrapper">
            <img
              src={require("../../assets/qrcode.webp")}
              className="labelImage"
            ></img>
          </div>
        </div>
      </div>

      <div className="bodyWrapper">
        <div className="leftbodyWrapper">
          <div className="topL1bodyWrapper">
            <div className="topL1body1Wrapper">
              1. Họ tên địa chỉ người gửi:
            </div>

            <div className="topL1body2Wrapper">Phamj Hong minh</div>

            <div className="topL1body3Wrapper">
              So 5 hoang trung 23 phu tho thanh pho da buo
            </div>

            <div className="topL1body4Wrapper">
              <text className="boldT">Điện thoại:</text>
              <text>088812309</text>
            </div>

            <div className="topL1body5Wrapper">
              <text className="boldT">Mã khách hàng:</text>

              <text>09312312313</text>

              <text className="boldT2">Mã Bưu chính:</text>

              <text className="boldT2s">09301231827</text>
            </div>
          </div>

          <div className="topL2bodyWrapper">
            <div className="topL2body1Wrapper">
              <div className="topL2body11Wrapper boldT">3.Loại hàng gửi</div>

              <div className="topL2body12Wrapper boldT">
                <div className="topL2body121Wrapper"></div>

                <div className="topL2body122Wrapper">Tài liệu</div>

                <div className="topL2body123Wrapper"></div>

                <div className="topL2body124Wrapper">Hàng hóa</div>
              </div>

              <div className="topL2body13Wrapper boldT">
                4. Nội dung giá trị bưu gửi:
              </div>

              <div className="topL3body2Wrapper"></div>
            </div>

            <div className="topL2body2Wrapper">
              <div className="topL2body21Wrapper">
                <div className="topL2body21topWrapper">Nội dung</div>

                <div className="topL2body21botWrapper">Tổng</div>
              </div>

              <div className="topL2body22Wrapper">
                <div className="topL2body22topWrapper">Số lượng</div>

                <div className="topL2body22botWrapper"></div>
              </div>

              <div className="topL2body23Wrapper">
                <div className="topL2body23topWrapper">Trị giá</div>

                <div className="topL2body23botWrapper"></div>
              </div>

              <div className="topL2body24Wrapper">
                <div className="topL2body24topWrapper">Giấy tờ đính kèm</div>

                <div className="topL2body24botWrapper"></div>
              </div>
            </div>
          </div>

          <div className="topL3bodyWrapper">
            <div className="topL3body1Wrapper boldT">
              5. Dịch vụ đặc biệt/Cộng thêm:
            </div>

            <div className="topL3body2Wrapper">
              ...............................................................................................................................................
            </div>

            <div className="topL3body2Wrapper">
              ...............................................................................................................................................
            </div>
          </div>

          <div className="topL4bodyWrapper">
            <div className="topL4body1Wrapper boldT">
              6. Chỉ dẫn của người gửi khi không phát được bưu gửi:
            </div>

            <div className="topL4body2Wrapper">
              <div className="topL4body21Wrapper"></div>

              <div className="topL4body22Wrapper">Chuyển hoàn ngay</div>

              <div className="topL4body23Wrapper"></div>

              <div className="topL4body24Wrapper">
                Gọi điện cho người gửi/BC gửi
              </div>

              <div className="topL4body25Wrapper"></div>

              <div className="topL4body26Wrapper">Hủy</div>
            </div>

            <div className="topL4body3Wrapper">
              <div className="topL4body31Wrapper"></div>

              <div className="topL4body32Wrapper">Chuyển hoàn trước ngày</div>

              <div className="topL4body33Wrapper"></div>

              <div className="topL4body34Wrapper">
                Chuyển hoàn trước khi hết thời gian lưu chữ
              </div>
            </div>
          </div>

          <div className="topL5bodyWrapper">
            <div className="topL5body1Wrapper boldT">
              7. Cam kết của người gửi:
            </div>

            <div className="topL5body2Wrapper boldT">
              Tôi chấp nhận các điều khoản tại mặt sau phiếu gửi và cam đoan bưu
              gửi này không chứa những mặt hàng nguy hiểm, cấm gửi. Trường hợp
              không phát được hãy thực hiện chỉ dẫn tại mục 6, tôi sẽ trả cước
              chuyển hoàn.
            </div>

            <div className="topL5body3Wrapper boldT">
              <text>8. Ngày giờ gửi:</text>

              <text>Chữ ký người gửi</text>
            </div>

            <div className="topL5body4Wrapper">07h55 12/12/2023</div>
          </div>
        </div>

        <div className="rightbodyWrapper">
          <div className="topR1bodyWrapper">
            <div className="topR1body1Wrapper boldT">
              2. Họ tên địa chỉ người nhận:
            </div>

            <div className="topR1body2Wrapper">Đào Vũ Minh Khánh</div>

            <div className="topR1body3Wrapper">
              237 Hàn Thuyên, thành phố Nam Định, tỉnh Nam Định
            </div>

            <div className="topR1body4Wrapper boldT">Mã ĐH:</div>

            <div className="topR1body5Wrapper">
              <text className="boldT" style={{ width: "200px" }}>
                Phone:
              </text>

              <text className="boldT" style={{ marginRight: "100px" }}>
                09888120933
              </text>

              <text className="boldT" style={{ width: "330px" }}>
                Mã bưu chính:
              </text>

              <text className="boldT">081125</text>
            </div>
          </div>

          <div className="topR2bodyWrapper">
            <div className="topR2bodyLWrapper">
              <div className="topR2bodyLTopWrapper">
                <div className="topR1body1Wrapper boldT">9. Cước:</div>
                <div className="topR1body1Wrapper">a. Cước chính: 9.500</div>
                <div className="topR1body1Wrapper">b. Phụ phí: 1.500</div>
                <div className="topR1body1Wrapper">c. Cước GTGT: 0.000</div>
                <div className="topR1body1Wrapper boldT">
                  d. Tổng cước: 11.000
                </div>
              </div>

              <div className="topR2bodyLBottomWrapper">
                <div className="topR1body1Wrapper2 boldT">
                  11. Thu của người nhận:
                </div>
                <div className="topR1body1Wrapper2 ">COD: 0</div>
                <div className="topR1body1Wrapper2 ">Thu khác: 0</div>
                <div className="topR1body1Wrapper2 ">Tổng thu: 0</div>
              </div>
            </div>

            <div className="topR2bodyRWrapper">
              <div className="topR2bodyRTopWrapper">
                <div className="topR1body1Wrapper2 boldT">
                  10. Khối lượng kg:
                </div>
                <div className="topR1body1Wrapper2">Khối lượng thực tế: 30</div>
                <div className="topR1body1Wrapper2">Khối lượng quy đổi: 0</div>
              </div>

              <div className="topR2bodyRBottomWrapper">
                <div className="topR1body1Wrapper boldT">
                  12. Chú dẫn nghiệp vụ:
                </div>
              </div>
            </div>
          </div>

          <div className="topR3bodyWrapper">
            <div className="topR3bodyLWrapper">
              <div className="topR1body1Wrapper3 boldT">
                13. Bưu cục chấp nhận:
              </div>
              <div className="topR1body1Wrapper3">Chữ ký GDV nhận</div>
            </div>

            <div className="topR1body1Wrapper3 boldT">
                14. Ngày giờ nhận:
            </div>
          </div>
        </div>
      </div>
      <div className="footerWrapper">
        Hotline: 0889 1209 03 - Website: www.magicpost.com.vn - Email:
        CSKHMPost@ems.com.vn
      </div>
    </div>
  );
}
