import React, {useState} from "react";

const State = () => {

    const[state, setState] = useState({
        firstName: 'thitiwas',
        location: 'bangkok'
    });

    const click = () => {
        setState({
            firstName: 'Pee',
            location: 'Ching Mai'
        })
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