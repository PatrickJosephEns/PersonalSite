import  {Route, Switch, BrowserRouter} from 'react-router-dom';
import home from './components/pages/home';
import content from './components/pages/content';
import contact from './components/pages/contact';
import React from 'react';



const Routes = () =>  {
  return (   
    <BrowserRouter>   
    <Switch>   
      <div className = "App">       
        <Route path="/" component = {home} exact />
        <Route path="/content" component = {content} exact />
        <Route path="/contact" component = {contact} exact />
      </div>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;