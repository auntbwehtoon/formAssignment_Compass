import React, { Component } from 'react';
import "./Form.css"
import {FiSend} from "react-icons/fi"
import { frameworks, learningTypes, levels } from '../util/data';

export class Form extends Component {

constructor(props) {
  super(props)

  this.state = {
     firstName:"",
     lastName:"",
     email:"",
     phone:"",
     framework:"React",
    level:"Basic",
    learningType:["Fundamentals"],
    likeThis:""
  }
}




handleChange = (event) =>{
    const {name,value} = event.target;
    this.setState({
        [name]:value
    })
}


handleCheckBox = (event) => {
    const {value,checked} = event.target;
    const {learningType} = this.state;


    if(checked){
        this.setState({
            learningType:[...learningType, value],
        })
    }
    else{
        this.setState({
            learningType:learningType.filter((e)=> e!== value
            )
        })
    }
}


handleSubmit = (event)=>{
    event.preventDefault();
    
    alert("Successfully!");

    console.log("Checked it out",this.state)
}





  render() {
    console.log(this.state);
    const {framework,
        level,
        learningType,
        likeThis} = this.state;


    return (
      <div className="bgStyle">
        <form onSubmit={this.handleSubmit}>
            <div className="formStyle">
                <div className="sendCircle">
                    <FiSend className="send_icon"/>
                </div>

                <p className='head'>Hello!!!</p>
                <div className="fullName">
                    <div>
                        <label className='label'>First Name</label>
                        <br/>

                        <input type="text" 
                        value={this.state.firstName} 
                        onChange={this.handleChange}
                        name="firstName"/>

                    </div>
                    <div>
                        <label className='label' htmlFor=''>Last Name</label>
                        <br />

                        <input type="text" 
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        name="lastName"/>

                    </div>
                </div>
                <div>
                    <label htmlFor="" className='label'>Email</label>
                    <br />
                    <input type="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"/>
                </div>
                <div>
                    <label htmlFor="" className='label'>Mobile Number</label>
                    <br />
                    <input type="number" 
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"/>
                </div>
                <div>
                    <label htmlFor="" className='label'>Which framework is that you learn?</label>
                    <br />
                    <select value={framework} name="framework" onChange={this.handleChange}>
                        {frameworks.map((e)=>(
                            <option key={e.id}>{e.value}</option>
                        ))}
                    </select>
                </div>
                <div className="label">
                    <label>Level</label>
                    <br />
                    <div className="wrapper">
                        {levels.map((e)=>(
                            <div key={e.id} className="wrapper">
                                <input type="radio" 
                                name="level" 
                                value={e.name} 
                                defaultChecked = {e.name===level}
                                onChange={this.handleChange} />
                                
                                <label htmlFor="">{e.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="label">
                    <label htmlFor="">Learning Type</label>
                    <br />
                    <div className="wrapper">
                        {learningTypes.map((e)=>(
                            <div key={e.id} className="wrapper">
                                <input type="checkbox" 
                                name={e.name} 
                                value={e.name}
                                defaultChecked = {learningType && learningType.includes(e.name)}
                                onChange={this.handleCheckBox}/>

                                <label htmlFor="">{e.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='label'>Why do you like it?</label>
                    <br/>
                    <textarea name="likeThis" id="" cols="30" rows="50" value={likeThis} onChange={this.handleChange}></textarea>
                </div>
                <div>
                    <button className='button' type='submit'>SEND</button>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Form