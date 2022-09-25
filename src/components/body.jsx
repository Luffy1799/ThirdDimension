import React from "react";
import Item from "./item";
import toGrid from "./functionaity/toGrid"
import toList from "./functionaity/toList"
import data from '/public/modelsData';
import "../index.css"
import { useState } from "react";


export default function Body() {
    
    const [searchKey, setSearchKey] = useState('');

    
        const Items = data.filter((val) => {
            if(searchKey == '') {
                return val;
            }
            else if (val.title.toLowerCase().includes(searchKey.toLowerCase())){
                return val;
            }
        }).map(item => {
            return <Item 
                        key = {item.id}
                        id = {item.id}
                        name={item.title}
                        path={item.path}
                    /> 
                })
    
    function gridClick() {
        toGrid();
        toGrid();
        toGrid();
        toGrid();
    }
    function listClick() {
        toList();
        toList();
        toList();
        toList();
    }

    return (
        <div className="body">
            <div className="heading">
                <h1>Community</h1>
                <h4>Ideas from all around the world</h4>
            </div>

            <div className="searchPanel">

                <input id="searchBarId" placeholder="Search" className= "searchbar" type="text" onChange={event =>{setSearchKey(event.target.value)} } />
                <div className="flex">
                    <label id="uploadBtnId" className= "uploadBtn">
                        <input  type="file" />
                        <img src="./images/uploadicon.png" alt="" />
                    </label>
                    
                    <div id="searchBtnsId" className="searchBtns">
                        <div onClick={listClick} id= "btn1" className="searchBtn1 btnActive">
                            <img src="./images/listicon.png" alt="" />
                        </div>
                        <div onClick={gridClick} id= "btn2" className="searchBtn2">
                            <img src="./images/gridicon.png" alt="" />
                        </div>
                    </div>
                </div>
                

            </div>

            <div id = "contentPanelId" className="contentPanel">
                {Items}
            </div>

        </div>
    )
}