import React from 'react';
import { users } from './User'

import './App.css';


class App extends React.Component{
 
  constructor(){
  
    
    super()
    this.state={userName:"",password:"",message:false} //myUser:[]
    this.eventHandler=this.eventHandler.bind(this)
    this.postDetails=this.postDetails.bind(this)
  }
  eventHandler(event){

    const {name,value}=event.target
    

  
    this.setState({[name]:value})
    
    
  }
  postDetails(event){
    
    event.preventDefault()
  //  return(this.state.userName===myUser.name&&this.state.password===myUser.password?this.setState({message:true}):this.setState({message:false}))

  const isUserValid = users.some(user => {
    const username = this.state.userName;
    const password = this.state.password;
    return user.name === username && user.password === password;
});
this.setState({ message: isUserValid });
  }
 
  // componentDidMount(){
  //   fetch('./myUser.json')
  //   .then(response=>response.json())
  //   .then(data=>this.setState({myUser:data}))
  // }
  render(){
    return(
      <div className="main-div">
        <h1>{this.state.message===true?"Success":"Try again"}</h1>
        <form>
         
          <input type="text" placeholder="enter name" name="userName"  onChange={this.eventHandler} />
          <br />
          <br />
          <input type="password" placeholder="enter password" name="password"  onChange={this.eventHandler} />
          <br />
          <br/>
          <button value="submit" onClick={this.postDetails}>Submit</button>

        </form>
      
       
      </div>

    

    )
  }
}

export default App;
