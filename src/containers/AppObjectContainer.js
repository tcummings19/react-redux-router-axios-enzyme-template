
import React, { Component } from 'react';

import AppObjectComponent from '../components/AppObjectComponent'
import * as actionCreators from "../actions";
import {connect} from "react-redux";

class AppObjectContainer extends Component {

    render() {

        return (
            //returns a "AppObjectComponent"
            <AppObjectComponent/>
        );
    }
}

const mapStateToProps=state=>{

    return {
        appObject: state.appObject,
        appObjectIsLoading: state.appObjectIsLoading,
        appObjectHasErrored: state.appObjectHasErrored,
    }
};

export default connect(mapStateToProps, actionCreators)(AppObjectContainer);