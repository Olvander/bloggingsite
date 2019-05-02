import React, { Component } from 'react';
import '../styles/Homepage.css';
import Blogs from './Blogs.js';
import Form from './Form.js';
import ReactDOM from "react-dom";

class Homepage extends Component {

    constructor(props) {
        super(props);
    }

    toBlogs() {
        ReactDOM.render(<Blogs />,
            document.getElementById("firstDiv"));
    }

    toPosts() {
        ReactDOM.render(<Form />,
            document.getElementById("firstDiv"));
    }

    componentDidMount() {
        let blogsPage = document.getElementById("to-blog-posts");
        let writeAPostPage = document.getElementById("to-writing-posts");
        blogsPage.addEventListener("click", this.toBlogs.bind(this));
        writeAPostPage.addEventListener("click", this.toPosts.bind(this));
    }

    render() {
        return (
            <div id="homepageDiv">
                <div className="container0">
                    <div className="left-div-main">
                        <h1 id ="welcome-heading">Welcome to Blogging Site hosted by Olli P</h1>
                        <div className="text-body-main">
                            You may add blog posts to this site and view
                            posted blog posts by clicking on the links on the right.<br/><br/>
                            This website is centered mainly around document management.
                            There are currently 4 categories you can
                            choose to write on.<br/><br/>
                            The categories are: Document Management, Metadata,
                            Version Control and Other.</div>
                    </div>
                    <div className="right-div-main">
                        <div id="to-blog-posts">TO BLOG POSTS</div>
                        <div id="to-writing-posts">WRITE A POST</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;