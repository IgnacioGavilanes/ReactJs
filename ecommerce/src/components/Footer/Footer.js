import React from 'react';
import './Footer.scss';
import {FaTwitter, FaInstagram, FaFacebookF, FaYoutube} from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer-frame">
            <span className="btn">
                <FaTwitter className="fab fa-twitter twitter-color"/>
            </span>
            <span className="btn">
                <FaInstagram className="fab fa-instagram instagram-color"/>
            </span>
            <span className="btn">
                <FaFacebookF className="fab fa-facebook-f facebook-color"/>
            </span>
            <span className="btn">
                <FaYoutube className="fab fa-youtube youtube-color"/>
            </span>
    </footer>
    )
}
