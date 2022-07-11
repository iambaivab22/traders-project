import React from 'react'
import { useSelector } from 'react-redux'
import SingleCategoryNews from './SingleCategoryNews'

function NewsContainer() {
    const category =  useSelector(state => state.article.category)
    let news = ''
    if(category.length !== 0){
        news = category.map( single => <SingleCategoryNews category ={single} />)
    }
    return (
        <div className='news_container'>
            {news}
        </div>
    )
}

export default NewsContainer
