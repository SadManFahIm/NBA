import React from "react";
import VideosListTemplate from "../VideosListTemplate";

const VideosRelated = (props) => {
    return (
        <div>
            <VideosListTemplate
                data={props.data}
                teams={props.teams}
            />
        </div>
    )
}

export default VideosRelated