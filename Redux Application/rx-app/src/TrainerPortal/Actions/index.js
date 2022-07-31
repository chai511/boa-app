// select the Trainer to show details when click action occurs

// in redux, action is made up of two parts (type, payload)
//SelectTrainer is action which we bind it to click event of DOM in react
//BAL and DAL library 
export const selectTrainer=(trainer)=>{
	console.log("You have clicked on Trainer ",trainer.id);
	//CRUD to invoke REST services
	// axios.get () or Middleware 	or $.ajax(url,) 	or fetch(url)

	
	return {
		type:'TRAINER_SELECTED',
		payload:trainer
	}
}
/*
export const deleteTrainer=(id)=>{
	console.log("You have clicked on Trainer ",trainer.id);
	//CRUD to invoke REST services
	// Axios.get () or Middleware
	//$.ajax(url,)
	//fetch(url)
	return {
		type:'TRAINER_DELETED',
		payload:id
	}
}
*/