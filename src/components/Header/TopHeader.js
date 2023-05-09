import React from "react";
import { images } from "../../assets/images";
import { FaHeadset } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { baseAxios } from "../../axios/baseAxios";


function TopHeader() {

    useEffect(() => {
        baseAxios.get("product/search?keyword=lenovo&page=1&limit=4").then(data =>{
            console.log("Searching...",data.data);
        })
    },[])

    return(
        <>
            <div className="top--header">
                <div className="container">
                    <div className="top--header--main flex align-item">
                        <Link to="/a" className="top--header--logo">
                            <img src={images.logo} alt="logo"></img>
                        </Link>
                        <div className="mid--header flex">
                            <div className="form__input">
                                <form className="clearfix search--form bg-white form-tablet" action="/tim-kiem">
                                    <div className="search--form--container">
                                    <input type="text" className="text_search"  placeholder="Tìm kiếm ..." />
                                        <button className="submit-search">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="list--header list--header-tablet flex">
                                <a href="#" className="items flex" >
                                    <FaUser size={29} color="orange" /> 
                                    <p className="list--header--txt">Góp ý<br/>Kiếu nại</p>
                                </a>
                                <a href="#" className="items flex" >
                                    <FaGlobe size={29} color="orange" /> 
                                    <p className="list--header--txt">Tra cứu<br/>Bảo hành</p>
                                </a>
                                <a href="#" className="items flex rotate" >
                                    <FaPhone size={29} color="orange" /> 
                                    <p className="list--header--txt">Liên hệ<br/>Trực tiếp</p>
                                </a>
                                <a href="#" className="items flex" >
                                    <FaHeadset size={29} color="orange" /> 
                                    <p className="list--header--txt">Tư vấn<br/>Mua hàng</p>
                                </a>
                            </div>
                        </div>
                        <div className="right--header">
                            <a href="#" className="right--header--item">Chính sách</a>
                            <a href="#" className="right--header--item">Tuyển dụng</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopHeader;
