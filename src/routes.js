import React from 'react';
import {Route, IndexRoute} from 'react-router';
	// the Route object is what we are going to use 
	// to define a match between a url and a component
import App from './components/app';
import PostsIndex from './components/posts_index';


export default (
		// whenever the user is at this path "/" show this component 
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
	</Route>
);
