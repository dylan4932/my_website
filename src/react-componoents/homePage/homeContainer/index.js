import React  from 'react';
import './index.css';
import { withRouter } from 'react-router';
import HomeContent from './homeContent';
import AboutContent from './aboutContent';

class  homeContainer extends React.Component {
    
   
    
    render(){
        
        return (
            
            <div className='profolio-container'>
                <header className='header'>
                    <a className='logo'> Dylan4932 - <span>Portfolio</span></a>

                    <nav className='navbar'>
                        <a href='#' id='nav1' className='active'>Home<div className='liner'></div></a>
                        <a href='#about' id='nav2'>About<div className='liner'></div></a>
                        <a href='#experience' id='nav3'>Experience<div className='liner'></div></a>
                        {/* <a href='#' id='nav4'>Profolio<div className='liner'></div></a>
                        <a href='#' id='nav5'>Contact<div className='liner'></div></a> */}
                    </nav>
                </header>
                <HomeContent/>
                <AboutContent/>
            </div>     
        )
    }
}

export default withRouter(homeContainer);