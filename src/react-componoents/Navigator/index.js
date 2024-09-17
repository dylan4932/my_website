import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import { BsCardList } from "react-icons/bs"
import { HiOutlineHome } from "react-icons/hi";
import { BiPlanet } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai"
import { btn_activator} from '../../actions/action'
import { IoIosPeople, IoIosAperture } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb"

class Navigator extends React.Component {
   
    
    render(){
        return (
          <div className='sidebar active'>
          <div className='logo_content'>
              <div className='logo'>
                  <i><BiPlanet/></i>
                  <div className='logo_name'>Portfolio.</div>
              </div>
              <i id="btn" onClick={()=>btn_activator()}>
                  <BsCardList />
              </i>
              
          </div>
          <div className='nav_list'>
              {/* <li>
              <i class='search'><BiSearch/></i> 
              <input placeholder='搜索...'></input>
              </li> */}
              <li>
                  <a href='./../Bias-home'>
                      <i>
                      <HiOutlineHome />
                      </i>
                      
                      <span className="links_name">Home</span>
                  </a>
                  <span className="tooltip"></span>
              </li>
              <li>
                  <a href='./../Bias_Page'>
                      <i>
                      <AiOutlineAppstore/>
                      </i>
                      
                      <span className="links_name">About</span>
                  </a>
                  <span className="tooltip">About</span>
              </li>
              <li>
                  <a href='./../About_Page'>
                      <i>
                      <IoIosAperture />
                      </i>
                      
                      <span className="links_name">Skills</span>
                  </a>
                  <span className="tooltip">Skills</span>
              </li>
              <li>
                  <a href='./../Discussion_Page'>
                      <i>
                      <IoIosPeople />
                      </i>
                      
                      <span className="links_name">Media</span>
                  </a>
                  <span className="tooltip">Media</span>
              </li>
              <li>
                  <a href='./../Contact_Page'>
                      <i>
                      <TbMessageCircle />
                      </i>
                      
                      <span className="links_name">Contact</span>
                  </a>
                  <span className="tooltip">Contact</span>
              </li>
              
          </div>
      </div> 
            
        )
    }
}

export default withRouter(Navigator);