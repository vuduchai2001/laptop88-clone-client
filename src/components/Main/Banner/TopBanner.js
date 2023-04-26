import React from "react";

function TopBanner() {
    return (
        <div className="top--banner flex">
            <div className="top--banner-left">
                <div className="owl-loaded owl-carousel owl-theme custom-nav owl-drag">
                    <div className="owl-stage-outer">
                        <div className="owl-stage">
                            <div className="owl-item-clone">
                                <a href="#" className="owl-items">
                                    <img className="owl-lazy" src="https://laptop88.vn/media/banner/06_Oct1d7552285f7982e62dfb51d640bf2b85.jpg"></img>
                                </a>
                            </div>
                            <div className="owl-item-clone">
                            </div>
                            <div className="owl-item-clone"> 
                            </div>
                            <div className="owl-item-clone">  
                            </div>
                        </div>
                        <div className="owl-nav">
                            <div className="owl-prev">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </div> 
                            <div className="owl-next">
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-loaded owl-carousel owl-theme owl-drag flex">
                    <div className="owl-stage-outer flex">
                        <div className="owl-stage flex">
                            <div className="owl-item">
                                <div className="item item-active">
                                    <p>Miễn phí vệ sinh, tra keo, cài Winlaptop</p>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="item">
                                    <p>Miễn phí vệ sinh, tra keo, cài Winlaptop</p>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="item">
                                    <p>Miễn phí vệ sinh, tra keo, cài Winlaptop</p>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="item">
                                    <p>Miễn phí vệ sinh, tra keo, cài Winlaptop</p>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="item">
                                    <p>Miễn phí vệ sinh, tra keo, cài Winlaptop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top--banner-right">
                <div className="cv-nav">
                    <div className="cv-prev">
                        <i class="fa fa-caret-up"></i>
                    </div>
                    <div className="cv-next">
                        <i class="fa fa-caret-down"></i>
                    </div>
                </div>
                <div className="cv-stage-outer">
                    <div className="cv-stage">
                        <div className="cv-item">
                            <b>Hà Nội - 125 Trần Đại Phú</b>
                            <a className="phone" href="#">Zalo: 0904.583.588</a>
                        </div>
                        <div className="cv-item">
                            <b>Hà Nội - 125 Trần Đại Phú</b>
                            <a className="phone" href="#">Zalo: 0904.583.588</a>
                        </div>
                        <div className="cv-item">
                            <b>Hà Nội - 125 Trần Đại Phú</b>
                            <a className="phone" href="#">Zalo: 0904.583.588</a>
                        </div>
                        <div className="cv-item">
                            <b>Hà Nội - 125 Trần Đại Phú</b>
                            <a className="phone" href="#">Zalo: 0904.583.588</a>
                        </div>
                        <div className="cv-item">
                            <b>Hà Nội - 125 Trần Đại Phú</b>
                            <a className="phone" href="#">Zalo: 0904.583.588</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner;