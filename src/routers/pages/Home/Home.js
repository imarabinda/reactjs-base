import React from "react";
import { dispatch, select } from "../../../redux/store";
import { themeSelector } from "../../../modules/common/selectors";
import withTheme from "../../../theme/withTheme";
import { switchMode } from "../../../modules/common/actions";
const Home = (props)=>{

    console.log(props);
    const handleClick = ()=>{
        dispatch(switchMode());
    }
    const currentTheme = select(themeSelector);

    return (
        <div>
            <span style={{color:props.theme.colors.primary}}> Hi, You're in home.Current Theme {currentTheme}</span>
            <button style={styles.button(props.theme)} onClick={handleClick}>Change Theme</button>
        </div>
    )
}

const styles ={
    button:theme=>({
        backgroundColor:theme.colors.bgColor,
        color:theme.colors.primary,
        padding:'10 10 10 10',
        borderRadius:5,
        border: 'solid 1px',
        outline:'none',

    })
}

export default withTheme(Home,'Home')
