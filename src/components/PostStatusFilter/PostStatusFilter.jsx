import React from "react";

class PostStatusFilter extends React.Component {
    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-primary">All</button>
                <button className="btn btn-outline-secondary">Like</button>
            </div>
        );
    }
}

export default PostStatusFilter;
