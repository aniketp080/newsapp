import React, {useEffect, useState } from 'react'

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes  from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {
    const[articles,setArticles]=useState([])
    const[loading,setLoading]=useState(true)
    const[page,setPage]=useState(1)
    const[totalResults,setTotalResults]=useState(0)
   
    const capitalise=(string)=>{
        return string.charAt(0).toUpperCase() +string.slice(1);
    }
       


    

    

    const updateNews=async()=>{
        // console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data=await fetch(url);
        let parseData=await data.json()

       // console.log(parseData);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        // props.setProgress(100);

    }
    useEffect(()=>{
        document.title=`${capitalise(props.category)} - NewsMonkey`;
        updateNews();
    },[])

    // async componentDidMount(){
    //     // console.log("cdm");
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7882ab3354d848869d9b133e7b5522b3&page=1&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true})
    //     // let data=await fetch(url);
    //     // let parseData=await data.json()

    //     // console.log(parseData);
    //     // this.setState({articles:parseData.articles,
    //     //     totalResults:parseData.totalResults,
    //     //     loading:false
    //     // })
    //     this.updateNews();

    // }


    //  handlePrevClick= async ()=>{
    //     console.log("prev")
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7882ab3354d848869d9b133e7b5522b3&page=${this.state.page -1}&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true})
    //     // let data=await fetch(url);
    //     // let parseData=await data.json()

    //     // console.log(parseData);
    //     // this.setState(
    //     //     {
    //     //         page:this.state.page-1,
    //     //         articles:parseData.articles,
    //     //         loading:false
    //     //     })

    //     this.setState({
    //         page:this.state.page - 1
    //     })
    //     this.updateNews();
    // }

    // handleNextClick= async ()=>{

    //     console.log("next");

    //     // if(!(this.state.page + 1>Math.ceil(this.state.totalResults/(props.pageSize)))){

    //     //         let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7882ab3354d848869d9b133e7b5522b3&page=${this.state.page +1}&pageSize=${props.pageSize}`;
    //     //         this.setState({loading:true})
    //     //         let data=await fetch(url);
    //     //         let parseData=await data.json()

    //     //         console.log(parseData);
    //     //         this.setState(
    //     //             {
    //     //                 page:this.state.page+1,
    //     //                 articles:parseData.articles,
    //     //                 loading:false
    //     //             })
    //     // }
    //     this.setState({
    //         page:this.state.page + 1
    //     })
    //     this.updateNews()
        
        
    // }
    const fetchMoreData =async () => {
        
        
        //   this.setState({
        //    page:this.state.page +1
        //   });
          
          let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
          setPage(page + 1)
          let data=await fetch(url);
          let parseData=await data.json()
  
          //console.log(parseData);
        //   this.setState({
        //       articles:(this.state.articles.concat(parseData.articles)),
        //       totalResults:parseData.totalResults
            
              
        //   })
          setArticles(articles.concat(parseData.articles))
          setTotalResults(parseData.totalResults)
       
      };
        

  
    return (
      <>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey - Top Headlines on {capitalise(props.category)}</h1>
        {/* {this.state.loading && <Spinner/>} */}
        

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        
        <div className="container">
        <div className="row">
            {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title !=null? element.title.slice(0,45):element.title} source={element.source.name} description={element.description !=null?element.description.slice(0,88):element.description} author={element.author} imageUrl={element.urlToImage}publishedAt={element.publishedAt} newsUrl={element.url}/>
                </div>
            })}
            
            
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between ">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
        <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}
        
        
      </>
    )
}


 News.defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
    

}
 News.propsTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

}

export default News
