import React from "react";

import {Link} from 'react-router-dom'
import CardInfo from "../CardInfo/cardInfo";

const VideosListTemplate = (props) => {
    return props.data.map( (item,i) => {
        return <Link to={`/videos/${item.id}`} key={i}>
                    <div className="row p-2">
                        <div className="col-md-2 left"
                            style={{
                                background:`url(/images/videos/${item.image})`
                            }}
                        >
                            <div></div>

                        </div>
                        <div className="col-md-10 right">
                            <CardInfo
                                teams={props.teams}
                                team={item.team}
                                date={item.date}
                            />
                            <p>{item.title}</p>
                        </div>
                    </div>
                </Link>
    })
}
export default VideosListTemplate