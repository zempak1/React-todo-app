import React, { Component } from "react";
import './item-status-filter.css';

export default class StatusFilter extends Component {

    render() {
        return (
            <div className="btn-group status-filter">
                <button type="button" 
                        className="btn btn-info">All</button>
                <button type="button"
                        className="btn btn-outline-secondary">Active</button>
                <button type="button"
                        className="btn btn-outline-secondary">Done</button>
            </div>
        );
    };
}
