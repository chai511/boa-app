import React, { Component } from "react";
export default class Button extends Component {
  
  state = { buttonText: "Click me, please",color:"red"};

  handleClick = () => {
    this.setState(() => {
      return { buttonText: "Thanks, been clicked!", color:"blue" };
    });
  };

  render() { 
    const {buttonText,color} = {...this.state};
    return <button style={{color: color}} onClick={this.handleClick}  >
      {buttonText}</button>;
  }
}






/*
So, in the beginning there was setState
 (and still it will be). But keep calm.
  The style above is perfectly fine and ES6 classes 
  in React won’t go away anytime soon.

But now with React hooks it’s possible to express 
the flow internal state change -> UI reaction 
without using an ES6 class.


useRef and useEffect hook example:

import React, { useRef, useEffect } from 'react'

const UseRefDemo = () => {
  const counter = useRef(13)
  useEffect(() => {
    counter.current = counter.current + 1
  }, [])

  return <h1>{`it has printed ${counter.current} `}</h1>
}

export default UseRefDemo

*/
// container (stateful) state, life cycle methods, HOC
// presentation (stateless) via props, no state, no life cycle methods
// react hooks



