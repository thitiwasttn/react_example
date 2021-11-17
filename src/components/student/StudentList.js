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

    const deleteItemHandler = (deleteIndex) => {
        console.log(deleteIndex);
        const data = [...studentState.students];
        console.log(data);
        data.splice(deleteIndex, 1);
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
                            deleteStudent={deleteItemHandler.bind(this, index)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default StudentList;