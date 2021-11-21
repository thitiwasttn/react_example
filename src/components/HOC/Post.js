import React from "react";
import Box from "./Box";

const Post = (props) => {
    const data = [
        {id: 1, name: 'Thitiwas'},
        {id: 2, name: 'Nupan'}
    ]

    const list = data.map((value, index) => {
        return (
            <div key={value.id}>
                <span>id : {value.id}</span>
                <span>name :{value.name}</span>
            </div>
        );
    });

    return (
        <div>
            <Box>
                {list}
            </Box>
        </div>
    );
}

export default Post;