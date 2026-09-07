import React from 'react';
import './index.css';
import aboutImg from '../../../../assets/img/about.jpg'
import { BsCodeSlash, BsGithub, BsTwitter } from "react-icons/bs"
import { MdGroups } from "react-icons/md"
import { FaPython, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { read_exp } from '../../../../actions/action';

const AboutContent = () => {
    return (
        <div>
            <section className='about' id='about'>
                <div className='about-img'>
                    <img src={aboutImg} alt='Portrait of Yuan Ji'></img>
                </div>

                <div className='about-content'>
                    <h2 className='heading'>About <span>Me</span></h2>
                    <h3>Software Developer</h3>
                    <p>My name is Yuan Ji, and I am a skilled software developer with experience in
                        Java, Python, JavaScript, and other technologies. I have developed and maintained
                        various applications, including a healthcare literature editing tool and a virtual
                        item trading platform.</p>
                    <p>I am skilled in problem-solving, data analysis, and machine
                        learning, and have a strong understanding of project management methodologies.</p>
                    <p>In my free time, I enjoy exploring new technologies and snowboarding.</p>
                    <a href='#experience' className='about-btn'>Read more</a>
                </div>
            </section>

            <section className='experience' id='experience'>
                <h2 className='heading-text'>My <span>Experience</span></h2>
                <div className='experience-container' id="exp-container">
                    <div className='experience-box'>
                        <div className='icon-container'>
                            <FaPython fontSize="3.5rem" color='#BC89BD'/>
                        </div>
                        <h3>Software Developer</h3>
                        <p>Integrated and developed websites with ERP systems utilizing technologies and micro services ...</p>
                        <button onClick={() => read_exp(0)} className='about-btn'>Read more</button>
                    </div>

                    <div className='experience-box'>
                        <div className='icon-container'>
                            <BsCodeSlash fontSize="3.5rem" color='#0071e3'/>
                        </div>
                        <h3>Full Stack Developer</h3>
                        <p>Developed and maintained a healthcare literature editing application using Java and python languages...</p>
                        <button onClick={() => read_exp(1)} className='about-btn'>Read more</button>
                    </div>

                    <div className='experience-box'>
                        <div className='icon-container'>
                            <MdGroups fontSize="3.5rem" color='#71C4AE'/>
                        </div>
                        <h3>Web Developer Intern</h3>
                        <p>Collaborated with cross-functional teams to devise optimal solutions that align with business requirements...</p>
                        <button onClick={() => read_exp(2)} className='about-btn'>Read more</button>
                    </div>
                </div>
            </section>

            <section className='contact' id='contact'>
                <div className='contact-card'>
                    <h2 className='heading-text'>Get In <span>Touch</span></h2>
                    <p>Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                    <div className='contact-actions'>
                        <a href='mailto:info@dylan4932.com' className='pill-btn pill-btn-primary'>Say Hello</a>
                        <div className='social-media'>
                            <a href='https://www.linkedin.com/in/dylan4932/' aria-label='LinkedIn' target='_blank' rel='noreferrer'><FaLinkedinIn/></a>
                            <a href='https://github.com/dylan4932' aria-label='GitHub' target='_blank' rel='noreferrer'><BsGithub/></a>
                            <a href='https://www.facebook.com/profile.php?id=100007200255102' aria-label='Facebook' target='_blank' rel='noreferrer'><FaFacebookF/></a>
                            <a href='https://twitter.com/dylan4932' aria-label='Twitter' target='_blank' rel='noreferrer'><BsTwitter/></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutContent;
