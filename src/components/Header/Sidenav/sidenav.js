import React from "react";
import SideNav from 'react-simple-sidenav'
import SideNavItems from "./sideNavItems";

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                title="My nav"
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                openFromRight={true}
                navStyle={{
                    background: '#242424',
                    maxWidth: '220px',
                    color: '#242424'
                }}
            >
                <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default SideNavigation;