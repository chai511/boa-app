import React, { Component } from 'react';

export class Login extends Component {
    /*constructor(props){
        super(props)       
    }*/
    // hooks
    handleLogin(event){
        event.preventDefault()
        alert("Thanks for submitting")
    // do some login logic here, and if successful:
        if (this.props.jwttoken !== "")
        this.props.history.push(`/cars`)
       }
    render() {
        return (
            <div>            
                <h2>Login Form</h2>
                <form className="container bg-danger" 
                            onSubmit={(e)=>this.handleLogin(e)}>
                    User Name : <input type="text" value="Chaithanya" />
                    <br /><br />
                    Password : <input type="password" value="welcome" />
                    <br />
                    <input type="submit" className="btn btn-primary" 
                    value="Login"/>
                </form>
            </div>
        )
    }
}
