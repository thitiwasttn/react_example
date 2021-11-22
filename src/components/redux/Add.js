import React from "react";
import {connect} from 'react-redux'


const Add = (props) => {
    let state = {
        id: new Date().getTime().toString(),
        name: 'Thitiwas',
        score: 44
    }

    function onAdd() {
        props.addStudentAtStore(state);
    }

    return (
        <div>
            <button onClick={onAdd}>
                Add
            </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addStudentAtStore: (newStudentData) => {
            return dispatch({type: 'ADD_STUDENT', playload: newStudentData})
        }
    }
}

export default connect(null, mapDispatchToProps)(Add);