import React, { Component } from 'react';
import '../styles/Form.css';
import ReactDOM from "react-dom";
import Homepage from "./Homepage.js";
import Blogs from "./Blogs.js";

class Form extends Component {

    constructor(props) {
        super(props);
    }

    toBlogs() {
        ReactDOM.render(<Blogs />,
            document.getElementById("firstDiv"));
    }

    toHomePage() {
        ReactDOM.render(<Homepage />,
            document.getElementById("firstDiv"));
    }

    componentDidMount() {
        let blogsPage = document.getElementById("to-blogs");
        let homepage = document.getElementById("to-homepage");
        blogsPage.addEventListener("click", this.toBlogs.bind(this));
        homepage.addEventListener("click", this.toHomePage.bind(this));
    }

    render() {
        return (
            <div id="formsDiv">
                <div id="form-div">
                    <div id="left-div-form">
                        <h1 id="heading">Write your blog post on this page</h1>
                        <form action="http://localhost:8080/blog/ready" id="form"
                              method="post">
                            <div className="label"> Your name: </div>
                            <input type="text" id="name-input-field"
                                   name="name" required="true"/><br/>
                            <div className="label">Blog post title: </div>
                            <input type="text" id="title-input-field"
                                   name="title" required="true"/>
                            <div className="label">Choose a category:
                                <select name="category" id="category-chooser"
                                        size="1">
                                    <option>Document Management</option>
                                    <option>Metadata</option>
                                    <option>Version Control</option>
                                    <option>Other</option>
                                </select>
                            </div><br/><br/>
                            <div className="label">Write your post here:<br/></div>
                            <textarea id="blog-post-area"
                                      name="blog-post" required="true"/><br/>
                            <input type="submit" value="Submit" id="form-submit"/>
                        </form>
                    </div>

                    <div className="right-div-main">
                        <div id="to-homepage">TO HOMEPAGE</div>
                        <div id="to-blogs">TO BLOGS</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;