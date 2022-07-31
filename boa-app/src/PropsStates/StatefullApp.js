import React from 'react';
class StatefulApp extends React.Component {
   constructor(props) {
      super(props);		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Murthy",
               "age":"46"
            },
				
            {
               "id":2,
               "name":"Kavitha",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Kiran",
               "age":"40"
            }
         ]
      }
   }
	render() {
      return (
         <div>
            
           <h3 className="bg-danger">Customers of our Bank</h3>
            <table  
            className='table table-hover table-striped'>
               <tbody>
                  {this.state.data.map((person, index) =>
                      <TableRow key = {index} data = {person} />)
                  }
               </tbody>
            </table>                              
            </div>
      );
   }
}

const TableRow=(props)=> {
    return (       
         <tr>
            <td >{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
         </tr>         
      );
   }
export default StatefulApp;












