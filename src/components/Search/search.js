import React from "react";
import TopHeader from "../Header/TopHeader";
import BottomHeaderFilter from "../Filter/BottomHeaderFilter";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";
import axios from "axios";

function Search() {
    const [results, setResults] = useState([]);
    const [btnActive, setBtnActive] = useState(null);
    const [pagingActive, setPagingActive] = useState(1);

    const key = new URLSearchParams(window.location.search).get("name");
    useEffect(() => {
        
        if (results.length > 0) {
            window.location.href = `/tim-kiem?name=${key}`;
        }
        const getData = async (key) => {
            const res = await axios.get(`http://localhost:3000/product/filter?name=${key}`);
            setResults(res);
            console.log(results);
          }
        getData(key);
    }, []);

    const sortProducts = async (a) => {
        const res = await axios.get(`http://localhost:3000/product/filter?name=${key}&sort=${a}`);
        setResults(res);
        console.log("sau khi sap xep: ",res);
    }

    const handlePaging = async (index) => {
        const res = await axios.get(`http://localhost:3000/product/filter?name=${key}&page=${index}`);
        setResults(res);
    }


    const pages = [];

    for (let i = 1; i <= results?.data?.totalPage; i++) {
        pages.push(i);
    }


    return (
        <>
            <div className="main--header">
                <TopHeader setResults={setResults}/>
                <BottomHeaderFilter></BottomHeaderFilter>
            </div>
            <div className="breadcrumb">
                <div className="container">
                    <div className="flex-wrap m-0">
                        <div className="breadcumb--item">
                            <Link to="/">
                                <span className="">Trang chủ&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
                            </Link>
                            <Link href="#">
                                <span className="">Tìm kiếm</span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="product--category">
                <div className="container">
                    <div className="filter--product">

                        <div className="filter--box">
                            
                            <div className="item--filter flex">
                                <div className="filter--left">Chọn theo tiêu chí: </div>
                                <div className="filter--right flex-wrap">
                                    <div className="filter--search">
                                        <span>Thương hiệu<i className="fas fa-sort-down"></i></span>
                                        <ul className="filter--search--ul">
                                            <li><a href="#">Dell </a>(5)</li>
                                            <li><a href="#">Asus </a>(5)</li>
                                        </ul>
                                    </div>
                                    <div className="filter--search">
                                        <span>Giá<i className="fas fa-sort-down"></i></span>
                                        <ul className="filter--search--ul">
                                            <li><a href="#">Dưới 10 triệu </a>(5)</li>
                                            <li><a href="#">10 triệu - 15 triệu </a>(10)</li>
                                            <li><a href="#">15 triệu - 20 triệu </a>(15)</li>
                                            <li><a href="#">Trên 20 triệu </a>(20)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="item--filter flex">
                                <div className="filter--left">Sắp xếp theo: </div>
                                <div className="filter--right flex-wrap">
                                    <button className={`item--sort  ${btnActive=='1'? 'item--sort--active':null}`} onClick={()=>{sortProducts('new');setBtnActive('1')}}>
                                        <span>Mới nhất</span>
                                        <i className="fas fa-sort-down"></i>
                                    </button>
                                    <button  className={`item--sort  ${btnActive=='2'? 'item--sort--active':null}`} onClick={()=>{sortProducts('price-asc');setBtnActive('2')}}>
                                        <span>Giá tăng dần</span>
                                        <i className="fas fa-sort-down"></i>
                                    </button>
                                    <button className={`item--sort  ${btnActive=='3'? 'item--sort--active':null}`}onClick={()=>{sortProducts('price-desc');setBtnActive('3')}}>
                                        <span>Giá giảm dần</span>
                                        <i className="fas fa-sort-down"></i>
                                    </button>
                                    <button className={`item--sort  ${btnActive=='4'? 'item--sort--active':null}`}onClick={()=>{sortProducts('name');setBtnActive('4')}}>
                                        <span>Tên A - Z</span>
                                        <i className="fas fa-sort-down"></i>
                                    </button>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>  
                        {(results?.data?.data.length !== 0)? 
                        <>
                            <div className="list--product--search">
                                {results?.data?.data.map((item) =>{
                                    return (
                                        <div key={item._id} className="product--item--search">
                                        <div className="product--item--img">
                                        <a href="#">
                                         <img src={item.imgUrl} />
                                         </a>
                                 </div>
                                <div className="product--item--info">
                                <div className="product--item--title">
                                <a href="#">
                                    {item.name}
                                </a>
                            </div>
                            <div className="product--item--sticker flex-wrap">
                                <img className="sticker--img" src= {images.sticker1}></img>
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
                                        <del className="old--price">{item.Price.toLocaleString('vi-VN')}đ</del>
                                        <p className="price--saleoff">{((100-item.PriceSales/item.Price*100)).toFixed()}%</p>
                                    </div>
                                    <div className="price--bottom">
                                        <span className="new--price">{item.PriceSales.toLocaleString('vi-VN')}đ</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
)})} 
                    </div> </>: <div className="no--product"><span>Không có sản phẩm nào hoặc sản phẩm đang được chờ được cập nhật</span></div>}
                    <div className="paging flex space-center">
                        {pages.map((item,i) => { return(
                            <span className={`paging--item  ${pagingActive== i +1? 'item--sort--active':null}`} onClick={()=>{setPagingActive(i+1);handlePaging(i+1)}}>{i+1}</span>)
                        })}

                        
                        
                        

                    </div>
                    
                </div>
            </div>

                    
                
            
        </>
    )
}

export default Search;