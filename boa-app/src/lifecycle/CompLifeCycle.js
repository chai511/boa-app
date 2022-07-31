import React from 'react';
//import Parent from './ErrorHandlling';

export default class CompLifeCycle extends React.Component {
   constructor(props) {
     //1. initialization phase
     console.log("In constructor CompLifeCycle:"+props.myNumber);
      super(props);		
      this.state = {
         data: 0,
         msg: 'Initial data...'
      }          
   };
   // Event handler
   setNewNumber(e) {
      this.setState({data: this.state.data + 1})
   }
   updateState(e) {
      this.setState({msg:e.target.value});
   }      
   //2. render
   render() {
      return (
         <div>          
             <button  onClick =
             {(event)=>{this.setNewNumber(event)}}>
                    INCREMENT</button>       

             <Content myNumber = {this.state.data} msg={this.state.msg}></Content>

            <br/>
             <input type = "text" value ={this.state.msg}
                           onChange = {(e)=>this.updateState(e)} />
             <h3 >{this.state.msg}</h3>      
         </div>
      );
   }
}// parent component is completed

// life cycle methods are only supported in Container (Stateful functional component)
// you can not have life cycle methods in Presentation(SFC)
// react hooks

//child comp
class Content extends React.Component {
  constructor(props){
    // Initialize props with constructor, initialize state and register events
    super(props);
    this.state={name:'Murthy'} 
    console.log("In constructor Content:"+props.myNumber); //?      
    console.log("1. Content Constructor fired - Initialization phase");
    //this.handleScroll = this.handleScroll.bind(this); 
  }

  static getDerivedStateFromProps(props, state){
   console.log("4. getDerivedStateFromProps: "+props.myNumber)
   console.log(state.name)
   // ajax call to REST
   return {}
}

  componentDidMount() {
   console.log('2. Component DID MOUNT! - reset data or reintialize data ')
  console.log('componentDidMount => ' + this.props.myNumber);  //0
  //Make ajax calls here or load some mocked data and update state
   //window.addEventListener('scroll', this.handleScroll);   
   // subscribe to web sockets here 
 }

//shouldComponentUpdate() will be invoked before rendering 
//when new props or state are being received.
// This method won't be called on initial rendering. (return true by default)
 shouldComponentUpdate(props,state) {
   console.log("4. Decide whether to re-render or not ")
   console.log(state )
   if(props.myNumber >5) {
   return true
 }else{
      return false;    
     }
}

   
render() {   
   return (       
        <div>
          <h3 id="txt1">{this.props.myNumber}</h3> 
          <div id="txt2">Hello {this.props.msg}!</div> 
         </div>             
         );
   }

    //This method is not called for the initial rendering.
   //You can perform DOM operations after an update inside this function.
  // access Real DOM with Jquery here or normal javascript 
  componentDidUpdate() {
   console.log('7.Component now updated. Manipulate REAL DOM updates')
   console.log(document.getElementById("txt1").innerText)
   console.log(document.getElementById("txt2").innerText)
   }


    // Error handling only available from 16.0 onwards
componentDidCatch(err) {
   // post err message to Database by invokiing rest api with Ajax
   // handle this in root component for one time
 console.log("Some error has occured... log it in server "+err)
}

//This is invoked immediately before a component is unmounted or removed from the DOM.
  //Use this as an opportunity to perform cleanup operations.
  // For example, unbind event listeners here to avoid memory leaking.
  componentWillUnmount() {
   // avoid memory leak - unsubscribe to web sockets
     console.log('8.WILL UNMOUNT! - release the cache here ')
     //window.removeEventListener('scroll', this.handleScroll);
   }

  //The componentWillMount() method is invoked only once before 
  //initial rendering.
   //It is also a good place to set initial state value.
  /* componentWillMount() {
      // load data from cache (Local storage)
       console.log('1. componentWillMount => ' +
            this.props.myNumber);//?
   }*/

// important hook fires only once 


//This method will be invoked when a component is receiving 
   //new props. componentWillReceiveProps() 
   //won't be called for the initial rendering.
 /*  componentWillReceiveProps(nextProps) {    
      console.log('3.set default props here and validate props here')
      console.log("Props in Component will receive :"+ 
      nextProps.myNumber)
      // Live ajax calls you can make here for live data
     //The old props can be accessed via this.props inside this. 
    //you can set state according to changes of props in this method.
    this.setState({
      isPassed: nextProps.myNumber >= 60
       });
    }*/
     
}
// End of code

