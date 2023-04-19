import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

function MainHeader() {
    return(
        <div className="main--header">
            <TopHeader></TopHeader>
            <BottomHeader></BottomHeader>
        </div>
    );
}

export default MainHeader;
