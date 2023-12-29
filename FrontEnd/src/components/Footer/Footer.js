import './Footer.css';

function Footer() {
    return (
        <div id="footer-container">
            <div className="footer-cgv-policy">
                <div className="footer-container">
                    <div className="footer-title footer-item footer-item2">

                        <h3>MagicPost</h3>
                        <li>
                            <a href="https://github.com/NamHuyNguyenKhac/MagicPost"
                            >Giới thiệu
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/NamHuyNguyenKhac/MagicPost">Tiện ích Online</a>
                        </li>
                        <li>
                            Tin mới & ưu đãi
                        </li>
                        <li>
                            Liên hệ quảng cáo
                        </li>
                    </div>
                    <div className="footer-title footer-item cgv-follow-us">
                        <h3>Kết nối với chúng tôi</h3>
                        <a href="https://www.facebook.com/daovuminhkhanh">
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
                        <h3>Chăm sóc khách hàng</h3>
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