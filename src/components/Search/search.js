import React from "react";
import TopHeader from "../Header/TopHeader";
import BottomHeaderFilter from "../Filter/BottomHeaderFilter";
import MainSearch from "./MainSearch";
import { useState } from "react";

function Search() {

    return (
        <>
            <div className="main--header">
                <BottomHeaderFilter></BottomHeaderFilter>
            </div>
            <MainSearch />
        </>
    )
}

export default Search;