import { Route } from 'react-router-dom';
import FlavorList from './components/FlavorList';
import Flavor from './components/Flavor';
import Form from './components/Form';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Route path="/" exact component={FlavorList} />
      <Route path="/add-flavor" component={Form} />
      <Route path="/flavors/:id" component={Flavor} />
    </>
  );
}

export default App;
