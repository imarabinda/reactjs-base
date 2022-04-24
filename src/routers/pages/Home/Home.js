import React from "react";
import { testAction } from "../../../modules/common/actions";
import { dispatch, select } from "../../../redux/store";
import { testSelector } from "../../../modules/common/selectors";
export const Home = (props)=>{

    console.log(select(testSelector),'here');
    
    const handleClick = ()=>{
        dispatch(testAction(true))
        console.log(select(testSelector),'here');
    }

    return (
        <div>
            Hi, You're in home.
            <button onClick={handleClick}>HI</button>
        </div>
    )
}
