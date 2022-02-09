import React from "react";
import {Link} from "react-router-dom";


const Button = (props) => {
    let template = null;

    switch (props.type) {

        case 'loadmore':
            template = (
                <div className="btn btn-primary"
                     onClick={props.loadMore}
                >
                    {props.cta}
                </div>
            );
            break;
        case 'linkTo':
            template = (
                <Link to={props.linkTo} className="btn btn-primary">
                    {props.cta}
                </Link>
            )
            break;
        default:
            template = null;
    }
    return template

}

export default Button;
