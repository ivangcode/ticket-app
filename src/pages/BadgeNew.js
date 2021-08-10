import React from "react";

// Components brougth them.
// import Navbar from '../components/Navbar';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

import api from "../api";

// Utilities.
import logo from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";

// Render
class BadgeNew extends React.Component {
  // README

  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (event) => {
    // Disable overwritten on the form.
    const nextForm = this.state.form;
    nextForm[event.target.name] = event.target.value;

    // Setting the State.
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: true });

      this.props.history.push(`/badges`);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                avatarUrl="https://pbs.twimg.com/profile_images/1323471263596163073/uVmPhabt_400x400.jpg"
              ></Badge>
            </div>

            <div className="col">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
