import React from 'react'

const NewsItem =(props)=> {


    let {title,description,imageUrl,newsUrl,publishedAt,author,source}=props;

    return (
      <div className='my-3'>
        <div className="card" >
         

          
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>{source}</span>
            <img src={!imageUrl?"https://c.ndtvimg.com/2023-03/p8j0ug1o_israel-protest_625x300_12_March_23.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className=" btn btn-sm btn-primary">Read More</a>
                
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem
