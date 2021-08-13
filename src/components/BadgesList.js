import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Importing CSS Styles.
import "./styles/BadgestList.css";

class BadgesList extends React.Component {
  render() {
    if (!this.props.badges.length) {
      return (
        <div>
          <h3>Can't found any badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge.
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="badges-item__container">
                <div className="badges-item__avatar">
                  <img
                    src={badge.avatarUrl}
                    alt=""
                    className="badges-item__image"
                  />
                </div>
              <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none">
                <div className="badges-item__user">
                  <p className="badges-item__name">
                    {badge.firstName} {badge.lastName}{" "}
                  </p>
                  <div className="badges-item__twitter">
                    <span className="twitterIcon"></span>
                    <p>@{badge.twitter}</p>
                  </div>
                  <p className="badges-item__jobTitle">{badge.jobTitle}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
