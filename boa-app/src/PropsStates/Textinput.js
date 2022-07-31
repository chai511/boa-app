import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component{
	constructor(props){
		super(props)
		this.state={inputText:'Murthy'}		

		//old pratice 	
		//this.handleChange=this.handleChange.bind(this)	
	}

	// Event Handler
	handleChange(event){
     //this.state.inputText=event.target.value

	 this.setState({
			inputText:event.target.value
		})
	}				
	
	// lifecyle method will be autimatically invoked by react 
	// called everytime whenever state changes

	// controlled component vs uncontrolled component vs html input element
	render(){
	return	(
		<div>
		Company : <input type="text" id="txt"  />
		<br/><br/>
		<input type="text" value="uncontrolled"/>      

			<div>Enter Name</div>
			<input type="text" 
			          value={this.state.inputText}
					  onChange={(event)=>this.handleChange(event)}
					  name="name"/>
					  
			{this.state.inputText 
				 ?<TextDisplay text={this.state.inputText}/>
				 :<TextDisplay text="Enter name please"/>
			}							
		</div>
		)	
	}
}//end
