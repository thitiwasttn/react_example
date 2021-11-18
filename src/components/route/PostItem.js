import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <hr/>
        </div>
    );
}

export default PostItem;