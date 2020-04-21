import React,{Component} from 'react';
import Display from './Display';

const url = "http://localhost:4000/details";



class Enquiry extends Component{
    constructor(){
        super()
        this.state={
            details:""
        }

    }

    render(){
        return(
            <div>
                <h1>List of Users</h1>
               <Display datalist={this.state.details}/>
              
            </div>
        )
    }
    componentDidMount(){
      fetch(url,{

        method:'GET'})
        .then((data)=>data.json())
        .then((res)=>{
            this.setState({details:res})
        })
       
    }
}

export default Enquiry;