import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Page1 extends Component {
  render() {
    return (
      <div  className='main2'>
        <h1>
            India is my country
             <br></br>
             <Link to="/Page2">Go To Page2</Link>
              <div className='link1'>
              <Link to='/'> Go To HomePage </Link>
              </div>
        </h1>
       </div>
    )
  }
}
