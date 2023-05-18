import React from "react";
import { navdata } from "../../data/nav";

function Nav() {
  return (
    <div className="menu_holder">
      {navdata.map((item) => (
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
                <a href="" className="title-holder">
                  {" "}
                  {item.title1}{" "}
                </a>
                {item.subNav1.map((subitem) => (
                  <div className="holder-last">
                    <a href="/may-tinh-xach-tay" className="title-last">
                      {subitem.subNavName}
                    </a>
                  </div>
                ))}
              </div>

              <div className="item-holder">
                <a href="" className="title-holder">
                  {" "}
                  {item.title2}{" "}
                </a>
                {item.subNav2.map((subitem) => (
                  <div className="holder-last">
                    <a href="/may-tinh-xach-tay" className="title-last">
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
  );
}

export default Nav;
