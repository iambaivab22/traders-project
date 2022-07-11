import React from 'react'
import { Link } from 'react-router-dom'
import SinglePageStyles from './singlepage.module.css'

function RelatedNews(props) {

    const processImage = (name) => {
        return `http://localhost:8000/article/uploads/${name}`
    }
    return (
        <Link to = {`/news/${props.news._id}`}>
            <div className={SinglePageStyles.related_news}>
            <div className={SinglePageStyles.related_news_thumbnail}>
                <img src={processImage(props.news.image)} alt='thumbnail'/>
            </div>
            <h3 className={SinglePageStyles.related_news_title}>{props.news.title}</h3>
            </div>
        </Link>
    )
}

export default RelatedNews
