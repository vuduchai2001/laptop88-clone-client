import React from "react";
import TopFooter from "./TopFooter";
import BannerFooter from "./BannerFooter";
import BottomFooter from "./BottomFooter";
import InforFooter from "./InforFooter";
import ShowroomFooter from "./ShowroomFooter"; 
function Footer() {
    return (
        <>
            <TopFooter></TopFooter>
            <BannerFooter />
            <BottomFooter></BottomFooter>
            <InforFooter />
            <ShowroomFooter />
        </>
    )
}

export default Footer;