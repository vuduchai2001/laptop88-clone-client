import React from "react";
import { FaBars } from "react-icons/fa";

function BottomHeader() {
    return(
        <div className="bottom--header">
            <div className="container"> 
                <div className="bottom--header--main flex align-item">
                    <div className="bottom--header--menu">
                        <div className="menu--title flex" >
                            <FaBars className="category_icon"/>
                            <h2>Danh mục sản phẩm</h2>
                        </div>
                    </div>
                    <div className="bottom--header--right flex">
                        <a className="bottom--header--right--item flex space-center" href="#">
                            <div className="pulse-icon">
                                <div className="icon-wrap"></div>
                                <div className="elements">
                                    <div className="pulse pulse-1"></div>
                                </div>
                            </div>
                            <div className="righ--item--content">
                                <p>Zenbook Q409 Gen 12 - Màn Đẹp 15.xxx</p>
                            </div>
                        </a>
                        <a className="bottom--header--right--item flex space-center" href="#">
                            <div className="pulse-icon">
                                <div className="icon-wrap"></div>
                                <div className="elements">
                                    <div className="pulse pulse-1"></div>
                                </div>
                            </div>
                            <div className="righ--item--content">
                                <p>Dell Gaming G16 7620 Siêu Khủng Chuẩn Màu!</p>
                            </div>
                        </a>
                        <a className="bottom--header--right--item flex space-center" href="#">
                            <div className="pulse-icon">
                                <div className="icon-wrap"></div>
                                <div className="elements">
                                    <div className="pulse pulse-1"></div>
                                </div>
                            </div>
                            <div className="righ--item--content">
                                <p> Victus chính hãng RTX 3050 - Giá Shock </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomHeader;
