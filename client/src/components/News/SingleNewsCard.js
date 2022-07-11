import React from 'react'
import NewsStyle from './news.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { postDeleted } from '../../features/articleSlice';


function SingleNewsCard(props) {
    const { date, title, _id, content, image } = props.news
    const dispatch = useDispatch();
    const processImage = (name) => {
        return `http://localhost:8000/article/uploads/${name}`
    }
    const processDate = (date) => {
        return new Date(date).toLocaleDateString()
    }
    const deletePost = (id) => {
        dispatch(postDeleted(id));
        alert('Post Deleted')
        window.location = "/admin"
    }
    if(props.admin){
        return (
            <>
                <div className={NewsStyle.card}>
                    <div className={NewsStyle.thumbnail}>
                        <img  src= {processImage(image)} alt='thumbnail' />
                    </div>
                    <div className={NewsStyle.delete_edit}>
                        <span onClick={() => deletePost(_id)}><img src="https://img.icons8.com/carbon-copy/100/000000/filled-trash.png" alt='click'/></span>
                    </div>
                    <div className={NewsStyle.card_body}>
                        <span className={NewsStyle.published_date}>{processDate(date)}</span>
                        <span className={NewsStyle.news_title}>{title}</span>
                        <p className={NewsStyle.news_body} dangerouslySetInnerHTML={{ __html: content}}></p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <Link to={`/news/${_id}`} style={{color: 'black'}}>
            <div className={NewsStyle.card}>
                <div className={NewsStyle.thumbnail}>
                    <img  src= {processImage(image)} alt='thumbnail' />
                </div>
                <div className={NewsStyle.card_body}>
                    <span className={NewsStyle.published_date}>{processDate(date)}</span>
                    <span className={NewsStyle.news_title}>{title}</span>
                    <p className={NewsStyle.news_body} dangerouslySetInnerHTML={{ __html: content}}></p>
                </div>
            </div>
        </Link>
    )
}

export default SingleNewsCard
