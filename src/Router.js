import React,{Component} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Courses from './Courses';
import Enquiry from './Enquiry';
import Form from './Form';

class Router extends Component{

    constructor(){
        super()
            
        this.state={
            id:'',
            name:'',
            details:''

        }
    }
   
    render(){
        return(
         <BrowserRouter>
            <header>
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
          <li><Link to="/">Online Courses</Link></li>
       
        <li><Link to="/Courses/">Courses</Link></li>
        <li><Link to="/Enquiry">Enquiry</Link></li>    
      </ul>   
    </div>
  </div>
</nav>
</header>
<Route exact path="/" >Online Learning Portal</Route>
<Route  path="/Courses" component={Courses}></Route>
<Route  path="/Form" component={Form}></Route>
<Route  path="/Enquiry" component={Enquiry}></Route>
 </BrowserRouter>


        )
    }
}

export default Router;