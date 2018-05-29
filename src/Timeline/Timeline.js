import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  render() {
    return (
      <div className="profile-timeline-wrapper px-3 pt-3 ">

        <div className="my-4">
          <h2 className="d-inline-block f4 text-normal my-1">Contribution activity</h2>
          <span className="Details mb-4 profile-rollup-toggle">
            <button className="btn-link float-right mb-2 py-2 text-gray">
              <span className="profile-rollup-toggle-open">
                Jump to
                &nbsp;
                <svg className="octicon octicon-triangle-down pt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                  <path fillRule="evenodd" d="M0 5l6 6 6-6H0z"></path>
                </svg>
              </span>
            </button>
          </span>
        </div>

        <div className="profile-timeline position-relative width-full mb-4">
          <div className="profile-timeline position-relative">
            <div className="profile-timeline-line">
              <h3 className="profile-timeline-month-line d-inline-block position-relative width-full h6 m-0 pr-2 py-1">
                <span className="profile-timeline-month-heading bg-white position-absolute pr-2">
                  May &nbsp;
                  <span className="text-gray">2018</span>
                </span>
              </h3>
              <div className="Details ml-3 pl-4 position-relative profile-rollup-wrapper py-4">
                <h4 className="m-0 f5 text-normal text-gray profile-rollup-toggle">
                  <span className="timeline-item-icon">
                    <svg className="octicon octicon-repo-push" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"></path>
                    </svg>
                  </span>
                  <button className="btn-link float-right text-gray-light profile-rollup-toggle profile-rollup-toggle-open">
                    <svg className="octicon octicon-unfold" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                      <path fillRule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path>
                    </svg>
                  </button>
                  <button className="btn-link text-gray css-truncate css-truncate-target">
                    Created 57 commits in 2 repositories
                  </button>
                </h4>
              </div>
              <a className="btn btn-outline border-gray-dark width-full f6 mt-3">Show more activity</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Timeline;
