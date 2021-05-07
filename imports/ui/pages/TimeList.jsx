import React from 'react';
import {Helmet} from "react-helmet";
import moment from 'moment';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

import Footer from './../components/footer.jsx';
import Header from './../components/header.jsx';

import { TimesCollectionAccess } from './../../../lib/times.js';

export default class TimeList extends React.Component{
  datesAvaliable(){
    var dates = [];
    TimesCollectionAccess.find({is_active:false},{sort: {start_time:-1}}).fetch().map((timeItem) => {
      var date=moment(timeItem.start_time*1000).format("MMMM Do YYYY");
      if(!(dates.indexOf(date) > -1)){
        dates.push(date);
      }
    });

    return(
      dates
    );
  }
  renderTimeItem(timeItem){
    return(
      <div key={timeItem._id} className="timeDetails">
        <NavLink to={"/" + timeItem._id}>
          <p>{start = moment(timeItem.start_time*1000).format('LT')} - {moment(timeItem.stop_time*1000).format('LT')}</p>
          <p>{timeItem.category}</p>
        </NavLink>
      </div>
    );
  }
  renderTimesInDate(date){
    const allTimesInDate = TimesCollectionAccess.find({is_active:false},{sort: {start_time:-1}}).fetch().map((timeItem) =>{
      var currentDate = moment(timeItem.start_time*1000).format("MMMM Do YYYY");
      if (currentDate == date){
        return(this.renderTimeItem(timeItem));
      }
    });
    return(
      allTimesInDate
    );
  }
  renderTimeList(){
    var dates = this.datesAvaliable();
    const dateList = dates.map((date, index) =>
      <div key={index.toString()} className="time_item">
        <p>{date}</p>
        {this.renderTimesInDate(date)}
      </div>
    );
    return (
      dateList
    );
  }

  render(){
    return (
       <div>
         <Helmet>
           <title>Error</title>
         </Helmet>
         <Header />
         <h2>Time Log</h2>
         <NavLink to="/CreateTime" id="manuallyInsertBtn" className="dropShadow greenBG">
           Manually Insert Time
         </NavLink>
         <hr/>
         <div className="times">
            { this.renderTimeList() }
         </div>
         <Footer />
       </div>
    );
  }
}
