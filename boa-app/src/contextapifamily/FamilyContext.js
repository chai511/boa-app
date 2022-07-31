import React from 'react'

// 1. Create the Context with initial state 
const MyContext= React.createContext();//{}
//const AuthContext=React.createContext({'jwttoken':'','username':null})

// 2. Create Provider component
class MyProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            surname:'Burra',
        }
    }

    
    render(){
        return(
            <MyContext.Provider value={{
                //data
                state:this.state                
            }}>
               {this.props.children}
            </MyContext.Provider>
        )
    }
}


//3. Wrap main app into Myprovider to access the context
export default class FamilyContext extends React.Component{    
    render(){
        return (
            <MyProvider>
            <div className="bg-success">
                <h2 className="bg-info">React Context API Demo</h2>                               
                <Family name="Chaithanya" Relationship="Owner" Sal="1000000"/>      
                <Family name="Srivalli" Relationship="Wife" Sal="100000"/>  
                <Family name="Maanvi" Relationship="Daughter" Sal="100"/>  
            </div>
            </MyProvider>
        )
    }
}

const Family=(props)=>{
    return(
        <div>
            <Person name={props.name} Relationship={props.Relationship} Sal={props.Sal}/> 
        </div>
    )
}

class Person extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name,
            Releationship:props.Relationship,
            Sal:props.Sal
        }
    }
    render(){
        return (
            <div>
                <MyContext.Consumer>
                    {
                        (context) => (
                            <React.Fragment>
                                <h3 className="bg-primary">Person details</h3>
                                <p>Hi! {context.state.surname} {this.state.name} </p>
                                <h3 className="bg-primary">Person Relation</h3>
                                <p>{this.state.Releationship}</p>
                                <p className="bg-danger">Salary : {this.state.Sal}</p>
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