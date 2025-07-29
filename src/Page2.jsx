import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import'./css/Page2.css'
export default class Page2 extends Component {
  render() {
    return (
     
      <div className='main1'>
        <h1>
            I love my country
            <br></br>
            <br></br>
             <Link to="/Page1">Go To Page1</Link>
            <br></br>
             <div className='link2'>
              <Link to='/'> Go To HomePage </Link>
             </div>
        </h1>
       </div>
    )
  }
}    
