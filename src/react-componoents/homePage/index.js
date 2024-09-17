import React from 'react';
import './index.css';
import {withRouter} from 'react-router' 
// import Granim from 'granim';
// import Banner from '../banner';
// import Navigator from '../Navigator';
import HomeContainer from './homeContainer';
import PageFooter from '../pageFooter'



class homePage extends React.Component {
    

    render(){

        
        return (
            <div className='homepage'>
                {/* <Navigator /> */}
                <div className='main-content'>
                    <HomeContainer/>
                    <PageFooter />    
                </div>
            
            </div>
            
        )
    }
}

export default withRouter(homePage);