import React from "react";
import {connect} from 'react-redux';

const Get = (props) => {
    const allStudents = props.studentsFromStore;
    console.log(allStudents);
    return (
        <div>
            {
                allStudents.map(item => (
                    <div>
                        {item.id}
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        studentsFromStore: state.students
    }
}

export default connect(mapStateToProps, null)(Get);