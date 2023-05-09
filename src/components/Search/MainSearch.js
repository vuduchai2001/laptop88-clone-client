import React from "react";
import { Link } from "react-router-dom";

function MainSearch() {
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
                                <span className="">Tìm kiếm</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSearch;