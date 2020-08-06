import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import UI from './components/UI'
import ProblemPage from './components/ProblemPage'


const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/UI" component={UI} />
      <Route path="/problempage" component={ProblemPage} />
    </Switch>
  </BrowserRouter>

)




export default App

