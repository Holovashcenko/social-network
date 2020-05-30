import React from "react";
import s from "./Login.module.css"
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLength } from "../../utils/validators/validators";
const maxLength10 = maxLength(10);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength10]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength10]}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={"input"} />Remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div class={s.login}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;