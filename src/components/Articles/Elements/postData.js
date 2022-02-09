import React from "react";

const PostData = (props) => {
    return (
        <div
            style={{
                background:"#ffffff"
            }}
        >
            <strong>Date:</strong> <span>{props.data.date}</span><br/>
            <strong>Author:</strong> <span>{props.data.author}</span>

        </div>
    )
}

export default PostData