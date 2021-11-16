import React, {useState} from "react";

const State = () => {

    const[state, setState] = useState({
        firstName: 'thitiwas',
        location: 'bangkok'
    });

    const click = () => {
        const updateState = {...state};
        console.log(updateState);
        updateState.firstName = 'Pee'
        setState(updateState)
        console.log(updateState);
    };

    return (
        <div>
            <div>First Name: {state.firstName}</div>
            <div>Location: {state.location}</div>
            <button onClick={click}>change</button>
        </div>
    )
}
export default State;