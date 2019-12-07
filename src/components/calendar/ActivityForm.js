import React from "react";

class ActivityForm extends React.Component {
  //store the typed input
  state = {
    input: ""
  };

  //update the state
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //submit form
  handleSubmit = event => {
    event.preventDefault(); //prevents page reloading
    this.props.onSubmit({
      input: this.state.input,
    });
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Enter your activity"
        />
        <button onClick={this.handleSubmit}>Add activity</button>
      </form>
    );
  }
}

export default ActivityForm;