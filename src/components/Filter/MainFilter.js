import React from "react";
import { Link } from "react-router-dom";
import { BrandData } from "../../data/brands";

function MainFilter() {
    return (
        <>
            <div className="breadcrumb">
                <div className="container">
                    <div className="flex-wrap m-0">
                        <div className="breadcumb--item">
                            <Link to="/">
                                <span className="">Trang chủ&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
                            </Link>
                            <Link href="/a">
                                <span className="">Máy tính xách tay</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
           <div className="container">
                <div className="banner--category">
                    <div className="banner--category--item ">
                        <Link to="#">
                            <img src="https://laptop88.vn/media/banner/08_Mar1d47a608c5346ac1803f841e33159012.jpg"></img>
                        </Link>
                    </div>
                    <div className="banner--category--item ">
                    <Link to="#">
                            <img src="https://laptop88.vn/media/banner/28_Mar1afda50bd4d44657db9789eb5f79d7fa.jpg"></img>
                        </Link>
                    </div>
                </div>
                <div className="brand--list flex-wrap">
                    {BrandData.map((item) => (
                        <Link to="#" className="brand--list--item" key={item.id}>
                            <img src={item.src}></img>
                        </Link>
                    ))}
                </div>
                <div className="filter--product">
                    
                </div>
           </div>
        </>
    )
}

export default MainFilter;