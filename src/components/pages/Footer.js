import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaInfoCircle  } from "react-icons/fa";
import {Link} from 'react-router-dom';



export default function Footer() {
    return (
        <div className = "footer">
            <h1>Get connected with our social networks</h1>
            <div className = "links">
                <FaFacebookSquare size = {30} />
                <FaTwitterSquare size = {30} />
                <FaInstagramSquare size = {30} />
            <Link to='/about' style = {{color: "white"}}>
            <FaInfoCircle size = {30} />
            </Link>
            </div>
        </div>
    );
}
