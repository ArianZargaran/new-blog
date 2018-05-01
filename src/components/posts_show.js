import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <button
          className="btn btn-danger float-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete post
        </button>
        <div>
          <Link to="/">Back to Index</Link>
          <h1 className="font-weight-bold my-3">{post.title}</h1>
          <h2 className="lead">Category: {post.categories}</h2>
          <p className="font-weight-light my-2">{post.content}</p>
        </div>
      </div>
    );
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
