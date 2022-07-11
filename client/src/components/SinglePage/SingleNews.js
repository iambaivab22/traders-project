import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import RelatedNews from './RelatedNews'
import SingleNewsArticle from './SingleNewsArticle'
import axios from 'axios'
import { useSelector } from 'react-redux'

function SingleNews(props) {
    const [state,setState] = useState([])
    const id = props.match.params.id
    const articles = useSelector(state => state.article.articles)
    const url = `/single/article/${id}`

    useEffect(() => {
        axios.get(url).then(res => setState(res.data))
        .catch(err => {
            console.log(err)
        })
    },[url])
    let relatedNews = ''
    if(state.length !== 0 ){
        const cat_id = state.category_id
        const  allNews = articles.filter( single => single.category_id === cat_id)
        relatedNews = allNews.filter( single => single._id !== id)
    }
    console.log(relatedNews)
    let news = ''
    if(relatedNews.length !== 0){
        news = relatedNews.map(single =><RelatedNews news={single} />)
    }
    return (
        <div className='main-home'>
            <Navigation />
            <div className='main-body'>
                <div className='main-body-news'>
                    <SingleNewsArticle news = {state}/>
                </div>
                <div className='main-body-market'>
                    <h1>Related News</h1>
                    {news}
                </div>
            </div>
        </div>
    )
}

export default SingleNews
