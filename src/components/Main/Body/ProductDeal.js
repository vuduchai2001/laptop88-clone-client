import React from "react";
import Clock from "./Clock";
import { productdata } from "../../../data/product";
import { images } from "../../../assets/images";

function ProductDeal() {
    return (
        <div className="product--deal">
            <div className="product--deal--main--title flex space-between">
                <div className="product--deal--title flex space-center">
                    <i class="fa-solid fa-bolt-lightning"></i>
                    <h3>Flash sale</h3> 
                        <Clock />
                </div>
                <a href="#" className="product--deal--more-all">XEM TẤT CẢ</a>
            </div>
            <div className="list--product">
                {productdata.map((item) =>{
                    return (
                    <div key={item.id} className="product--item">
                        <div className="product--item--img">
                            <a href="#">
                                <img src={item.img} />
                            </a>
                        </div>
                        <div className="product--item--info">
                            <div className="product--item--title">
                                <a href="#">
                                    {item.name}
                                </a>
                            </div>
                            {/* <div className="product--item--sticker flex-wrap">
                                <img className="sticker--img" src= {images.sticker1}></img>
                            </div> */}
                            <div className="product--item--promotion">
                                Giao hàng từ Hà Nội, ship COD toàn quốc
                                {/* <table className="item--table">
                                    <tbody>
                                        <tr>
                                            <td>CPU</td>
                                            <td>{item.CPU}</td>
                                        </tr>
                                        <tr>
                                            <td>RAM</td>
                                            <td>{item.RAM}</td>
                                        </tr>
                                        <tr>
                                            <td>Ổ</td>
                                            <td>{item.CPU}</td>
                                        </tr>
                                    </tbody>
                                </table> */}
                            </div>
                            <div>
                                <div className="product--item--price">
                                    <div className="price--top flex space-center">
                                        <del className="old--price">{item.Price.toLocaleString('vi-VN')}đ</del>
                                        <p className="price--saleoff">{((100-item.saleOff/item.Price*100)).toFixed()}%</p>
                                    </div>
                                    <div className="price--bottom">
                                        <span className="new--price">{item.saleOff.toLocaleString('vi-VN')}đ</span>
                                    </div>
                                </div>
                                <div className="deal--status">
                                    <div className="p--order--status">
                                        <span className="text"> Còn lại {item.quantity}</span>
                                        <span className="bg--count--left"></span>
                                        <span className="icon--order"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    );
}

export default ProductDeal;