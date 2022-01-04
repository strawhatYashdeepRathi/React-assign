import React from 'react'
import {Link} from 'react-router-dom'
import './landingStyle.css'

function land (){
    return(
        <div className='main-container'>
            <div className='page-header'>
              <h1 className='head'>Welcome to my instaclone layout</h1></div>
              
              <img src="https://picsum.photos/300/300?random=99"></img>
              <Link className='button' to="/postViewPage">ENTER</Link>
        </div>
    );
}
export default land