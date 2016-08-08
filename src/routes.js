import React from 'react';
import {Route, IndexRoute} from 'react-router';
	// the Route object is what we are going to use 
	// to define a match between a url and a component
import App from './components/app';



export default (
	<Route path="/" component={App} />
	// whenever the user is at this path "/" show this component 
);
