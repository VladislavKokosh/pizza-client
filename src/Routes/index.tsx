import React, { FC } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const Routes:FC = () => {
  return(
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/sets' component={HomePage}/>
      <Route exact path='/sushi' component={HomePage}/>
      <Route exact path='/rolls' component={HomePage}/>
      <Route exact path='/sashimi' component={HomePage}/>
      <Route exact path='/pizza' component={HomePage}/>
      <Route exact path='/combo' component={HomePage}/>
      <Route exact path='/shaurma' component={HomePage}/>
      <Route exact path='/frying' component={HomePage}/>
      <Route exact path='/grill' component={HomePage}/>
      <Route exact path='/pancakes' component={HomePage}/>
      <Route exact path='/sandwiches' component={HomePage}/>
      <Route exact path='/drink' component={HomePage}/>
      <Route exact path='/desserts' component={HomePage}/>
      <Route exact path='/sauces' component={HomePage}/>
      <Route exact path='/stock' component={HomePage}/>
      <Route exact path='/delivery' component={HomePage}/>
      <Redirect to='/'/>
    </Switch>
  )
}

export default Routes
