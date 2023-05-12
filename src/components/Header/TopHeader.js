import React from "react";
import { images } from "../../assets/images";
import { FaHeadset } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function TopHeader({setResults}) {

    const [key, setKey] = useState('');

    const history = useNavigate();

    useEffect(() => {
        
    },[])
    
    const fetchData = async () => {
        // const res = await axios({
        //     "method": "GET",
        //     "url":'http://localhost:3000/product/filter',
        //     "params": {
        //         'name': key
        //     }
        // })

        const res = await axios.get(`http://localhost:3000/product/filter?name=${key}`);
        // console.log(res);
        history(`/tim-kiem?name=${key}`);
        setResults(res);
    }

    return(
        <>
            <div className="top--header">
                <div className="container">
                    <div className="top--header--main flex align-item">
                        <Link to="/" className="top--header--logo">
                            <img src={images.logo} alt="logo"></img>
                        </Link>
                        <div className="mid--header flex">
                            <div className="form__input">
                                <form className="clearfix search--form bg-white form-tablet" onSubmit={(event) => {event.preventDefault();fetchData();}}>
                                    <div className="search--form--container">
                                    <input type="text" className="text_search"  placeholder="Tìm kiếm ..."  value={key} onChange={(event) => setKey(event.target.value)}/>
                                    <button type="submit" className="submit-search">
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
