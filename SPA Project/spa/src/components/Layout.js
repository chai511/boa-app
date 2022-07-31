import React from 'react';
import {Route ,Link, Switch} from 'react-router-dom'
// npm install react-router-dom --save

import {Home} from './Home'
import {Customers} from './Customers'
import {Login} from './Login'
import Cars from './Cars'
import {CarDetails} from './CarDetails'
import {Greet} from './Greet'
export const Layout = () => (  
  <div>
    <nav>
      <Link className="nav"  exact to='/'>Home</Link>
      <Link className="nav"  exact to='/users'>Customers</Link>
      <Link className="nav"  exact to='/cars'>Cars</Link>
      <Link className="nav"  exact to='/login'>Login</Link>    
      <Link className="nav" exact to="/greet/Chaithanya">Greet</Link>
    </nav>

    <main className="container">
      <Switch>     
        <Route path="/" exact component={Home} />     
        <Route path="/users" component={Customers}  />
        <Route path="/login" component={Login} />
        <Route path="/cars" component={Cars} />
        <Route path="/carDetails/:carId" component={CarDetails}/>    
        <Route path='/greet/:username' 
              render={(props) => (<Greet {...props} />)}/>
        <Route component={NotFound}/>
     </Switch>
      </main>
  </div>
)
const NotFound= () => <h1>Sorry... there is no matching route</h1>


