import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import moment from 'moment';
//import { useParams } from 'react-router-dom';

import { useParams, useHistory, Redirect, BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Footer from './../components/footer.jsx';
import Header from './../components/header.jsx';
import TimeList from './TimeList.jsx';

import { TimesCollectionAccess } from './../../../lib/times.js';

export default class CreateTime extends React.Component{

    renderCategories(default_category="Work"){
        var mappedCategories = this.props.categories.map((category) => {
            if (category==default_category){
                return(<option selected value={category}>{category}</option>);
            } else {
                return(<option value={category}>{category}</option>);
            }
        });
        return (
            <select name="categories" id="categorySelection" class="tanBG" >
                {mappedCategories}
            </select>
        );
    }
    seeNewTime() {
        var startTime = parseInt(moment($('#newTimeStart').val()).format('X'));
        var stopTime = parseInt(moment($('#newTimeEnd').val()).format('X'));
        var category = $('#categorySelection').val();

        TimesCollectionAccess.insert({
            start_time: startTime,
            stop_time: stopTime,
            category: category,
            is_active: false
        });
            alert('New Time Added!')
    }

    getData() {
        return (
            <div id="editTimeContainer">
                <h2 id="addNewTimeHeader">Add New Time</h2>
                <p>Start Time</p>
                <input id="newTimeStart" type="datetime-local" class="tanBG"/>
                <p>End Time</p>
                <input id="newTimeEnd" type="datetime-local" class="tanBG"/>
                <p>Category</p>
                { this.renderCategories("Work") }
                <br/>
                <button id="saveValuesBtn" class="greenBG" onClick={ () => this.seeNewTime() }>
                    Save
                </button>
            </div>
        );
    }

    render(){
        return (
           <div>
                <Helmet>
                    <title>Create Time</title>
                </Helmet>
                <Header />
                {this.getData()}
                <Footer />
           </div>
        );
    }
}
