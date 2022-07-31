import React ,{Fragment} from 'react';
class UsingRefs extends React.Component {
   constructor(props) {
      super(props);		
      // props.x="hello"  not allowed as props are immutable      
      this.state = {
         data: 'React'
      }      
      //this.state.data="welcome"  // does not re-render so bad practise
   };

   updateState(e) {
      this.setState({data: e.target.value})
   }

   clearInput() {      
      alert(this.refs.myInput.value) // document.getElementByName(myinput)
      this.setState({data: ''});
      this.refs.myInput.focus()  
   }

   render() {
      return (
        <React.Fragment>
            Name :<input value = {this.state.data} 
                onChange = {(e)=>this.updateState(e)} 
                ref = "myInput" id="txt1" />
           <br/>
           Password:<input type="password" ref="pwd"/>

            <button onClick = {()=>this.clearInput()}>CLEAR</button>
            <h4>{this.state.data}</h4> 
            
            <FragmentApp title="Learning Fragment"/>
            </React.Fragment>
      );
   }
}



const FragmentApp= (props) => ( 
  <Fragment>
     <p>I am Paragraph 1</p>
     <p>I am Paragraph 2</p>
     <h1>{props.title}</h1>
     </Fragment>
 )



//export const Button =(props)=>(<button>{props.text}</button>)
//<Button text="submit">

// Another way
export default  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return <input type="text" ref={this.inputRef} />;
     }
  
     componentDidMount() {
    this.inputRef.current.focus();
  }
}




/*
// Ref in Stateless functional component
const AddColorForm = ({onNewColor=f=>f}) => {
let _title, _color
const submit = e => {
e.preventDefault()
onNewColor(_title.value, _color.value)
_title.value = ''
_color.value = '#000000'
_title.focus()
}
return (
<form onSubmit={submit}>
<input ref={input => _title = input}
type="text"
placeholder="color title..." required/>
<input ref={input => _color = input}
type="color" required/>
<button>ADD</button>
</form>
)
}

*/




/*
class App extends React.Component{ 
   componentDidMount() {
       this.nameInput.focus() }
        render() { 
           return ( <div> 
            <input 
            defaultValue={'Won\'t focus'} />
          <input ref=
          {(input) => this.nameInput = input} 
          defaultValue={'Will focus'} /> </div> ) } } 

ReactDOM.render(<App />, document.getElementById('app'))

*/