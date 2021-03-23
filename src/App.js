import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Flavors from './components/Flavors'
import FlavorID from './components/FlavorID'
import Form from './components/Form'
import Nav from './components/Nav'

function App() {
  const [flavors, setFlavors] = useState()


  return (
    <div>
        <Nav/>
        <Route path="/" exact render={() => <Flavors flavors={flavors} setFlavors={setFlavors}/>}/>
        <Route path="/add-flavor" component={Form}/>
        <Route path="/flavors/:id" render={(routerProps) => <FlavorID match={routerProps.match}/>}/>
    </div>
  );
}

export default App;
