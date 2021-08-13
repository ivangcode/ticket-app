import React from "react";

// Components brougth them.
// import Navbar from '../components/Navbar';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

import api from "../api";

// Utilities.
import logo from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";

// Render
class BadgeEdit extends React.Component {
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

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });

    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
    // Disable overwritten on the form.
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;

    // Setting the State.
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
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
        <div className="BadgeEdit__hero">
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
              <h1>Edit Attendant</h1>
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

export default BadgeEdit;
