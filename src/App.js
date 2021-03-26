import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import FlavorList from './components/FlavorList';
import Flavor from './components/Flavor';
import Form from './components/Form';
import Nav from './components/Nav';

function App() {
  const [flavors, setFlavors] = useState();

  return (
    <div>
      <Nav />
      <Route
        path="/"
        exact
        render={() => <FlavorList flavors={flavors} setFlavors={setFlavors} />}
      />
      <Route path="/add-flavor" component={Form} />
      <Route
        path="/flavors/:id"
        render={(routerProps) => <Flavor match={routerProps.match} />}
      />
    </div>
  );
}

export default App;
