import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import FooComponent from '@/FooComponent'
import BarComponent from '@/BarComponent'

const Routes = props => (
  <div>
    <Switch>
      <Route {...props} path="/" exact component={FooComponent} />
      <Route path="/foo" exact component={FooComponent} />
      <Route path="/bar" exact component={BarComponent} />
    </Switch>
  </div>
)

export default Routes
