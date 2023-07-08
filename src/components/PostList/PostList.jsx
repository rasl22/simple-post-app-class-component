import React from "react";
import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";

function PostList({ posts, onDelete, onToggleLike, onToggleImportant }) {
    const element = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)}
                />
            </li>
        );
    });

    return <ul className="app-list list-group">{element}</ul>;
}

export default PostList;
