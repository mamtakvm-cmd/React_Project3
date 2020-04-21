import React,{Component} from 'react';

const url="http://localhost:4000/details";
class Form extends Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:" ",
            email:""
        }
       
    }

    handleChangeFname(event){
        this.setState({firstname:event.target.value})
    }
    handleChangeLname(event){
        this.setState({lastname:event.target.value})
    }
    handleChangeEmail(event){
        this.setState({email:event.target.value})
    }
handleSubmit(){

    let id=Math.floor(Math.random()*1000);
    let data={
        "id":id,
        "firstname":this.state.firstname,
        "lastname":this.state.lastname,
        "email":this.state.email
    }
     fetch(url,{
         method:'POST',
         headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
         },
         body:JSON.stringify(data)
        
     })
     .then(this.props.history.push('/Enquiry'))
}
    render(){
        return(
            <div>
                   
            <div className="form-group">
                <h1>Fill Your Details Here</h1>
                <input className="form-control" type="input" onChange={this.handleChangeFname.bind(this)} placeholder="First Name"/>
                <input className="form-control" type="input" onChange={this.handleChangeLname.bind(this)} placeholder="Last Name"/>
                <input className="form-control" type="email" onChange={this.handleChangeEmail.bind(this)} placeholder="email"/>
              
            </div>
              <button type="button" className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Submit</button>
           
            </div>
                     
          )

        
    }

   
}
 export default Form;

