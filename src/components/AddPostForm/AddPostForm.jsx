import React from "react";
import "./AddPostForm.css";

const AddPostForm = ({ onAdd }) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What are u thinking about"
                className="form-control new-post-label"
            />
            <button
                onClick={() => onAdd("Leaarn Redux...")}
                type="submit"
                className="btn btn-outline-secondary">
                Add Post
            </button>
        </div>
    );
};

export default AddPostForm;
