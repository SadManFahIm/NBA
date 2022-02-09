import React from "react";
import FontAwesome from 'react-fontawesome';
import {Link } from 'react-router-dom';

const SideNavItems = (props) => {

    const items = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'News',
            link: '/news'
        },
        {
            text: 'Videos',
            link: '/videos'
        }
    ]
    const showItems = () =>{
        return items.map( (item,i) => {
            return (
                <div
                    key={i}
                    style={{
                        fontWeight: "300",
                        fontSize: "18px",
                        color: "#ffffff",
                        padding: "10px"
                    }}
                >
                    <Link to={item.link} style={{ textDecoration: "none", color: "inherit"}}>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;