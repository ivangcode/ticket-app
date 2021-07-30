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

  width = {
    width: '60%',
    minWidth: '280px',
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="mb-2">
            <input
              /* Events  */
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              placeholder="First Name"
              style={this.width}
              // To avoid our information gets copied.
              // Connecting with BadgeNew.
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="mb-2">
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              value={this.props.formValues.lastName}
              style={this.width}
            />
          </div>
          <div className="mb-2">
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.props.formValues.email}
              style={this.width}
            />
          </div>
          <div className="mb-2">
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              placeholder="Twitter"
              value={this.props.formValues.twitter}
              style={this.width}
            />
          </div>
          <div className="mb-2">
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              placeholder="Job Title"
              value={this.props.formValues.jobTitle}
              style={this.width}
            />
          </div>

          <button
            type="submit"
            /* Button has also events, we may call them with onClick */
            onClick={this.handleClick}
            className="btn btn-primary"
            style={{ margin: "20px 58px" }}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
