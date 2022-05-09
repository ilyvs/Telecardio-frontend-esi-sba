import React from 'react';
import {useLocation} from 'react-router-dom';
import { useState, setState, useEffect } from 'react';
import View_medecin from './View_medecin';
import axios from 'axios'
import PropTypes from "prop-types";

class EditRdv extends React.Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    render(){
        const { match, location, history } = this.props
        console.log('zebi',this.props)
        return(
            <div>
               
            </div>
        )
    }
}

export default EditRdv;