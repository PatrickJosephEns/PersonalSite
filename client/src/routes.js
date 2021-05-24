import  {Route, Switch, BrowserRouter} from 'react-router-dom';
import home from './components/pages/home';
import content from './components/pages/content';
import about from './components/pages/about';
import React from 'react';



// import "bootstrap/dist/css/bootstrap.min.css";



const Routes = () =>  {
  return (   
    <BrowserRouter>   
    <Switch>   
      <div className = "App">       
        <Route path="/" component = {home} exact />
        <Route path="/content" component = {content} exact />
        <Route path="/about" component = {about} exact />
      </div>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;