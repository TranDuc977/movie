import { Fragment } from "react";
import { Redirect, Route } from "react-router";


export const UserTemplate = (props) => { //path, exact, Component
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        return <Fragment>
            <div class="lg:flex">
                <Component {...propsRoute}/>
            </div>
        </Fragment>
    }} />
}

