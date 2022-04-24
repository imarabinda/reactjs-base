import React from "react";
import {routes} from '../configs/routes';
import {Routes,Route} from "react-router-dom";;

const Router = () =>{
    return (
        <Routes>
            {routes.entrySeq().map((value)=>{
                const {exact,url,Component} = value[1];
                return <Route exact={!exact ? true : exact} path={url} key={value[0]} element={<Component />}/>
            })}
        </Routes>
    );
}

export default Router;