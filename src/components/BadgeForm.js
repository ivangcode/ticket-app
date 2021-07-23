import React from "react";

class BadgeForm extends React.Component {
  // Initializing the State.
  // state = {};

  handleChange = (event) => {
    // I gonna save the State information. [Handle State]
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    console.log("Button was clicked!");
  };

  // Sending the form info. to the state and displaiying in Console.
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form was submitted`);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              /* Events  */
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              // To avoid our information gets copied.
              // Connecting with BadgeNew.
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <button
            type="submit"
            /* Button has also events, we may call them with onClick */
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
