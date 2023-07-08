import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import AddPostForm from "../AddPostForm/AddPostForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./app.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label: "Learning ReactJS ..",
                    important: false,
                    like: false,
                    id: 1,
                },
                {
                    label: "In friday I will check Your projects",
                    important: false,
                    like: false,
                    id: 2,
                },
                {
                    label: "In friday the group will be filtred))",
                    important: false,
                    like: false,
                    id: 3,
                },
            ],
        };
        console.log(this.state.data);
        this.onDelete = this.onDelete.bind(this);
        this.AddItem = this.AddItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.maxId = this.state.data.length + 1;
    }

    onDelete(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr,
            };
        });
        this.maxId = this.state.data.length;
    }

    AddItem(PostItem) {
        const newItem = {
            label: PostItem,
            important: false,
            like: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    }
    onToggleImportant(id) {
        console.log(`Importnat ${id}`);
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const oldItem = data[index];
            const newItem = { ...oldItem, important: !oldItem.important };
            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];
            return {
                data: newArr,
            };
        });
    }

    onToggleLike(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const oldItem = data[index];
            const newItem = { ...oldItem, like: !oldItem.like };
            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];
            return {
                data: newArr,
            };
        });
        console.log(this.state.data);
    }

    render() {
        const liked = this.state.data.filter((item) => item.like).length;
        const AllPosts = this.state.data.length;

        return (
            <div className="app">
                <AppHeader liked={liked} AllPosts={AllPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.onDelete}
                    onToggleLike={this.onToggleLike}
                    onToggleImportant={this.onToggleImportant}
                />
                <AddPostForm onAdd={this.AddItem} />
            </div>
        );
    }
}
