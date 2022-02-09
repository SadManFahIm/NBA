import React from "react";

const CardInfo = (props) => {
    const teamName = (teams,team) => {
        let data = teams.find( (item) => {
           return item.id === team
        });
        if (data){
            return data.name
        }
    }
    return (
        <div>
            <span className="badge badge-danger">
                {teamName(props.teams,props.team)}
            </span>
            <span>{props.date}</span>
        </div>
    )
}
export default CardInfo;