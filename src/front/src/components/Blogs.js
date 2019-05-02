import React, { Component } from 'react';
import '../styles/Blogs.css';
import Homepage from './Homepage.js';
import Form from './Form.js';
import Data from './Data.js';
import ReactDOM from "react-dom";

class Blogs extends Component {

    allEntries = [];

    constructor(props) {
        super(props);
        this.state = {'data': [], 'entries': this.allEntries};
        this.doIt = this.doIt.bind(this);
        this.toPosting = this.toPosting.bind(this);
        this.toHomePage = this.toHomePage.bind(this);
    }

    toPosting() {
        ReactDOM.render(<Form />,
            document.getElementById('firstDiv'));
    }

    toHomePage() {
        ReactDOM.render(<Homepage />,
            document.getElementById('firstDiv'));
    }

    renderBlogPost(backendUrl) {
        ReactDOM.render(<Data backendUrl={backendUrl}/>, document.getElementById('firstDiv'));
    }

    doIt() {
        for (let i = 0; i < this.state.data.length; i++) {
            let backendUrl = this.state.data[i].url;

            this.allEntries.push(<div className="titles" key={'title' + i}>
                <a onClick={this.renderBlogPost.bind(this, backendUrl)}
                   style={{cursor: 'pointer'}}>
                    {this.state.data[i].title}</a>
            </div>);
            this.allEntries.push(<div className="category" key={'category' + i}>
                Category: {this.state.data[i].category}</div>);
            this.allEntries.push(<div className="authors" key={'author' + i}>
                By: {this.state.data[i].author}</div>);
            this.allEntries.push(<div className="dates" key={'date' + i}>
                Date: {this.state.data[i].date}</div>);
        }
        this.setState({'entries': this.allEntries});
    }


    async componentDidMount() {
        let url = 'http://localhost:8080/blogs';

        let dataArray = await fetch(url)
            .then((httpResponse) => httpResponse.json())
            .then((json) => {
                return json;
            });

        this.setState({data: dataArray });

        await this.doIt();

        let writingPage = document.getElementById("to-writing-posts");
        let homepage = document.getElementById("to-homepage");
        writingPage.addEventListener("click", this.toPosting);
        homepage.addEventListener("click", this.toHomePage);
    }

    render() {

        if (this.state.data[0] !== undefined &&
            this.state.entries[0] !== undefined) {
            return (
                <div id="blogsDiv">
                    <div className="container0">
                        <div className="left-div-main">
                            <div className="text-body-main">
                                <h1 id ="welcome-heading">List of All Blog Entries</h1>
                                <div>{this.state.entries}</div>
                            </div>
                        </div>
                        <div className="right-div-main">
                            <div id="to-homepage">TO HOMEPAGE</div>
                            <div id="to-writing-posts">WRITE A POST</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default Blogs;