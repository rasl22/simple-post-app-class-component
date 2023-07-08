import React from "react";
import "./SearchPanel.css";

class SearchPanel extends React.Component {
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Search by posts"
            />
        );
    }
}

export default SearchPanel;
