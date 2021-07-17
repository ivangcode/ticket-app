import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css'

// This is an example to see how works props.
// const firstName = 'Ivan';
// const lastName = 'Garcia';

// When we got to rendering, return the next.
class Badge extends React.Component { 
  render() {
    const {
      firstName,
      lastName,
      avatarUrl,
      jobTitle,
      twitter
    } = this.props;
    return (
      <div className="Badge" >
        <img className="Badge__header" src={confLogo} alt="Logo de la Conferencia." />

        <div className="Badge__section-name" >
          <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
          <h1>
          {/* We called the props from index.js */}
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info" >
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer" >#platziconf</div>
      </div>
    );
  }

}

export default Badge;