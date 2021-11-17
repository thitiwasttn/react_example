import React, {useState} from "react";
import Student from "./Student";

const StudentList = () => {
    const [studentState, setStudentState] = useState(
        {
            students: [
                {
                    id: 1,
                    name: 'Jeerawuth'
                },
                {
                    id: 2,
                    name: 'Thitiwas'
                },
                {
                    id: 3,
                    name: 'Nupan'
                },
                {
                    id: 4,
                    name: 'CCCCCC'
                },
                {
                    id: 5,
                    name: 'DWDWDWADWADAD'
                },
                {
                    id: 6,
                    name: 'Pporgorgkrgk'
                }
            ]
        }
    );

    const deleteItemHandler = (id) => {
        const data = [...studentState.students];
        const index = data.findIndex(value => value.id === id);
        data.splice(index, 1);
        setStudentState({students: data});
    }
    return (
        <div className={"row"}>
            <h1>StudentList</h1>
            {studentState.students.map((value, index) => {
                return (
                    <div key={value.id} className={"col-lg-3 col-sm-4 mt-2"}>
                        <Student
                            data={value}
                            deleteStudent={deleteItemHandler.bind(this, value.id)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default StudentList;