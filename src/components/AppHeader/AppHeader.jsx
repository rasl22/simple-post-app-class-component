import "./AppHeader.css";

import React from "react";

const AppHeader = ({ liked, allPosts }) => {
    return (
        <div className="app-header d-flex">
            <h1>Tayjanov G'asirbek</h1>
            <h2>
                {allPosts} posts, like {liked}
            </h2>
        </div>
    );
};

export default AppHeader;
