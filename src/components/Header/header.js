import React from "react";
import style from './header.css'
import {Link} from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import SideNav from "./Sidenav/sidenav";



const Header = (props) => {

    const navBars = () => {
        return (
            <div className={style.bars}
                 onClick={props.onOpenNav}
            >
                <FontAwesome
                    name="bars"
                    style = {{
                        color : '#ffffff',
                        padding : "5px"
                    }}
                />
                <span>Click</span>
            </div>
        )
    }

    const logo = () => (
            <Link to="/" style={{ flexGrow: 1, paddingTop: "8px"}}>
                <img src="/images/nba_logo.png" alt="Nba logo" style={{ width:"35px" }}/>
            </Link>
    )

    return (
        <header style={{background: "#242424",borderBottom: "1px solid #000000",color: "white"}}>
            <SideNav {...props}/>
            <div style={{display: "flex"}}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}
export default Header;