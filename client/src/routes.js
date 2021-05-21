import  {Route, Switch, BrowserRouter} from 'react-router-dom';
import home from './pages/home';
import React from 'react';


// import "bootstrap/dist/css/bootstrap.min.css";



const Routes = () =>  {
  return (
    <BrowserRouter>
    <Switch>
      <div className = "App">
        <Route path="/" component = {home} exact />
      </div>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;