import React from 'react';
import axios from 'axios';


export default class Axios extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            dataloaded:false
        }
    }

getData=async(props)=>{
    try{
        console.log('in axios')
        await axios.get('http://127.0.0.1:3000')
        .then(response=>response)
        .then(data=> {if(!this.state.dataloaded){console.log(data);this.setState({dataloaded:true,data:data['data']})}
                     else{}})
        console.log(this.state.data)

    }
    catch(err)
    {
        console.log(err)
    }
}


render(){
    {if(!this.state.dataloaded){this.getData()}}
    return(<div>
           <h1>{this.state.data}</h1> </div>)
}
}

