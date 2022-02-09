import React from "react";
import {URL} from '../../../config'

const TeamInfo = (props) => {
    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <div className="article_logo">
                    <img className="article_logo" src={`/images/teams/${props.team.logo}`} alt=""/>
                </div>

            </div>
            <div className="col-md-8">
                <span>{props.team.city} {props.team.name}</span>
                <div>
                    <strong>W-{props.team.stats[0].wins} || L-{props.team.stats[0].defeats}</strong>
                </div>
            </div>
        </div>
    )
}

export default TeamInfo