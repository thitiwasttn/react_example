import React from 'react';
import Button from 'react-bootstrap/Button';

const Student = (props) => {
    const {data, deleteStudent, editStudent} = props;
    const updateNameInput = React.createRef();
    const onDeleteStudent = () => {
        deleteStudent();
    }

    const onEditStudent = () => {
        const editData = {
            id: data.id,
            name: data.name,
            editStatus: !data.editStatus
        };
        editStudent(data.id, editData);
    }

    const onCancelEdit = () => {
        const editData = {id: data.id, name: data.name, editStatus: false};
        editStudent(data.id, editData);
    }

    const onConfirmEdit = () => {
        console.log('onConfirmEdit');
        const editData = {
            id: data.id,
            name: updateNameInput.current.value,
        };

        editStudent(data.id, editData);
    }

    const editForm = (
        <div className={"row"}>
            <div className={"input-group mb-3"}>
                <input
                    type="text"
                    name={"updateName"}
                    className={"form-control col-6"}
                    defaultValue={data.name}
                    ref={updateNameInput}
                />
                <Button
                    onClick={onCancelEdit.bind()}
                    className={"btn btn-primary btn-sm ml-1 col-3"}
                >
                    Cancel
                </Button>

                <Button
                    onClick={onConfirmEdit.bind()}
                    className={"btn btn-primary btn-sm ml-1 col-3"}
                >
                    Ok
                </Button>
            </div>
        </div>
    );


    return (
        <div className={"card"}>
            <div className={"card-header text-center"}>
                <button
                    onClick={onEditStudent}
                    className={"btn btn-outline-success btn-s mr-1"}
                >
                    edit
                </button>
                <button
                    onClick={onDeleteStudent}
                    className={"btn btn-outline-danger btn-s mr-1"}
                >
                    delete
                </button>
            </div>
            <div className={"card-body"}>
                <dl className={"row"}>
                    <dt className={"col-6"}>id:</dt>
                    <dd className={"col-6"}>{data.id}</dd>
                    <dt className={"col-6"}>name:</dt>
                    <dd className={"col-6"}>{data.name}</dd>
                </dl>
                {
                    props.data.editStatus ?
                        editForm : null
                }
            </div>
        </div>
    );
}

export default Student;