import React,{Component} from 'react';
import {Link} from  'react-router-dom'

  const id=Math.floor(Math.random()*100);
const Courses=(item)=>{
        return(
            <div className="panel panel-info">
                <div className="panel panel-heading">
                    <h1>Courses Offered</h1>
               </div>
               <div className="panel-body">
                 <ul className="form=group">    
                  <li> Cloud Computing <br/>
                     <Link to ="/Form"><button type="button">Register</button></Link>
                 </li>
                  <li >Devops<br/>
                  <Link to ="/Form"><button type="button">Register</button></Link>
                  </li>
                  <li>Bigdata<br/>
                  <Link to ="/Form"><button type="button">Register</button></Link>
                  </li>
                  <li>Angular <br/>
                  <Link to ="/Form"><button type="button">Register</button></Link>
                  </li>
                  <li>React JS <br/>
                  <Link to ="/Form"><button type="button">Register</button></Link>
                  </li>
                 </ul>
               </div>
            </div>
        )
    }


export default Courses;