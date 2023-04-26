import React from "react";

function BottomFooter() {
    return (
        <div className="bottom--footer">
            <div className="newletter">
                <div className="container flex-wrap">
                    <div className="newletter-text">
                        <h4>Kênh thông tin</h4>
                        <span>Mời bạn nhập email để nhận những thông tin khuyến mại mới nhất từ Laptop88</span>
                    </div>
                    <form className="newletter-form">
                        <input type="text" placeholder="Nhập email của bạn"></input>
                        <span className="newletter-btn">
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </span>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default BottomFooter;