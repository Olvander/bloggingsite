import React, { Component } from 'react';
import '../styles/Data.css';
import Blogs from './Blogs.js';
import Homepage from './Homepage.js';
import ReactDOM from "react-dom";

class Data extends Component {

    constructor(props) {
        super(props);
        this.state ={title: '', author: '', date: '', body: '', category: '',
            'backendUrl': this.props.backendUrl};
    }

    toBlogs() {
        ReactDOM.render(<Blogs />,
            document.getElementById("firstDiv"));
    }

    toHomePage() {
        ReactDOM.render(<Homepage />,
            document.getElementById("firstDiv"));
    }

    async componentDidMount() {

        let url = this.state.backendUrl;

        let data = await fetch(url)
            .then((httpResponse) => httpResponse.json())
            .then((json) => {
                return json;
            });

        await this.setState({title: data.title, author: data.author,
            date: data.date, body: data.body, category: data.category});

        let blogsPage = document.getElementById("to-blogs");
        let homepage = document.getElementById("to-homepage");
        blogsPage.addEventListener("click", this.toBlogs.bind(this));
        homepage.addEventListener("click", this.toHomePage.bind(this));
    }

    render() {
        return (
            <div className="container1">
                <div className="left-div">
                    <h1 className="blogTitle">{this.state.title}</h1>
                    <div className="blog-body">{this.state.body}</div>
                </div>
                <div className="a">
                    <div className="right-div">
                        <h3 className="metaData">Category: {this.state.category}
                            <br/>Written by: {this.state.author}
                            <br/> <br/>on {this.state.date}</h3>
                    </div>
                    <div className="b">
                        <div id="to-homepage">TO HOMEPAGE</div>
                        <div id="to-blogs">TO BLOGS</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Data;