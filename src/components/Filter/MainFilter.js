import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrandData } from "../../data/brands";
import { categoryChild } from "../../data/categorychild";
import axios from "axios";
import { images } from "../../assets/images";

function MainFilter() {
  const [results, setResults] = useState([]);
  const [btnActive, setBtnActive] = useState(null);
  const [pagingActive, setPagingActive] = useState(1);
  const [filters, setFilters] = useState({
    BrandId: "",
    PriceSales: 0,
    PriceSalesmax: 10000000000000000000,
    CPUId: "",
    RAMId: "",
    HardDriveId: "",
    CardId: "",
    ScreenId: "",
    SpectId: "",
    SeriesId: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState("new");

  const [filterActive, setFilterActive] = useState({
    BrandId: null,
    PriceSales: null,
    CPUId: null,
    RAMId: null,
    HardDriveId: null,
    CardId: null,
    ScreenId: null,
    SpectId: null,
    SeriesId: null,
  });

  useEffect(() => {
    axios
      .get(`https://laptop99.onrender.com/product/filter`, {
        params: { ...filters, page: currentPage, sort: sort },
      })
      .then((response) => {
        setResults(response);
        console.log("filter: ", filters);
        console.log(response);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => console.log(error));
  }, [filters, currentPage, sort]);

  function handleFilterChange(key, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  }

  function handleFilterActiveChange(key, value) {
    setFilterActive((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const sortProducts = (a) => {
    setSort(a);
  };

  const pages = [];

  for (let i = 1; i <= results?.data?.totalPage; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="flex-wrap m-0">
            <div className="breadcumb--item">
              <Link to="/">
                <span className="">
                  Trang chủ&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
                </span>
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
        <ul className="category--child flex space-center ">
          {categoryChild.map((item) => (
            <li key={item.id}>
              <div className="category--child--item">
                <img src={item.src}></img>
              </div>
              <p className="category--child--txt">{item.name}</p>
            </li>
          ))}
        </ul>
        <div className="filter--product">
          <div className="filter--box">
            <div className="item--filter flex">
              <div className="filter--left">Chọn khoảng giá: </div>
              <div className="filter--right flex-wrap">
                <div className="filter--bar">
                  <span
                    className={`filter--bar--item ${
                      filterActive.PriceSales == 1 ? "item--sort--active" : null
                    }`}
                    onClick={(event) => {
                      handleFilterChange("PriceSales", 0);
                      handleFilterChange("PriceSalesmax", 10000000);
                      handleFilterActiveChange("PriceSales", 1);
                    }}
                  >
                    Dưới 10 triệu
                  </span>
                  <span
                    className={`filter--bar--item ${
                      filterActive.PriceSales == 2 ? "item--sort--active" : null
                    }`}
                    onClick={(event) => {
                      handleFilterChange("PriceSales", 10000000);
                      handleFilterChange("PriceSalesmax", 15000000);
                      handleFilterActiveChange("PriceSales", 2);
                    }}
                  >
                    Từ 10 triệu - 15 triệu
                  </span>
                  <span
                    className={`filter--bar--item ${
                      filterActive.PriceSales == 3 ? "item--sort--active" : null
                    }`}
                    onClick={(event) => {
                      handleFilterChange("PriceSales", 15000000);
                      handleFilterChange("PriceSalesmax", 20000000);
                      handleFilterActiveChange("PriceSales", 3);
                    }}
                  >
                    Từ 15 triệu - 20 triệu
                  </span>
                  <span
                    className={`filter--bar--item ${
                      filterActive.PriceSales == 4 ? "item--sort--active" : null
                    }`}
                    onClick={(event) => {
                      handleFilterChange("PriceSales", 20000000);
                      handleFilterChange("PriceSalesmax", 30000000);
                      handleFilterActiveChange("PriceSales", 4);
                    }}
                  >
                    Từ 20 triệu - 30 triệu
                  </span>
                  <span
                    className={`filter--bar--item ${
                      filterActive.PriceSales == 5 ? "item--sort--active" : null
                    }`}
                    onClick={(event) => {
                      handleFilterChange("PriceSales", 30000000);
                      handleFilterChange("PriceSalesmax", 10000000000000000);
                      handleFilterActiveChange("PriceSales", 5);
                    }}
                  >
                    Trên 30 triệu
                  </span>
                  <span
                    className="filter--bar--item"
                    onClick={(event) => {
                      handleFilterChange("PriceSales", 0);
                      handleFilterChange("PriceSalesmax", 10000000000000000000);
                      handleFilterActiveChange("PriceSales", null);
                    }}
                  >
                    Xoá bộ lọc
                  </span>
                </div>
              </div>
            </div>
            <div className="item--filter flex">
              <div className="filter--left">Chọn theo tiêu chí: </div>
              <div className="filter--right flex-wrap">
                <div className="filter--bar">
                  <span className="filter--bar--item">
                    Thương hiệu <i class="fas fa-sort-down"></i>
                  </span>
                  <ul>
                    <li
                      className={` ${
                        filterActive.BrandId == 1 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 1);
                        handleFilterActiveChange("BrandId", 1);
                      }}
                    >
                      Asus
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 2 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 8);
                        handleFilterActiveChange("BrandId", 2);
                      }}
                    >
                      LG
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 3 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 2);
                        handleFilterActiveChange("BrandId", 3);
                      }}
                    >
                      Dell
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 4 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 3);
                        handleFilterActiveChange("BrandId", 4);
                      }}
                    >
                      Acer
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 5 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 9);
                        handleFilterActiveChange("BrandId", 5);
                      }}
                    >
                      Gigabyte
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 6 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 4);
                        handleFilterActiveChange("BrandId", 6);
                      }}
                    >
                      Lenovo
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 7 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 5);
                        handleFilterActiveChange("BrandId", 7);
                      }}
                    >
                      MSI
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 8 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 6);
                        handleFilterActiveChange("BrandId", 8);
                      }}
                    >
                      HP
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 9 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", 7);
                        handleFilterActiveChange("BrandId", 9);
                      }}
                    >
                      Macbook
                    </li>
                    <li
                      className={` ${
                        filterActive.BrandId == 10 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("BrandId", "");
                        handleFilterActiveChange("BrandId", null);
                      }}
                    >
                      Xoá bộ lọc
                    </li>
                  </ul>
                </div>
                <div className="filter--bar">
                  <span className="filter--bar--item">
                    CPU <i class="fas fa-sort-down"></i>
                  </span>
                  <ul>
                    <li
                      className={` ${
                        filterActive.CPUId == 1 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", 1);
                        handleFilterActiveChange("CPUId", 1);
                      }}
                    >
                      Intel Core i3
                    </li>
                    <li
                      className={` ${
                        filterActive.CPUId == 2 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", 2);
                        handleFilterActiveChange("CPUId", 2);
                      }}
                    >
                      Intel Core i5
                    </li>
                    <li
                      className={` ${
                        filterActive.CPUId == 3 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", 3);
                        handleFilterActiveChange("CPUId", 3);
                      }}
                    >
                      Intel Core i7
                    </li>
                    <li
                      className={` ${
                        filterActive.CPUId == 4 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", 4);
                        handleFilterActiveChange("CPUId", 4);
                      }}
                    >
                      Intel Core i9
                    </li>
                    <li
                      className={` ${
                        filterActive.CPUId == 5 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", 5);
                        handleFilterActiveChange("CPUId", 5);
                      }}
                    >
                      Ryzen 3
                    </li>
                    <li
                      className={` ${
                        filterActive.CPUId == 6 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", 6);
                        handleFilterActiveChange("CPUId", 6);
                      }}
                    >
                      Ryzen 5
                    </li>
                    <li
                      className={` ${
                        filterActive.CPUId == 7 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", 7);
                        handleFilterActiveChange("CPUId", 7);
                      }}
                    >
                      Ryzen 7
                    </li>
                    <li
                      className={` ${
                        filterActive.CPUId == 8 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", 8);
                        handleFilterActiveChange("CPUId", 8);
                      }}
                    >
                      Ryzen 9
                    </li>
                    <li
                      className={` ${
                        filterActive.CPUId == 9 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CPUId", "");
                        handleFilterActiveChange("CPUId", null);
                      }}
                    >
                      Xoá bộ lọc
                    </li>
                  </ul>
                </div>
                <div className="filter--bar">
                  <span className="filter--bar--item">
                    RAM<i class="fas fa-sort-down"></i>
                  </span>
                  <ul>
                    <li
                      className={` ${
                        filterActive.RAMId == 1 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("RAMId", 1);
                        handleFilterActiveChange("RAMId", 1);
                      }}
                    >
                      4GB
                    </li>
                    <li
                      className={` ${
                        filterActive.RAMId == 2 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("RAMId", 2);
                        handleFilterActiveChange("RAMId", 2);
                      }}
                    >
                      8GB
                    </li>
                    <li
                      className={` ${
                        filterActive.RAMId == 3 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("RAMId", 3);
                        handleFilterActiveChange("RAMId", 3);
                      }}
                    >
                      16GB
                    </li>
                    <li
                      className={` ${
                        filterActive.RAMId == 4 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("RAMId", 4);
                        handleFilterActiveChange("RAMId", 4);
                      }}
                    >
                      32GB
                    </li>
                    <li
                      className={` ${
                        filterActive.RAMId == 5 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("RAMId", 5);
                        handleFilterActiveChange("RAMId", 5);
                      }}
                    >
                      64GB
                    </li>
                    <li>Xoá bộ lọc</li>
                  </ul>
                </div>
                <div className="filter--bar">
                  <span className="filter--bar--item">
                    Dung lượng ổ cứng <i class="fas fa-sort-down"></i>
                  </span>
                  <ul>
                    <li
                      className={` ${
                        filterActive.HardDriveId == 1 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("HardDriveId", 1);
                        handleFilterActiveChange("HardDriveId", 1);
                      }}
                    >
                      SSD 128GB
                    </li>
                    <li
                      className={` ${
                        filterActive.HardDriveId == 2 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("HardDriveId", 2);
                        handleFilterActiveChange("HardDriveId", 2);
                      }}
                    >
                      SSD 256GB
                    </li>
                    <li
                      className={` ${
                        filterActive.HardDriveId == 3 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("HardDriveId", 3);
                        handleFilterActiveChange("HardDriveId", 3);
                      }}
                    >
                      SSD 512GB
                    </li>
                    <li
                      className={` ${
                        filterActive.HardDriveId == 4 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("HardDriveId", 4);
                        handleFilterActiveChange("HardDriveId", 4);
                      }}
                    >
                      SSD 1TB
                    </li>
                    <li
                      className={` ${
                        filterActive.HardDriveId == 5 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("HardDriveId", 5);
                        handleFilterActiveChange("HardDriveId", 5);
                      }}
                    >
                      SSD 2TB
                    </li>
                    <li
                      className={` ${
                        filterActive.HardDriveId == 6 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("HardDriveId", 6);
                        handleFilterActiveChange("HardDriveId", 6);
                      }}
                    >
                      HDD 1TB
                    </li>
                    <li
                      className={` ${
                        filterActive.HardDriveId == 7 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("HardDriveId", 7);
                        handleFilterActiveChange("HardDriveId", 7);
                      }}
                    >
                      HDD 2TB
                    </li>
                    <li
                      className={` ${
                        filterActive.HardDriveId == 9 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("HardDriveId", "");
                        handleFilterActiveChange("HardDriveId", null);
                      }}
                    >
                      Xoá bộ lọc
                    </li>
                  </ul>
                </div>
                <div className="filter--bar">
                  <span className="filter--bar--item">
                    Card đồ hoạ <i class="fas fa-sort-down"></i>
                  </span>
                  <ul>
                    <li
                      className={` ${
                        filterActive.CardId == 1 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CardId", 1);
                        handleFilterActiveChange("CardId", 1);
                      }}
                    >
                      Card rời
                    </li>
                    <li
                      className={` ${
                        filterActive.CardId == 2 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CardId", 2);
                        handleFilterActiveChange("CardId", 2);
                      }}
                    >
                      Card onboard
                    </li>
                    <li
                      className={` ${
                        filterActive.CardId == 3 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("CardId", "");
                        handleFilterActiveChange("CardId", null);
                      }}
                    >
                      Xoá bộ lọc
                    </li>
                  </ul>
                </div>
                <div className="filter--bar">
                  <span className="filter--bar--item">
                    Màn hình <i class="fas fa-sort-down"></i>
                  </span>
                  <ul>
                    <li
                      className={` ${
                        filterActive.ScreenId == 1 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("ScreenId", "1");
                        handleFilterActiveChange("ScreenId", 1);
                      }}
                    >
                      Màn 14 Inch
                    </li>
                    <li
                      className={` ${
                        filterActive.ScreenId == 2 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("ScreenId", "2");
                        handleFilterActiveChange("ScreenId", 2);
                      }}
                    >
                      Màn 15.6 Inch
                    </li>
                    <li
                      className={` ${
                        filterActive.ScreenId == 4 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("ScreenId", "4");
                        handleFilterActiveChange("ScreenId", 4);
                      }}
                    >
                      Màn 14.5 Inch
                    </li>
                    <li
                      className={` ${
                        filterActive.ScreenId == 5 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("ScreenId", "5");
                        handleFilterActiveChange("ScreenId", 5);
                      }}
                    >
                      Màn 16 Inch
                    </li>
                    <li
                      className={` ${
                        filterActive.ScreenId == 6 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("ScreenId", "6");
                        handleFilterActiveChange("ScreenId", 6);
                      }}
                    >
                      Màn 16.5 Inch
                    </li>
                    <li
                      className={` ${
                        filterActive.ScreenId == 3 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("ScreenId", "3");
                        handleFilterActiveChange("ScreenId", 3);
                      }}
                    >
                      Màn 17 Inch
                    </li>
                    <li
                      className={` ${
                        filterActive.ScreenId == 10 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("ScreenId", "");
                        handleFilterActiveChange("ScreenId", null);
                      }}
                    >
                      Xoá bộ lọc
                    </li>
                  </ul>
                </div>
                <div className="filter--bar">
                  <span className="filter--bar--item">
                    Tính năng khác <i class="fas fa-sort-down"></i>
                  </span>
                  <ul>
                    <li
                      className={` ${
                        filterActive.SpectId == 1 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SpectId", 1);
                        handleFilterActiveChange("SpectId", 1);
                      }}
                    >
                      Màn hình cảm ứng
                    </li>
                    <li
                      className={` ${
                        filterActive.SpectId == 2 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SpectId", 2);
                        handleFilterActiveChange("SpectId", 2);
                      }}
                    >
                      Bảo mật vân tay
                    </li>
                    <li
                      className={` ${
                        filterActive.SpectId == 3 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SpectId", 3);
                        handleFilterActiveChange("SpectId", 3);
                      }}
                    >
                      Bàn phím LED
                    </li>
                    <li
                      className={` ${
                        filterActive.SpectId == 4 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SpectId", 4);
                        handleFilterActiveChange("SpectId", 4);
                      }}
                    >
                      Màn hình OLED
                    </li>
                    <li
                      className={` ${
                        filterActive.SpectId == 5 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SpectId", "");
                        handleFilterActiveChange("SpectId", null);
                      }}
                    >
                      Xoá bộ lọc
                    </li>
                  </ul>
                </div>
                <div className="filter--bar">
                  <span className="filter--bar--item">
                    Dòng Máy<i class="fas fa-sort-down"></i>
                  </span>
                  <ul>
                    <li
                      className={` ${
                        filterActive.SeriesId == 1 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SeriesId", 1);
                        handleFilterActiveChange("SeriesId", 1);
                      }}
                    >
                      Học tập - văn phòng
                    </li>
                    <li
                      className={` ${
                        filterActive.SeriesId == 2 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SeriesId", 2);
                        handleFilterActiveChange("SeriesId", 2);
                      }}
                    >
                      Cao Cấp - sang trọng
                    </li>
                    <li
                      className={` ${
                        filterActive.SeriesId == 3 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SeriesId", 3);
                        handleFilterActiveChange("SeriesId", 3);
                      }}
                    >
                      Đồ hoạ kỹ thuật
                    </li>
                    <li
                      className={` ${
                        filterActive.SeriesId == 4 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SeriesId", 4);
                        handleFilterActiveChange("SeriesId", 4);
                      }}
                    >
                      Laptop gaming
                    </li>
                    <li
                      className={` ${
                        filterActive.SeriesId == 5 ? "filter--active" : null
                      }`}
                      onClick={(event) => {
                        handleFilterChange("SeriesId", "");
                        handleFilterActiveChange("SeriesId", null);
                      }}
                    >
                      Xoá bộ lọc
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item--filter flex">
              <div className="filter--left">Sắp xếp theo: </div>
              <div className="filter--right flex-wrap">
                <button
                  className={`item--sort  ${
                    btnActive == "1" ? "item--sort--active" : null
                  }`}
                  onClick={() => {
                    sortProducts("new");
                    setBtnActive("1");
                  }}
                >
                  <span>Mới nhất</span>
                </button>
                <button
                  className={`item--sort  ${
                    btnActive == "2" ? "item--sort--active" : null
                  }`}
                  onClick={() => {
                    sortProducts("asc");
                    setBtnActive("2");
                  }}
                >
                  <span>Giá tăng dần</span>
                </button>
                <button
                  className={`item--sort  ${
                    btnActive == "3" ? "item--sort--active" : null
                  }`}
                  onClick={() => {
                    sortProducts("desc");
                    setBtnActive("3");
                  }}
                >
                  <span>Giá giảm dần</span>
                </button>
                <button
                  className={`item--sort  ${
                    btnActive == "4" ? "item--sort--active" : null
                  }`}
                  onClick={() => {
                    sortProducts("name");
                    setBtnActive("4");
                  }}
                >
                  <span>Tên A - Z</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {results?.data?.data?.length !== 0 ? (
          <>
            <div className="list--product--search">
              {results?.data?.data?.map((item) => {
                return (
                  <div key={item._id} className="product--item--search">
                    <div className="product--item--img">
                      <a href="#">
                        <img src={item.imgUrl} />
                      </a>
                    </div>
                    <div className="product--item--info">
                      <div className="product--item--title">
                        <a href="#">{item.name}</a>
                      </div>
                      <div className="product--item--sticker flex-wrap">
                        <img
                          className="sticker--img"
                          src={images.sticker1}
                        ></img>
                      </div>
                      <div className="product--item--promotion">
                        <table className="item--table">
                          <tbody>
                            <tr>
                              <td>CPU</td>
                              <td>{item.CPUId.name}</td>
                            </tr>
                            <tr>
                              <td>RAM</td>
                              <td>{item.RAMId.name}</td>
                            </tr>
                            <tr>
                              <td>Ổ cứng</td>
                              <td>{item.HardDriveId.name}</td>
                            </tr>
                            <tr>
                              <td>Card</td>
                              <td>{item.CardId.code}</td>
                            </tr>
                            <tr>
                              <td>M.Hình</td>
                              <td>{item.ScreenId.name}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <div className="product--item--price">
                          <div className="price--top flex space-center">
                            <del className="old--price">
                              {item.Price.toLocaleString("vi-VN")}đ
                            </del>
                            <p className="price--saleoff">
                              {(
                                100 -
                                (item.PriceSales / item.Price) * 100
                              ).toFixed()}
                              %
                            </p>
                          </div>
                          <div className="price--bottom">
                            <span className="new--price">
                              {item.PriceSales.toLocaleString("vi-VN")}đ
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>{" "}
          </>
        ) : (
          <div className="no--product">
            <span>
              Không có sản phẩm nào hoặc sản phẩm đang được chờ được cập nhật
            </span>
          </div>
        )}
        <div className="paging flex space-center">
          {pages.map((item, i) => {
            return (
              <span
                className={`paging--item  ${
                  pagingActive == i + 1 ? "item--sort--active" : null
                }`}
                onClick={() => {
                  setPagingActive(i + 1);
                  handlePageChange(i + 1);
                }}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainFilter;
