import React  from 'react';
import './index.css';
import { withRouter } from 'react-router';

class  pageFooter extends React.Component {
    
   
    
    render(){
        
        return (
            
            <div className='footer'>
                <p className='footer-text'> Copyright &copy; 2023 by Dylan | All right Reserved</p>
            </div>
        )
    }
}

export default withRouter(pageFooter);