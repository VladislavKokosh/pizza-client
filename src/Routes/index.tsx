import React, { FC } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import StockPage from "../Pages/StockPage";
import StockDescription from "../components/Stock/StockDescription";

const Routes:FC = () => {

  const HomePage = React.lazy(() => import('../Pages/HomePage'))

  return(
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/sets' component={HomePage}/>
      <Route path='/sushi' component={HomePage}/>
      <Route path='/rolls' component={HomePage}/>
      <Route path='/sashimi' component={HomePage}/>
      <Route path='/pizza' component={HomePage}/>
      <Route path='/combo' component={HomePage}/>
      <Route path='/shaurma' component={HomePage}/>
      <Route path='/frying' component={HomePage}/>
      <Route path='/grill' component={HomePage}/>
      <Route path='/pancakes' component={HomePage}/>
      <Route path='/sandwiches' component={HomePage}/>
      <Route path='/drink' component={HomePage}/>
      <Route path='/desserts' component={HomePage}/>
      <Route path='/sauces' component={HomePage}/>
      <Route path='/:link' component={StockPage}/>
        <Route path='/stock/:link' component={StockDescription}/>
      <Route exact path='/delivery' component={HomePage}/>
      <Redirect to='/'/>
    </Switch>
  )
}

export default Routes
