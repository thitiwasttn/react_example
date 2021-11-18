import React, {useState} from "react";

const LoginForm = (props) => {

    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const onInputChange = (event) => {
        let tempState = {...state}
        tempState[event.target.name] = event.target.value;
        setState(tempState);
    };

    const onSubmit = event => {
        console.log(state);
    };

    return (
        <div className={"col-6 mt-5 mx-auto card"}>
            <div className={"card-body"}>
                <form>
                    <div className={"form-group"}>
                        <label htmlFor="username">User Name</label>
                        <input
                            type="text"
                            className={"form-control is-valid"}
                            id={"username"}
                            name={"username"}
                            onChange={onInputChange}
                        />
                        <div className={"valid-feedback"}>
                            พบผู้ใช้งาน
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            className={"form-control is-invalid"}
                            id={"password"}
                            name={"password"}
                            onChange={onInputChange}
                        />
                        <div className={"invalid-feedback"}>
                            รหัสผ่านสั้นเกินไป
                        </div>
                    </div>
                    <div className={"text-center"}>
                        <button
                            type={"button"}
                            className={"btn btn-primary my-1"}
                            onClick={onSubmit}
                        >
                            login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;