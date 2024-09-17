import React  from 'react';
import './index.css';
import { withRouter } from 'react-router';
import {  BsGithub, BsTwitter } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import home_img from '../../../../assets/img/avator.jpg'
import Typed from "typed.js";

class  homeContent extends React.Component {
    
   
    componentDidMount() {
      const options = {
        strings: ['Software Developer', 'Data Analyst', 'Snowboarder🏂'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      };
      this.typed = new Typed('#multiple-text', options);
        
    }
  
    componentWillUnmount() {
      this.typed.destroy();
    }
    render(){
        
        return (  
            <section className='home'>
                
                <div className='home-content'>
                    <h3>What's up, I'm</h3>
                    <h1>Yuan Ji </h1>
                    <h3 >And I'm a <span id='multiple-text'></span>
                    </h3>

                    <p>Master of Information Technology</p>
                    <p> - the University of Sydney</p>
                    <br/>
                    <p>Bachelor of Science: Computer Science and Statistics</p>
                    <p> - University of Toronto </p>


                    <div className='social-media'>
                        <a href='https://www.linkedin.com/in/dylan4932/' id='icon1'><FaLinkedinIn/></a>
                        
    
                        <a href='https://github.com/dylan4932' id='icon2'><BsGithub/></a>
                        <a href='https://www.facebook.com/profile.php?id=100007200255102' id='icon3'><FaFacebookF/></a>
                        <a href='https://twitter.com/dylan4932' id='icon4'><BsTwitter/></a>
                    </div>
                    <a href='https://storage.cloud.google.com/dylan4932/YuanJi-SD.pdf' className='download-btn'>Download CV</a>
                </div>
                <div className='home-img'>
                    <img src={home_img} alt="home-img"></img>
                </div>
            </section> 
        )
    }
}

export default withRouter(homeContent);