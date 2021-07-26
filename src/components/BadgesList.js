import React from "react";

// Importing CSS Styles.
import "./styles/BadgestList.css";

class BadgesList extends React.Component {
  render() {
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
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
