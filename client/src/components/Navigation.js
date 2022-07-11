import React, { useState } from 'react'
import navStyles from './navigation.module.css'
import Logo from '../images/logo.png'
import Search from './Market/Search'
import { useSelector } from 'react-redux'

function Navigation() {
    const [showNav1,setShowNav1] = useState(false)
    const [showNav2,setShowNav2] = useState(false)
    let nav = ''
    const category =  useSelector(state => state.article.category)
    if(category.length!==0){
        nav = category.map( singleCat => <a href={`#${singleCat.name.toLowerCase()} `} className={navStyles.nav_li_hover_items}>{singleCat.name}</a>)
    }

    const displaySubNav1 = (e) => {
        setShowNav1(!showNav1);
        setShowNav2(false)
    }
    const displaySubNav2 = (e) => {
        setShowNav2(!showNav2)
        setShowNav1(false)   
    }
    return (
        <div className={navStyles.main_nav}>
            <div className={navStyles.nav_section}>
                <div className={navStyles.nav_logo}><a href='/'><img src = {Logo} alt='logo'/></a></div>
                <ul className={navStyles.nav_ul}>
                    <li className={navStyles.nav_li}><a href='/'>Home</a></li>
                    <li className={`${navStyles.nav_li} ${navStyles.nav_li_hover}`} onClick={displaySubNav1}>News ↓
                        <div className={`${navStyles.hover_container} ${showNav1 ? navStyles.show_hover_container : ''}`} >
                            {nav}
                        </div>
                    </li>
                    <li className={`${navStyles.nav_li} ${navStyles.nav_li_hover} `} onClick={displaySubNav2}>Market ↓
                        <div className={`${navStyles.hover_container} ${showNav2 ? navStyles.show_hover_container : ''}`}>
                            <a href='/' className={navStyles.nav_li_hover_items}>Todays Market</a>
                            <a href='/' className={navStyles.nav_li_hover_items}>Floorsheet</a>
                            <a href='/' className={navStyles.nav_li_hover_items}>Top gainers</a>
                            <a href='/' className={navStyles.nav_li_hover_items}>Top loosers</a>
                        </div>
                    </li>
                    <Search />
                </ul>
            </div>
        </div>
    )
}

export default Navigation
