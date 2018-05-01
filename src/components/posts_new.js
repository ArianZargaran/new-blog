import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createPost } from "../actions";
import { Link } from "react-router-dom";

import "../styles/NewPost.css";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <small className="text-danger">
          {field.meta.touched ? field.meta.error : " "}
        </small>
      </div>
    );
  }

  renderTextarea(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <textarea className="form-control" rows="5" {...field.input} />
        <small className="text-danger">
          {field.meta.touched ? field.meta.error : " "}
        </small>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => this.props.history.push("/"));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField} />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderTextarea}
          />
          <button className="btn btn-primary">Create Post</button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  //Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a tittle";
  }
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter some content, please";
  }

  //If errors is empty, the form is fine to submit.
  //If errors has *any* properties, redux form assumes form is invalid

  return errors;
}

export default reduxForm({
  validate,
  //validate: validate => refers to the function
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
