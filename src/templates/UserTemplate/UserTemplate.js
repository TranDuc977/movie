import { Fragment, useEffect } from "react";
import { Redirect, Route } from "react-router";


export const UserTemplate = (props) => { //path, exact, Component
    const { Component, ...restProps } = props;
    useEffect(() => {
        window.scrollTo(0, 0);

    })

    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        return <Fragment>
            <div class="lg:flex">
                <Component {...propsRoute}/>
            </div>
        </Fragment>
    }} />
}

