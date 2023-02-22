import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        // console.log(this.props,"hiii");
        return (
            <div className='my-3'>
                <div className="card" >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1' ,left:'90%'}}>
                            {!source ? "Unknown" : source}
                            <span className="visually-hidden">Source</span>
                        </span>
                    <img src={!imageUrl ? "https://img.etimg.com/thumb/msid-98116290,width-1070,height-580,imgsize-11950,overlay-etmarkets/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
            </div >
        )
    }
}

