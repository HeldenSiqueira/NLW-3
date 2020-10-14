import React from 'react'; //importando react
//switch faz com que seja chamada uma rota de cada vez// uma unica rota exibida em tela
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/app" component={OrphanagesMap} />
        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Routes;