import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { BsCardList } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { BiPlanet } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { btn_activator } from '../../actions/action';
import { IoIosPeople, IoIosAperture } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";

const Navigator = () => {
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
                    <Link to="/">
                        <i><HiOutlineHome /></i>
                        <span className="links_name">Home</span>
                    </Link>
                    <span className="tooltip"></span>
                </li>
                <li>
                    <Link to="/about">
                        <i><AiOutlineAppstore/></i>
                        <span className="links_name">About</span>
                    </Link>
                    <span className="tooltip">About</span>
                </li>
                <li>
                    <Link to="/skills">
                        <i><IoIosAperture /></i>
                        <span className="links_name">Skills</span>
                    </Link>
                    <span className="tooltip">Skills</span>
                </li>
                <li>
                    <Link to="/media">
                        <i><IoIosPeople /></i>
                        <span className="links_name">Media</span>
                    </Link>
                    <span className="tooltip">Media</span>
                </li>
                <li>
                    <Link to="/contact">
                        <i><TbMessageCircle /></i>
                        <span className="links_name">Contact</span>
                    </Link>
                    <span className="tooltip">Contact</span>
                </li>
            </div>
        </div>
    );
}

export default Navigator;