import { useState } from "react";
import React from "react";
import { productdata } from "../../../data/product";
import { images } from "../../../assets/images";

function ProductCategory (props) {
    return(
        <div className="product--category--home">
            <div className="product--category--title flex space-between">
                <h3 >
                    {props.titleName}
                </h3>
                <div className="list--category">
                    <a href="#" className="item--cate">Acer</a>
                    <a href="#" className="item--cate">Lenovo</a>
                    <a href="#" className="item--cate">Asus</a>
                    <a href="#" className="item--cate">Dell</a>
                    <a href="#" className="item--cate">Gigabyte</a>
                    <a href="#" className="item--cate">Apple</a>
                    <a href="#" className="item--cate--more-all">
                        Xem tất cả
                        <i class="fa fa-caret-down"></i>
                    </a>
                </div>
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
                            <div className="product--item--sticker flex-wrap">
                                <img className="sticker--img" src= {images.sticker1}></img>
                            </div>
                            <div className="product--item--promotion">
                                <table className="item--table">
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
                                            <td>Ổ cứng</td>
                                            <td>{item.hardDrive}</td>
                                        </tr>
                                        <tr>
                                            <td>Card</td>
                                            <td>{item.graphicCard}</td>
                                        </tr>
                                        <tr>
                                            <td>M.Hình</td>
                                            <td>{item.screen}</td>
                                        </tr>
                                    </tbody>
                                </table> 
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
                                
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default ProductCategory;