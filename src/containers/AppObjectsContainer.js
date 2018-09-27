
import React, { Component } from 'react';

import AppObjectsComponent from '../components/AppObjectsComponent'
import * as actionCreators from "../actions";
import {connect} from "react-redux";

class AppObjectsContainer extends Component {

    render() {

        return (
            //returns a "AppObjectsComponent"
            <AppObjectsComponent/>
        );
    }
}

const mapStateToProps=state=>{

    return {
        appObjects: state.appObject,
        appObjectsIsLoading: state.appObjectIsLoading,
        appObjectsHasErrored: state.appObjectHasErrored,
    }
};

export default connect(mapStateToProps, actionCreators)(AppObjectsContainer);