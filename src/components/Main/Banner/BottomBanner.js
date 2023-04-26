import React from "react";
import { images } from "../../../assets/images";
function BottomBanner() {
    return (
        <div className="bottom--banner flex">
            <a className="banner--item" href="#">
                <img src={images.banner1} alt=""  className="lazy loaded"/>
            </a>
            <a className="banner--item" href="#">
                <img src={images.banner2} alt=""  className="lazy loaded"/>
            </a>
            <a className="banner--item" href="#">
                <img src={images.banner3} alt=""  className="lazy loaded"/>
            </a>
        </div>
    );
}

export default BottomBanner;