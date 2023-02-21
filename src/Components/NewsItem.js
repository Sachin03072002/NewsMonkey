import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        // console.log(this.props,"hiii");
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imageUrl?"https://img.etimg.com/thumb/msid-98116290,width-1070,height-580,imgsize-11950,overlay-etmarkets/photo.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

