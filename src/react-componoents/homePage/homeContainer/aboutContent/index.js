import React  from 'react';
import './index.css';
import { withRouter } from 'react-router';
import aboutImg from '../../../../assets/img/about.jpg'
import {  BsCodeSlash } from "react-icons/bs"
import { MdGroups } from "react-icons/md"
import { RiBankFill } from "react-icons/ri"
import { read_exp, exp_back } from '../../../../actions/action';


class  aboutContent extends React.Component {
    
   
    
    render(){
        
        return (  
            <div >
                <section className='about' id='about'>
                    <div className='about-img'>
                        <img src={aboutImg} alt=''></img>
                    </div>

                    <div className='about-content'>
                        <h2 className='heading'> About <span>Me</span></h2>
                        <h3> Software Developer </h3>
                        <p>My name is Yuan Ji, and I am a skilled software developer with experience in 
                            Java, Python, JavaScript, and other technologies. I have developed and maintained 
                            various applications, including a healthcare literature editing tool and a virtual 
                            item trading platform. </p>
                        <p>I am skilled in problem-solving, data analysis, and machine 
                            learning, and have a strong understanding of project management methodologies. </p>
                        <p>In my free time, I enjoy exploring new technologies and snowboarding.</p>    
                        
                        <a href='#about' className='about-btn'>Read more</a>
                    </div>
                </section> 
                <section className='experience' id='experience'>
                    <h2 className='heading'>My <span>Experiences</span></h2>
                    
                    <div className='experience-container' id='exp-container'>
                        <div className='experience-box' id='sd-box'>
                            <BsCodeSlash fontSize="4rem" color='#AADAFA'/>
                            <h3>Software Developer</h3>
                            <p>Developed and maintained a healthcare literature editing application using Java and python languages... </p>
                            <button onClick={()=>read_exp(0)} className='about-btn'> Read more</button>
                        </div>
                        <div className='experience-box' id='pro-box'>
                            <MdGroups fontSize="4rem" color='#71C4AE'/>
                            <h3>Web Developer Intern</h3>
                            <p>Collaborated with cross-functional teams to devise optimal solutions that align with business requirements... </p>
                            <button onClick={()=>read_exp(1)} className='about-btn'> Read more</button>
                        </div>
                        <div className='experience-box' id='int-box'>
                            <RiBankFill fontSize="4rem" color='#BC89BD'/>
                            <h3>Data Analyst Intern</h3>
                            <p>Demonstrated exceptional communication skills by liaising with customers regarding management of personal banking accounts...</p>
                            <button onClick={()=>read_exp(2)} className='about-btn'> Read more</button>
                        </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default withRouter(aboutContent);