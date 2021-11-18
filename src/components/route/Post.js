import React from "react";
import PostItem from "./PostItem";
import {useParams, useLocation} from "react-router-dom";


const Post = (props, q) => {
    let params = useParams();
    let id = params.id;

    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    let post = null;
    if (id === '1') {
        post = (
            <PostItem title={"post 1"} content={"this param is one"}/>
        );
    } else if (id === '2') {
        post = (
            <PostItem title={"post 2"} content={"this param is two"}/>
        );
    }

    return (
        <div>
            <PostItem title={"hello world"} content={"this is content of hello world"}/>
            <PostItem title={"goodbye world"} content={"this is speech of say goodbye"}/>
            {post}
            <PostItem title={"query "} content={useQuery().get("q")}/>
        </div>
    );
}

export default Post;