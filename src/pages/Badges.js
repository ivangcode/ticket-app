import React from "react";

import "./styles/Badges.css";
// import Navbar from '../components/Navbar';
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import { Link } from "react-router-dom";
import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    data: undefined,
    error: null,
  };

  // The best place to make an API petition is the componentDidMount()
  componentDidMount() {
    this.fetchingData();
  }

  fetchingData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      let elements = 5;
      return [...Array(elements)].map((_e, i) => <PageLoading key={i} />);
    }

    if (this.state.error) {
      return <PageError error={this.state.error}></PageError>;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                src={confLogo}
                alt="Conf Logo"
                className="Badges_conf-logo"
              />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data}></BadgesList>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
