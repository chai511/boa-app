import React from 'react';
import TrainerList from '../Containers/trainer-list';
import TrainerDetails from '../Containers/trainer-details'
//import '../../css/style.css';


const App = () => (
    <div>
          <h1>React Redux Demo by Murthy</h1>
            <TrainerList/>
            <hr />
            <h2>Trainer Details</h2>
            <TrainerDetails/>
          <h3>Copyright reserved to Murthy</h3>
     </div>
);
export default App;