import React, { Component } from "react";
import { Field, reduxForm } from "redux-form"

class PostsNew extends Component {
  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          <Field
            label="Title" 
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"  
            name="categories"
            component={this.renderField}
          />
          <Field 
            label="Post Content" 
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    )
  }
};

function validate(values){
  const errors = {}
  //Validate the inputs from 'values'
  if(!values.title) {
    errors.title= "Enter a tittle";
  } else if(!values.categories){
    errors.categories= "Enter a category";
  } else if (!values.content) {
    errors.content = "Enter some content, please"
  }

  //If errors is empty, the form is fine to submit.
  //If errors has *any* properties, redux form assumes form is invalid

  return errors;
}

export default reduxForm({
  validate,
  //validate: validate => refers to the function
  form: 'PostsNewForm'
})(PostsNew);