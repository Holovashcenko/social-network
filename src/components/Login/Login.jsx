import React from "react";
import s from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLength } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const maxLength30 = maxLength(30);

const LoginForm = (props) => {
    /* jshint ignore:start */
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} placeholder={"Email"} name={"email"} type={"email"} validate={[required, maxLength30]} /></div>
            <div><Field component={Input} placeholder={"Password"} name={"password"} type={"password"} validate={[required, maxLength30]} /></div>
            <div><Field component={Input} type={"checkbox"} name={"rememberMe"} />Remember me</div>
            <div><button>Login</button></div>
        </form>
    );
    /* jshint ignore:end */
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit = formData => props.login(formData.email, formData.password, formData.rememberMe);
    if (props.isAuth) return <Redirect to={"/profile"} />
    /* jshint ignore:start */
    return (
        <div className={s.login}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
    /* jshint ignore:end */
};

const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);