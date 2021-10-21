import { Fragment } from "react";
import { Route } from "react-router";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

export const HomeTemplate = (props) => { //path, exact, Component
    const {Component,...restProps} = props;

    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        return <Fragment>
            <Header {...propsRoute}/>
            <Component {...propsRoute}/>
            <hr/>
            <Footer/>
         </Fragment>
    }}/>
}