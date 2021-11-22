import React, { Component } from 'react'
import './contact.css'
import axios from 'axios'
import '../../contact'

export default class ContactForm extends Component {

state={
    name:'',
    lastname:'',
    email:'',
    message:'',
    sent:false
}

//handle inputs
handleName=(e)=>{
    this.setState({
        name:e.target.value
    })
}

handleLastname=(e)=>{
    this.setState({
        lastname:e.target.value
    })
}

handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}

handleMessage=(e)=>{
    this.setState({
        message:e.target.value
    })
}
// end

formSubmit=(e)=>{
    e.preventDefault();

    let data = {
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
    }
    
    axios.post('/api/forma',data)
    .then(res=>{
        console.log('Email successfully sent!')
        alert("Your email has been sent! We will be in touch ASAP!");
        this.setState({
            sent:true
        },this.resetForm())
    }).catch(err =>{
        console.log('message not sent')
    })
}

//reseting initial data
resetForm=()=>{
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:''

    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },3000)
}


    render() {
        return (
<div class="container contact-form">
            {/* <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div> */}
            <form onSubmit={this.formSubmit}>
                <h3>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" 
                            name="txtName" 
                            class="form-control" 
                            placeholder="Your Name *" 
                            value={this.state.name}
                            onChange={this.handleName} />
                        </div>
                        <div class="form-group">
                            <input type="text" 
                            name="txtLastName" 
                            class="form-control" 
                            placeholder="Your Lastname *" 
                            value={this.state.lastname}
                            onChange={this.handleLastname} />
                        </div>
                        <div class="form-group">
                            <input type="text" 
                            name="txtEmail" 
                            class="form-control" 
                            placeholder="Your Email *" 
                            value={this.state.email}
                            onChange={this.handleEmail} />
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" 
                            class="form-control" 
                            placeholder="Your Message *"
                            width = "100%" 
                            height= "150px"
                            value={this.state.message}
                            onChange={this.handleMessage}></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                    
                </div>
            </form>
</div>
        )
    }
}
