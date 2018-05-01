import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <p>{post.content}</p>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="jumbotron-fluid">
          <div className="text-right">
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>
          <div className="container flex-row">
            <img
              className="img-thumbnail"
              alt="Arian Zargaran profile"
              height="100px"
              width="100px"
              src="https://avatars0.githubusercontent.com/u/29388744?s=400&u=a20839a1b6b20cc6b73ac6e1f009749f6b5e47ef&v=4"
            />
            {"  "}
            <h1 className="d-inline-block font-weight-bold">
              Arian Zargaran -{" "}
              <p className="badge badge-secondary font-italic">The mock Blog</p>
            </h1>
          </div>
        </div>
        <h2 className="row pt-3">Posts</h2>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
