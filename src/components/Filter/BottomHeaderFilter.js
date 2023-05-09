import React from "react";
import { navdata } from "../../data/nav";

function BottomHeaderFilter() {
    
    return(
        <div className="bottom--header">
            <div className="container"> 
                <div className="bottom--header--main flex align-item">
                    <div className="bottom--header--menu">
                        <div className="menu--title flex" >
                            <i className="fa-solid fa-bars category_icon"></i>
                            <h2>Danh mục sản phẩm</h2>
                        </div>
                        <div className="height-hover"></div>
                        <div className="menu_holder not-home">
                            {navdata.map((item ) => (
                               <div className="item">
                               <a href="#" className="item-cate flex align-items space-between">
                                   <div className="item-cate-left flex align-items">
                                       <div key={item.navId} className="img-cat">
                                            <img src={item.icon}></img>
                                       </div>
                                       <p className="cat-title">{item.name}</p>
                                   </div>
                                   <div className="item-cate-right">
                                       <i className="fa fa-caret-right"></i>
                                   </div>
                               </a>
                               <div className="menu-hover">
                                   <div className="list-holder flex-wrap">
                                       <div className="item-holder">
                                           <a href="#" className="title-holder"> {item.title1}</a>
                                            {item.subNav1.map((subitem) => (
                                                <div className="holder-last">
                                                    <a href="#" className="title-last">
                                                         {subitem.subNavName}
                                                  
                                                 
                                                 </a>
                                                </div>
                                            ))}

                                       </div>
                                     
                                       <div className="item-holder">
                                           <a href="#" className="title-holder">{item.title2} </a>
                                            {item.subNav2.map((subitem) => (
                                                <div className="holder-last">
                                                    <a href="#" className="title-last">
                                                         {subitem.subNavName}
                                                  
                                                    
                                                 
                                                 </a>
                                                </div>
                                            ))}

                                       </div>
                                     
                                       
                                   </div>
                               </div>
                           </div>
                            ))}
                        </div>
                    </div>
                    <div className="bottom--header--right flex">
                        <a className="bottom--header--right--item flex space-center" href="#">
                            <div className="pulse-icon">
                                <div className="icon-wrap"></div>
                                <div className="elements">
                                    <div className="pulse pulse-1"></div>
                                </div>
                            </div>
                            <div className="righ--item--content">
                                <p>Zenbook Q409 Gen 12 - Màn Đẹp 15.xxx</p>
                            </div>
                        </a>
                        <a className="bottom--header--right--item flex space-center" href="#">
                            <div className="pulse-icon">
                                <div className="icon-wrap"></div>
                                <div className="elements">
                                    <div className="pulse pulse-1"></div>
                                </div>
                            </div>
                            <div className="righ--item--content">
                                <p>Dell Gaming G16 7620 Siêu Khủng Chuẩn Màu!</p>
                            </div>
                        </a>
                        <a className="bottom--header--right--item flex space-center" href="#">
                            <div className="pulse-icon">
                                <div className="icon-wrap"></div>
                                <div className="elements">
                                    <div className="pulse pulse-1"></div>
                                </div>
                            </div>
                            <div className="righ--item--content">
                                <p> Victus chính hãng RTX 3050 - Giá Shock </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomHeaderFilter;
