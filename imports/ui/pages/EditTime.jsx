import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import moment from 'moment';

import { useParams, useHistory, Redirect, BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Footer from './../components/footer.jsx';
import Header from './../components/header.jsx';
import TimeList from './TimeList.jsx';

import { TimesCollectionAccess } from './../../../lib/times.js';

export default class EditTime extends React.Component{

    renderCategories(default_category="Work"){
        var mappedCategories = this.props.categories.map((category) => {
            if (category==default_category){
                return(<option selected value={category}>{category}</option>);
            } else {
                return(<option value={category}>{category}</option>);
            }
        });
        return (
             <select name="categories" id="categorySelection" class="tanBG">
                {mappedCategories}
            </select>
        );
    }
    seeNewTime(passedID) {
        var startTime = parseInt(moment($('#newTimeStart').val()).format('X'));
        var stopTime = parseInt(moment($('#newTimeEnd').val()).format('X'));
        var category = $('#categorySelection').val();

        var editStart, editEnd, editCat = false;

        if (startTime!=null){
            TimesCollectionAccess.update({_id: passedID},{$set:{
                    start_time: startTime
                }
            });

            editStart = true;
        } if (stopTime!=null) {
            TimesCollectionAccess.update({_id: passedID},{$set:{
                    stop_time: stopTime
                }
            });

            editEnd = true;
        } if (category!=null){
            TimesCollectionAccess.update({_id: passedID},{$set:{
                    category: category
                }
            });

            editCat = true;
        } else {
            console.error("Update db was called, but nothing was updated dumb dumb!");
        }

        var alertMess = null;

        //Using editStart - editEnd - editCat

        if (editStart && editEnd && editCat) {
            alert('Times and category have been updated!');
        }

    }

    getData() {

        let currentEvent;
        let passedID = this.props.passedID;
        TimesCollectionAccess.find({_id: passedID}).fetch().map((item) => {
            if(item._id == passedID) {
                currentEvent = item;
            }
        });

        return (
            <div id="editTimeContainer">
                <h2>{moment(currentEvent.start_time*1000).format('MMMM Do YYYY')}</h2>
                <p>{moment(currentEvent.start_time*1000).format('LT') + " - " + moment(currentEvent.stop_time*1000).format('LT')}</p>
                <hr/>

                <p>Start Time</p>
                <input id="newTimeStart" class="tanBG" type="datetime-local" defaultValue={moment(currentEvent.start_time*1000).format('YYYY[-]MM[-]DD[T]HH[:]mm')}/>

                <p>End Time</p>
                <input id="newTimeEnd" class="tanBG" type="datetime-local" defaultValue={moment(currentEvent.stop_time*1000).format('YYYY[-]MM[-]DD[T]HH[:]mm')}/>

                <p>Category</p>
                { this.renderCategories(currentEvent.category) }

                <br/>
                <button id="saveValuesBtn" class="greenBG" onClick={ () => this.seeNewTime(passedID, currentEvent) }>
                    Save
                </button>
            </div>
        );
    }

    render(){
        return (
           <div>
                <Helmet>
                    <title>Edit Time</title>
                </Helmet>
                <Header />

                {this.getData()}

                <Footer />
           </div>
        );
    }
}
