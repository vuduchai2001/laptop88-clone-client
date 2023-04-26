import React from "react";
import { images } from "../../assets/images";
import { topfooterdata } from "../../data/topfooter";

function TopFooter() {
    return (
        <div className="top--footer">
            <div className="container">
                <div className="top--footer--main flex-wrap space-center">
                    {
                        topfooterdata.map((item) => {
                            return(
                                <a className="top--footer--item-category" href="#">
                                    <img src={item.src} className="img" />
                                    <p className="top--footer--item-category-txt">{item.name}</p>
                                </a>
                            )
                    })}
                    
                </div>
                
            </div>
        </div>
    )
}

export default TopFooter;
