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
      </div>
    );
  }
}

export default Timeline;
