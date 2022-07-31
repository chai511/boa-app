//Container and component both can be represented as unit as they present data
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// hook the action
import {selectTrainer} from '../Actions/index';

class TrainerList extends Component{
	createListItems(){
		return this.props.trainers.map((trainer,index)=>{
			
			return (
				<div>
			        <h4 className="text-danger" 
		                  onClick={() => this.props.st(trainer)} >
				          {trainer.first} {trainer.last} 
			       </h4>
			      </div>
				)
			})		
	}
render(){
	return(
       <div >		
			{this.createListItems()}			
		</div>
		)
     }
}//end of container


// below code is outside class  store.subscribe()
function mapStateToProps(state){
	//So  take state from store and pass to component as props
   return {
		 trainers:state.trainers
		  
	}
}
//store.dispatch({type="SELECTED_TRAINER",payload:trainer})
function mapDispatchToProps(dispatch){
   // pass prop selectTrainer with action selectTrainer
  return bindActionCreators({st:selectTrainer},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(TrainerList) 



