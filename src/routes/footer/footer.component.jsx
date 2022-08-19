import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as ReviveLogo } from '../../assests/revive.svg';

import {ReactComponent as FbLogo } from '../../assests/logo-fb.svg';
import {ReactComponent as IgLogo } from '../../assests/logo-ig.svg';
import {ReactComponent as LdLogo } from '../../assests/logo-ld.svg';
import {ReactComponent as YtLogo } from '../../assests/logo-yt.svg';

import './footer.styles.scss';

const Footer = ()=>{

    return (
        <div className="footer__container">
            <div className="footer__column">
                <Link className="logo-container" to='/'>
                <ReviveLogo className="logo"/>
                </Link>
                <h3>Unreal Health. Real Science</h3>
                <p>Revive Nutrition takes the hard work out of health by delivering essential nutrients to your doorstep every month.</p>
            </div>

            <div className="footer__column footer__column--2">
                <h3>Quick Links</h3>
                <Link className="footer-link" to='/shop'>
                Shop
                </Link>
                <Link className="footer-link" to='/consultation'>
                Take Consultation
                </Link>
            </div>

            <div className="footer__column footer__column--3">
            <h3>Find us On</h3>
            <div className="social__icons">
                <a className="logo-container" rel="noreferrer" href="https://www.facebook.com/revive.nutrition.in/" target="_blank">
                <FbLogo className="social_logo"/>
                </a>


                <a className="logo-container" rel="noreferrer" href="https://www.instagram.com/revive.nutrition.in/" target="_blank">
                <IgLogo className="social_logo"/>
                </a>
                <a className="logo-container" rel="noreferrer" href="https://in.linkedin.com/company/revivenutrition" target="_blank">
                <LdLogo className="social_logo"/>
                </a>
                <a className="logo-container" rel="noreferrer" href="https://www.youtube.com/channel/UCGurXlP0VC4uDv35YhT7UYQ" target="_blank">
                <YtLogo className="social_logo"/>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Footer;