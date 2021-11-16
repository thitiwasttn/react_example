import React from "react";

const PropFunction = (prop) => {
    let shareWord_function = prop.shareWord;
    return (
        <div>secret word: {shareWord_function()}</div>
    )
}

export default PropFunction;