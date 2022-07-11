import React from 'react'
import { useSelector } from 'react-redux'
import NewsStyle from './news.module.css'
import SingleNewsCard from './SingleNewsCard'

function SingleCategoryNews({category}) {
    const articles = useSelector(state => state.article.articles)
    let news = ''
    let arr = []
    if(articles.length !== 0 ){
         arr = articles.filter( single => single.category_id === category._id)
        if(arr.length !==0){
            news = arr.map(single => <SingleNewsCard news= {single}/>)
        }
    }
    return (
        < div id={`${category.name.toLowerCase()}`}>
            <h2>{arr.length === 0 ? '' : category.name.toUpperCase()}</h2>
            <div className={NewsStyle.grid_container}>
                {news}
            </div>
        </div>
    )
}

export default SingleCategoryNews
