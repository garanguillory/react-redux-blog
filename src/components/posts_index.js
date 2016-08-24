import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
	componentWillMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		});
	}

	render(){
		return (
			<div className="blog-list">
					<h3>All Blog Posts</h3>
					<ul className="list-group">
						{this.renderPosts()}
					</ul>
					<div>
						<Link to="/posts/new" className="btn btn-success pull-xs-right" style={{marginTop: "1em"}}>
							Add a Post
						</Link>
					</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {posts: state.posts.all};
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({fetchPosts}, dispatch);
// }


// export default connect(null, mapDispatchToProps)(PostsIndex);

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);


