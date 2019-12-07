import React from "react";

class ActivityForm extends React.Component {
  state = {
    input: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
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