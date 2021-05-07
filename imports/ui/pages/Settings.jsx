import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import Footer from './../components/footer.jsx';
import Header from './../components/header.jsx';
export default class Settings extends React.Component{
    render(){
        return (
           <div>
               <Helmet>
                   <title>Error</title>
               </Helmet>
               <Header />
               <h1>Something Wrong Happened. Probably a 404 Error</h1>
               <p>Someday we'll make settings. That day is not today.</p>
               <Footer />
           </div>
        );
    }
}
