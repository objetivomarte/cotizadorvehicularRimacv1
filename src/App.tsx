import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import * as views from './views'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={views.Home} exact />
        <ProtectedRoute path="/datos-del-auto" component={views.CarInfo} />
        <ProtectedRoute path="/arma-tu-plan" component={views.Coverage} />
        <ProtectedRoute path="/gracias" component={views.Success} />
        <Route component={views.NotFound} />
      </Switch>
    </Router>
  )
}

export default App
