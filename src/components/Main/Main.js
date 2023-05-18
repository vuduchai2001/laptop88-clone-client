import React from "react";
import { useEffect, useState } from "react";
import TopBanner from "./Banner/TopBanner";
import BottomBanner from "./Banner/BottomBanner";
import ProductDeal from "./Body/ProductDeal";
import ProductCategory from "./Body/ProductCategory";
import BottomHeader from "../Header/BottomHeader";
import TopHeader from "../Header/TopHeader";
import axios from "axios";
import { productdata1 } from "../../data/productdata1";
import { productdata2 } from "../../data/productdata2";
import { productdata3 } from "../../data/productdata3";

function Main() {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    SeriesId: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/filter`, {
        params: { ...filters },
      })
      .then((response) => {
        setResults(response);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <main>
      <div className="main--header">
        <TopHeader></TopHeader>
        <BottomHeader></BottomHeader>
      </div>
      <div className="container">
        <TopBanner />
        <BottomBanner />
        <ProductDeal />
        <ProductCategory titleName="SẢN PHẨM HOT" productData={productdata1} />
        <ProductCategory
          titleName="HỌC TẬP - VĂN PHÒNG"
          productData={productdata1}
        />
        <ProductCategory
          titleName="ĐỒ HOẠ - KĨ THUẬT"
          productData={productdata2}
        />
        <ProductCategory titleName="LAPTOP GAMING" productData={productdata3} />
        <ProductCategory
          titleName="CAO CẤP - SANG TRỌNG"
          productData={productdata1}
        />
      </div>
    </main>
  );
}

export default Main;
