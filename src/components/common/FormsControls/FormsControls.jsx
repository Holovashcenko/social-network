import React from "react";
import s from "./FormsControls.module.css";

export const Textarea = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <div><textarea {...props.input}></textarea></div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}