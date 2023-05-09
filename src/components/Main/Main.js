import React from "react";
import TopBanner from "./Banner/TopBanner";
import BottomBanner from "./Banner/BottomBanner";
import ProductDeal from "./Body/ProductDeal";
import ProductCategory from "./Body/ProductCategory";
import BottomHeader from "../Header/BottomHeader";
function Main() {
    return (
        <main>
             <div className="main--header">
                <BottomHeader></BottomHeader>
            </div>
            <div className="container">
                <TopBanner />
                <BottomBanner />
                <ProductDeal />
                <ProductCategory titleName='SẢN PHẨM HOT' />
                <ProductCategory titleName='HỌC TẬP - VĂN PHÒNG' />
                <ProductCategory titleName='ĐỒ HOẠ - KĨ THUẬT' />
                <ProductCategory titleName='LAPTOP GAMING' />
                <ProductCategory titleName='CAO CẤP - SANG TRỌNG' />
                
            </div>
        </main>
    );
}

export default Main;