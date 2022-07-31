import React from 'react'
export  const Header= (props) =>{
    return(
           <div>
               <h3 className="bg-warning text-primary">{props.company}</h3>      
                <h5>{props.city}</h5>     
            </div>
  
    )
 }
 Header.defaultProps={company:"No Company"};
 //"bg-warning text-primary"
// Stateless Functional component - Presentation
