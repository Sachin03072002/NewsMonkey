
import React,{ useEffect,useState }from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


// export default class News extends Component {
const News = (props)=>{
    const [articles,setArticles]=useState([]);
    const [loading,setLoading]=useState(true);
    const [page,setPage]=useState(1);
    const [totalResults,setTotalResults]=useState(0);

    //prop types here when declaring a class
    // static defaultProps = {
    //     country: 'in',
    //     pageSize: 8,
    //     category: 'general',
    // }
    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,
    // }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    //used only in class based components
    // constructor(props) {
    //     super(props);
    //     // console.log('hello i am a constructor');
    //     this.state = {
    //         articles: [],
    //         loading: true,
    //         page: 1,
    //         totalResults:0,
            
    //     }
    //     document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
    // }
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
}

const fetchMoreData=async ()=>{
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
};





    //componentDidMount will work in class based and same work can be done in function based by useEffect

    // async componentDidMount() {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}3fcfd7e447e7440996f0677f8a02236f&page=1&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // // console.log(parseData);
    //     // this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    //     this.updateNews();


    // }
    useEffect(()=>{
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();

        // eslint-disable-next-line
    },[]);



    // const fetchMoreData=async ()=>{
    //     // this.setState({page:this.state.page+1})
    //     setPage(page+1);
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     // console.log(parseData);
    //     setArticles(articles.concat(parseData.articles));
    //     setTotalResults(parseData.totalResults);
    //     // this.setState({ 
    //     //     articles: this.state.articles.concat(parseData.articles), 
    //     //     totalResults: parseData.totalResults
    //     // })

    // };
    // const handlePreviousClick = async () => {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}3fcfd7e447e7440996f0677f8a02236f&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // // console.log(parseData);
    //     // this.setState({ articles: parseData.articles })
    //     // this.setState({
    //     //     page:this.state.page - 1,
    //     //     articles: parseData.articles,
    //     //     loading:false
    //     // })
    //     this.setState({
    //         page: this.state.page - 1
    //     });
    //         setPage(page-1);
    //         updateNews();
    // }
    // const handleNextClick = async () => {
        // if(!(setPage(page+1) > Math.ceil(totalResults/props.pageSize))){
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}3fcfd7e447e7440996f0677f8a02236f&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    //     //     this.setState({loading:true});
    //     //     let data = await fetch(url);
    //     //     let parseData = await data.json();
    //     //     // console.log(parseData);
    //     //     this.setState({loading:false});
    //     //     this.setState({ articles: parseData.articles })
    //     //     this.setState({
    //     //         page:this.state.page + 1,
    //     //         articles: parseData.articles
    //     //     })
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //         this.setState({
    //             page: this.state.page + 1
    //         });
    //         this.updateNews();
    //     }
    // setPage(page+1);
    // updateNews();
    // }

    
        return (
            <>
                <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    scrollableTarget="scrollableDiv"
                >
                    <div className="container">
                    <div className="row">

                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}

            </>
        )
    
}
//proptypes here when declaring a function

News.defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
export default News;