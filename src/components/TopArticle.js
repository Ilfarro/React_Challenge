import React, { Component } from 'react';

class TopArticle extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    Cras justo odio
                </a>
                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a href="#" className="list-group-item list-group-item-action">Vestibulum at eros</a>
                </div>
            </div>
        )
    }
}

export default TopArticle;