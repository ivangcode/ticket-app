// Dependencies
import React from "react";

// Components
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import BadgeDetails from "./BadgeDetails";

// The How
// This page was made to show the user details. It mean read the data.

class BadgeDetailsContainer extends React.Component {
  // To request Data remeber that:
  // We got to initiliaze State
  // Then in write the fetch in the Mount
  // Into the fetch define the path of the data and the try-catch
  // At last set the loader and the error conditionals to improve the UX
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  };
  // At this component it mount everything would be rendered
  componentDidMount = () => {
    this.fetchData();
  };
  // This is the function to request data from the server or API.
  fetchData = async () => {
    // We use the this.setState to modify the state.
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };


  handleDeleteBadge = async() => {
    this.setState({ loading: true });
    try {

      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push("/badges");

    } catch (error) {
      this.setSate({ loading: false, error: error });
    }
  };

  // This method renderize everything in it.
  render() {
    // If it have loading then return PageLoading
    if (this.state.loading) {
      return <PageLoading></PageLoading>;
    }
    // If it have error return the component with the error in it.
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    // After all that, return the component with the prop badge.
    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
