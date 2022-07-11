import React from 'react'
import footerStyles from './footer.module.css'
import Logo from '../images/logo.png'

function Footer() {
    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.logo}>
                <img src={Logo} alt='hamrolagani' />
                <h2>Trader's Domain</h2>
            </div>
            <div className={footerStyles.details}>
                <div className={footerStyles.links}>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/admin'>Admin</a></li>
                        <li><a href='/company'>Company</a></li>
                    </ul>
                </div>
                <div className={footerStyles.address}>
                    <address>
                            <strong>Trader's Domain</strong><br></br>
                            4th Floor, Orchid Hotel Building
                            <br></br>
                            Tripureshwor, Kathmandu, Nepal
                            <br></br>
                            <abbr title="Telephone">Tel:</abbr>
                            (+977)  01-531453/5315123
                            <br/>
                            <abbr title="Mobile">Mobile:</abbr>
                            9876543210
                            <br/>
                            <abbr title="E-mail address">E-mail:</abbr>
                            support@hamrolagani.com                            
                            <br/>
                    </address>
                </div>
            </div>
            <div className={footerStyles.copyright}>
                <p>Trader's Domain - All rights reserved &copy; - 2021</p>
            </div>
        </footer>
    )
}

export default Footer
