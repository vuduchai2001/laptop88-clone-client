import React from "react";
import TopHeader from "../Header/TopHeader";
import BottomHeaderFilter from "../Filter/BottomHeaderFilter";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";
import axios from "axios";
import { BrandData } from "../../data/brands";

function Search() {
  const [results, setResults] = useState([]);
  const [btnActive, setBtnActive] = useState(null);
  const [pagingActive, setPagingActive] = useState(1);
  const [filters, setFilters] = useState({
    BrandId: "",
    PriceSales: 0,
    PriceSalesmax: 10000000000000000000,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState("new");
  const [filterPriceActive, setFilterPriceActive] = useState(null);

  const key = new URLSearchParams(window.location.search).get("name");
  useEffect(() => {
    if (results.length > 0) {
      window.location.href = `/tim-kiem?name=${key}`;
    }
    const getData = async (key) => {
      const res = await axios.get(
        `http://localhost:3000/product/filter?name=${key}`
      );
      setResults(res);
    };
    getData(key);
  }, [key]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/filter?name=${key}`, {
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
      <div className="main--header">
        <TopHeader setResults={setResults} />
        <BottomHeaderFilter></BottomHeaderFilter>
      </div>
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
      <div className="product--category">
        <div className="container">
          <div className="brand--list flex-wrap">
            {BrandData.map((item) => (
              <Link to="#" className="brand--list--item" key={item.id}>
                <img src={item.src}></img>
              </Link>
            ))}
          </div>
          <div className="filter--product">
            <div className="filter--box">
              <div className="item--filter flex">
                <div className="filter--left">Chọn theo tiêu chí: </div>
                <div className="filter--right flex-wrap">
                  <div className="filter--search">
                    <span>
                      Thương hiệu<i className="fas fa-sort-down"></i>
                    </span>
                    {/* <ul className="filter--search--ul">
                                            <li><a onClick={(event) => handleFilterChange('BrandId',1)}>Dell </a></li>
                                            <li><a onClick={(event) => handleFilterChange('BrandId',2)}>Dell </a></li>
                                        </ul> */}
                  </div>
                  <div className="filter--search">
                    <span>
                      Giá<i className="fas fa-sort-down"></i>
                    </span>
                    <ul className="filter--search--ul">
                      <li>
                        <a
                          className={`${
                            filterPriceActive == 1 ? "filter--active" : null
                          }`}
                          onClick={(event) => {
                            handleFilterChange("PriceSales", 0);
                            handleFilterChange("PriceSalesmax", 10000000);
                            setFilterPriceActive(1);
                          }}
                        >
                          Dưới 10 triệu{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`${
                            filterPriceActive == 2 ? "filter--active" : null
                          }`}
                          onClick={(event) => {
                            handleFilterChange("PriceSalesmax", 15000000);
                            handleFilterChange("PriceSales", 10000000);
                            setFilterPriceActive(2);
                          }}
                        >
                          10 triệu - 15 triệu{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`${
                            filterPriceActive == 3 ? "filter--active" : null
                          }`}
                          onClick={(event) => {
                            handleFilterChange("PriceSales", 15000000);
                            handleFilterChange("PriceSalesmax", 20000000);
                            setFilterPriceActive(3);
                          }}
                        >
                          15 triệu - 20 triệu{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`${
                            filterPriceActive == 4 ? "filter--active" : null
                          }`}
                          onClick={(event) => {
                            handleFilterChange("PriceSales", 20000000);
                            handleFilterChange(
                              "PriceSalesmax",
                              10000000000000000
                            );
                            setFilterPriceActive(4);
                          }}
                        >
                          Trên 20 triệu{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(event) => {
                            handleFilterChange("PriceSales", 0);
                            handleFilterChange(
                              "PriceSalesmax",
                              100000000000000000
                            );
                            setFilterPriceActive(null);
                          }}
                        >
                          Xoá bộ lọc
                        </a>
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
                    <i className="fas fa-sort-down"></i>
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
                    <i className="fas fa-sort-down"></i>
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
                    <i className="fas fa-sort-down"></i>
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
                    <i className="fas fa-sort-down"></i>
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
      </div>
    </>
  );
}

export default Search;
