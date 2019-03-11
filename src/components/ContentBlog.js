import React, { Component } from 'react';

class ContentBlog extends Component {
    render() {
        return (
            <div className="col-md-9">
                <a className="text-center" href="#">
                    <img className="img-fluid rounded mb-3 mb-md-0 mx-auto d-block" src="http://placehold.it/700x300" alt=""/>
                </a>
                <h3>Post One</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                <div className="text-right">
                    <a href="#">Baca selengkapnya...</a>
                </div>
                <hr/>

                <a className="text-center" href="#">
                    <img className="img-fluid rounded mb-3 mb-md-0 mx-auto d-block" src="http://placehold.it/700x300" alt=""/>
                </a>
                <h3>Post Two</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                <div className="text-right">
                    <a href="#">Baca selengkapnya...</a>
                </div>
                <hr/>
            </div>
        )
    }
}

export default ContentBlog;