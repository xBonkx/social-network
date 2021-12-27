import {NavLink} from "react-router-dom";
import React from "react";

export const Contact = (props) => {
    let path = "dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}