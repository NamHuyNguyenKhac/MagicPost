import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div id="footer-container">
            <div className="footer-cgv-policy">
                <div className="footer-container">
                    <div className="footer-title footer-item footer-item2">

                        <h6>MagicPost</h6>
                        <li>
                            <a href="https://github.com/huudong03uet/ProjectCNPM"
                            >Giới thiệu
                            </a>
                        </li>
                        <li>
                            <a href="https://www.cgv.vn/default/cgv-online/">Tiện ích Online</a>
                        </li>
                        <li>
                            <Link to="/newsoffer">
                                Tin mới & ưu đãi
                            </Link>
                        </li>
                        <li>
                            <Link to="contact">Liên hệ quảng cáo</Link>
                        </li>
                    </div>
                    <div className="footer-title footer-item cgv-follow-us">
                        <h6>Kết nối với chúng tôi</h6>
                        <a href="https://www.facebook.com/profile.php?id=100033353748879">
                            <img
                                style={{ width: "120%" }}
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-social-footer-40.png"
                                alt=""
                            />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="footer-title customer-cgv">
                        <h6>Chăm sóc khách hàng</h6>
                        <li>Hotline: 1900 0404</li>
                        <li>
                            Giờ làm việc: 8:00 - 22:00 <br /> (Tất cả các ngày trong tuần)
                        </li>
                        <li>
                            Địa Chỉ: Toà E3, 144 Xuân Thủy, Cầu Giấy, Hà Nội.
                        </li>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;