import React from "react";
import Skeleton from "react-loading-skeleton";

import "./styles/BadgestList.css";
import "./styles/PageLoading.css";
import "../pages/styles/Badges.css";
// import Loader from './Loader';


// Here is made the animation component. It used Skeleton Library to get this.
function PageLoading() {
  return (
    <React.Fragment>
      <div className="Badge-container">
        <div className="Badges-list">
          <div className="Badges__container">
            <div className="badges-item__container">
              <div className="avatar">
                <Skeleton circle={true} height={80} width={80} />
              </div>
              <div className="badges-item__user">
                <Skeleton height={31} width={250} />
                <Skeleton height={21} width={300} />
                <Skeleton height={21} width={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PageLoading;
