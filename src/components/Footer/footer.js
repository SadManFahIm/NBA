import React from "react";
import {Link} from 'react-router-dom'
import {CURRENT_YEAR} from "../../config";

const Footer = (props) => {
    return (
        <div
            style={{
                marginTop: "20px",
                background: "#242424",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Link to="/footer">
                <img src="/images/nba_logo.png" alt="Nba logo"
                     style={{
                         height: "10px",
                         width:"35px",
                         padding: "10px"
                     }}/>
            </Link>
            <div
                style={{
                    color: "#ffffff"
                }}
            >
                @Zahid {CURRENT_YEAR} All rights reserved
            </div>
        </div>
    )
}

export default Footer;