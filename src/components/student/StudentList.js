import React, {useState} from "react";
import Student from "./Student";

const StudentList = () => {
    const [studentState, setStudentState] = useState(
        {
            students: [
                {
                    id: 1,
                    name: 'Jeerawuth',
                    editStatus: false
                },
                {
                    id: 2,
                    name: 'Thitiwas',
                    editStatus: false
                },
                {
                    id: 3,
                    name: 'Nupan',
                    editStatus: false
                },
                {
                    id: 4,
                    name: 'CCCCCC',
                    editStatus: false
                },
                {
                    id: 5,
                    name: 'DWDWDWADWADAD',
                    editStatus: false
                },
                {
                    id: 6,
                    name: 'Pporgorgkrgk',
                    editStatus: false
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

    const editItemHandler = (editKey, data) => {
        // console.log('editKey ', editKey, 'data ', data);
        const students = [...studentState.students];
        const editIndex = students.findIndex(value => value.id === editKey);
        students[editIndex] = data;
        setStudentState({students: students});
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
                            editStudent={editItemHandler.bind(this)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default StudentList;