import React from 'react'
import SinglePageStyles from './singlepage.module.css'

function SingleNewsArticle(props) {

    const { date, title, content, image } = props.news
    const processImage = (name) => {
        return `http://localhost:8000/article/uploads/${name}`
    }
    const processDate = (date) => {
        return new Date(date).toLocaleDateString()
    }
    return (
        <>
            <h1 className = {SinglePageStyles.title}>{title}</h1>
            <div className={SinglePageStyles.image_container}>
                <img src = {processImage(image)} alt='thumbnail' />
            </div>
            <div className={SinglePageStyles.news_details}>
                <span className={SinglePageStyles.published_date}>{processDate(date)}</span>
                <p dangerouslySetInnerHTML={{ __html: content}}></p>
            </div>
        </>
    )
}

export default SingleNewsArticle
