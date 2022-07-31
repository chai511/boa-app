import React from 'react'

// 1. Create the Context with initial state 
const MyContext= React.createContext();//{}
//const AuthContext=React.createContext({'jwttoken':'','username':null})


// 2. Create Provider component
class MyProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Murthy',
            salary:5000,
            job:'Engineer'
        }
    }

    
    render(){
        return(
            <MyContext.Provider value={{
                //data
                state:this.state,
                //Function
                incrementSalary: () => this.setState({
                salary: this.state.salary + 1000
                }),
                decrementSalary: () => this.setState({
                    salary: this.state.salary - 1000
                    })
            }}>
               {this.props.children}
            </MyContext.Provider>
        )
    }
}


//3. Wrap main app into Myprovider to access the context
export default class Context extends React.Component{    
    render(){
        return (
            <MyProvider>
            <div className="bg-success">
                <h2 className="bg-info">React Context API Demo</h2>                               
                <Family/>      
            </div>
            </MyProvider>
        )
    }
}

const Family=()=>{
    return(
        <div>
            <Person/> 
        </div>
    )
}

class Person extends React.Component{
    render(){
        return (
            <div>
                <MyContext.Consumer>
                    {
                        (context) => (
                            <React.Fragment>
                                <h3 className="bg-primary">Person details</h3>
                                <p>Hi! {context.state.name}</p>
                                <p className="bg-danger">Salary : {context.state.salary}</p>
                                <p>Job : {context.state.job}</p>
                                <button  className="btn btn-primary"
                                onClick={context.incrementSalary}>Increment Salary</button><br/>
                                <button  className="btn btn-primary"
                                onClick={context.decrementSalary}>Decrement Salary</button>
                
                            </React.Fragment>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}



/*
1. Create the context (JSON object) with initial state
2. configure the provider with context
3. consume the context with consumer


*/