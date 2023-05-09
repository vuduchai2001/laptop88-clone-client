import React from "react";
import TopHeader from "../Header/TopHeader";
import BottomHeaderFilter from "./BottomHeaderFilter";
import MainFilter from "./MainFilter";

function Filter() {
    return (
        <>
            <div className="main--header">
                <BottomHeaderFilter></BottomHeaderFilter>
            </div>
            <MainFilter />

        </>
    )
}

export default Filter;