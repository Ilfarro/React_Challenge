import React, { Component } from 'react';
import TopArticle from './TopArticle';
import ContentBlog from './ContentBlog';

class OneRow extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <TopArticle />
                    <ContentBlog />
                </div>
                <br/><br/>
            </div>
        )
    }
}

export default OneRow;