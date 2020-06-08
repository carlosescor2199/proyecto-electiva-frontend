import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import Proyectos from './pages/PageProyecto';



const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={Proyectos} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

