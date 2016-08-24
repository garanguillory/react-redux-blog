import React from 'react';
import {Route, IndexRoute} from 'react-router';
	// the Route object is what defines a match
	// between a url and a component see react-router docs
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
		// if the route only matches the parent,
		// show the IndexRoute component
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);
