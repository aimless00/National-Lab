
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home/Home';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/home/:Id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
