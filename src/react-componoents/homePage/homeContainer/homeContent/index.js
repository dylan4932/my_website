import React, { useEffect, useRef } from 'react';
import './index.css';
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import home_img from '../../../../assets/img/avator.jpg';
import Typed from "typed.js";

const HomeContent = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Software Developer', 'Data Scientist', 'Snowboarder🏂'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        };

        typedRef.current = new Typed('#multiple-text', options);

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, []);

    return (
        <section className='home' id='home'>
            <div className='home-glow' aria-hidden="true"></div>
            <div className='home-content'>
                <p className='home-eyebrow'>Hey, I'm</p>
                <h1>Yuan Ji</h1>
                <h2>I'm a <span id='multiple-text'></span></h2>

                <div className='home-education'>
                    <p>Master of Information Technology — the University of Sydney</p>
                    <p>Bachelor of Science: Computer Science and Statistics — University of Toronto</p>
                </div>

                <div className='home-cta-row'>
                    <a href='/my_files/resume.pdf' className='pill-btn pill-btn-primary' download>Download CV</a>
                    <a href='#experience' className='pill-btn pill-btn-secondary'>View Experience</a>
                </div>

                <div className='social-media'>
                    <a href='https://www.linkedin.com/in/dylan4932/' aria-label='LinkedIn' target='_blank' rel='noreferrer'><FaLinkedinIn/></a>
                    <a href='https://github.com/dylan4932' aria-label='GitHub' target='_blank' rel='noreferrer'><BsGithub/></a>
                    <a href='https://www.facebook.com/profile.php?id=100007200255102' aria-label='Facebook' target='_blank' rel='noreferrer'><FaFacebookF/></a>
                    <a href='https://twitter.com/dylan4932' aria-label='Twitter' target='_blank' rel='noreferrer'><BsTwitter/></a>
                </div>
            </div>
            <div className='home-img'>
                <img src={home_img} alt="Portrait of Yuan Ji"></img>
            </div>
        </section>
    );
}

export default HomeContent;
