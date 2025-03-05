import React from 'react';
import './index.css';
import HomeContainer from './homeContainer';
import PageFooter from '../pageFooter';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='main-content'>
                <HomeContainer/>
                <PageFooter />    
            </div>
        </div>
    );
}

export default HomePage;