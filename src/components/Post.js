import React from "react";
import Comment from "./Comment";
import '../css/Post.css'

const Post = (prop) => {
    let content = prop.content;
    const font_size = {
        fontSize: '50px'
    }
    let today = new Date().toISOString().split('T')[0]
    let state = {
        currentTime: today,
        location: 'bangkok'
    }
    return (
        <div>
            <h5>content: <span className={"text_color_red"} style={font_size}>{content}</span></h5>
            <h5>date : {state.currentTime}</h5>
            <h5>location : {state.location}</h5>
        </div>
    );
}

export default Post;