import React from "react";
import { useState } from "react";
function Advise() {

    const [popUp,setPopUp] = useState(false);

    const togglePopup = () => {
        setPopUp(!popUp);
    }

    const handleChangeBtn = (id) => {
        const button = document.getElementById(id);   
        if(button.style.backgroundColor === 'blue') 
            button.style.backgroundColor = 'white';
        else 
            button.style.backgroundColor = 'blue';
    }

    return (
        <>

        
        <div className="fixed--advise" onClick={togglePopup}>
            <a>
                <img src="https://laptop88.vn/template/giaodien_2022/images/icon-chat.png"></img>
            </a>
        </div> {popUp &&(<>
        <div className="box--popup status">
        <div className="popup--title">
            <span>
                <i className="fa fa-headphones"></i>
                YÊU CẦU TƯ VẤN
            </span>
        </div>
        <div className="popup--content">
            <div className="form--advise">
                <div className="form--advise--item">
                    <input type="text" className="form--advise--input " placeholder="Họ và tên *"/>
                </div>
                <div className="form--advise--item">
                    <input type="text" className="form--advise--input " placeholder="Số điện thoại *"/>
                </div>
                <div className="form--advise--items">
                    <input type="text" className="form--advise--input content--advise " placeholder="Nội dung tư vấn"/>
                </div>
                <div className="form--check">
                    <div className="form--check--item">
                        <input type="button" id="btn1" onClick={ (id) =>handleChangeBtn('btn1')}></input>
                        <span>Tư vấn sản phẩm phù hợp</span>
                    </div>
                    <div className="form--check--item">
                        <input type="button" id="btn2"  onClick={ (id) =>handleChangeBtn('btn2')}></input>
                        <span>Yêu cầu báo giá</span>
                    </div>
                    <div className="form--check--item" >
                        <input type="button" id="btn3" onClick={(id) =>handleChangeBtn('btn3')}></input>
                        <span>Yêu cầu tư vấn kỹ thuật</span>
                    </div>
                </div>
                <div>
                    <button className="form--submit">GỬI LIÊN HỆ</button>
                </div>
            </div>
        </div>
    </div>
    <div className="overlay" onClick={togglePopup}></div>
    </>
        )}

    </>
    )
}

export default Advise;