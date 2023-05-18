import React from "react";
import { useState } from "react";

function TopBanner() {
  const [img, setImg] = useState(
    "https://laptop88.vn/media/banner/12_May8c4a892a289e905ac91086cc9df01241.jpg"
  );
  const [btnActive, setBtnActive] = useState(1);

  const listImg = [
    "https://laptop88.vn/media/banner/12_May8c4a892a289e905ac91086cc9df01241.jpg",
    "https://laptop88.vn/media/banner/03_May50c92c020b8ada51c78e3e8639d6b6ef.jpg",
    "https://laptop88.vn/media/banner/24_Apr903aaf4c7c434388fcc63c8de65fe3cc.jpg",
    "https://laptop88.vn/media/banner/21_Apr88c6782778198b0fc8532dd08578a116.jpg",
    "https://laptop88.vn/media/banner/15_Feb82bd0fd02e2bc45b34c97ebf787966db.jpg",
  ];

  const handleBanner = (index) => {
    setImg(listImg[index]);
  };

  const handleBtnNext = () => {
    let i = listImg.indexOf(img);
    if (i === listImg.length - 1) {
      setImg(listImg[0]);
      setBtnActive(1);
    } else {
      setImg(listImg[i + 1]);
      setBtnActive(i + 2);
    }
  };

  const handleBtnPrev = () => {
    let i = listImg.indexOf(img);
    if (i === 0) {
      setImg(listImg[listImg.length - 1]);
      setBtnActive(listImg.length);
    } else {
      setImg(listImg[i - 1]);
      setBtnActive(i);
    }
  };

  return (
    <div className="top--banner flex">
      <div className="top--banner-left">
        <div className="owl-loaded owl-carousel owl-theme custom-nav owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div className="owl-item-clone">
                <a href="#" className="owl-items">
                  <img className="owl-lazy img--main--banner" src={img}></img>
                </a>
              </div>
              <div className="owl-item-clone"></div>
              <div className="owl-item-clone"></div>
              <div className="owl-item-clone"></div>
            </div>
            <div className="owl-nav">
              <div className="owl-prev">
                <i
                  className="fa fa-caret-left"
                  aria-hidden="true"
                  onClick={handleBtnPrev}
                ></i>
              </div>
              <div className="owl-next" onClick={handleBtnNext}>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-loaded owl-carousel owl-theme owl-drag flex">
          <div className="owl-stage-outer flex">
            <div className="owl-stage flex">
              <div className="owl-item">
                <div
                  className={`item ${btnActive == 1 ? "item-active" : null}`}
                  onClick={(index) => {
                    handleBanner(0);
                    setBtnActive(1);
                  }}
                >
                  <p>Miễn phí vệ sinh, tra keo, cài Winlaptop</p>
                </div>
              </div>
              <div className="owl-item">
                <div
                  className={`item ${btnActive == 2 ? "item-active" : null}`}
                  onClick={(index) => {
                    handleBanner(1);
                    setBtnActive(2);
                  }}
                >
                  <p>Laptop gaming Sale shock</p>
                </div>
              </div>
              <div className="owl-item">
                <div
                  className={`item ${btnActive == 3 ? "item-active" : null}`}
                  onClick={(index) => {
                    handleBanner(2);
                    setBtnActive(3);
                  }}
                >
                  <p>Dell Vostro 3405 khoẻ nhất tầm giá 10tr</p>
                </div>
              </div>
              <div className="owl-item">
                <div
                  className={`item ${btnActive == 4 ? "item-active" : null}`}
                  onClick={(index) => {
                    handleBanner(3);
                    setBtnActive(4);
                  }}
                >
                  <p>Gigabyte G5 RTX 3050 rẻ nhất chỉ 18 triệu</p>
                </div>
              </div>
              <div className="owl-item">
                <div
                  className={`item ${btnActive == 5 ? "item-active" : null}`}
                  onClick={(index) => {
                    handleBanner(4);
                    setBtnActive(5);
                  }}
                >
                  <p>Acer Nitro 5 chính hãng rẻ nhất chỉ 18 triệu</p>
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
              <b>Hà Nội - 125 Trần Đại Nghĩa</b>
              <a className="phone" href="#">
                Zalo: 0904.583.588
              </a>
            </div>
            <div className="cv-item">
              <b>Hà Nội - 34 Hồ Tùng Mậu</b>
              <a className="phone" href="#">
                Zalo: 0904.583.588
              </a>
            </div>
            <div className="cv-item">
              <b>Hà Nội - Nguyễn Văn Lộc</b>
              <a className="phone" href="#">
                Zalo: 0904.583.588
              </a>
            </div>
            <div className="cv-item">
              <b>Hà Nội - 227 Nguyễn Văn Cừ</b>
              <a className="phone" href="#">
                Zalo: 0904.583.588
              </a>
            </div>
            <div className="cv-item">
              <b>Hà Nội - 376 Phạm Văn Đồng</b>
              <a className="phone" href="#">
                Zalo: 0904.583.588
              </a>
            </div>
            <div className="cv-item">
              <b>TP. HCM - 817A Kha Vạn Cân</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
