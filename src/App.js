import React from 'react';
import { Provider } from './Context';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Components
import Header from './Components/Layout/Header';
import Home from './Components/Pages/Home';
import Faq from './Components/Pages/FAQ';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Prices from './Components/Pages/Prices';
import Change_env from './Components/Layout/Change_env';
//Autodialer App
import Header_dialer from './Components/AutoDialerApp/Header_dialer';
import Auto_dialer_app from './Components/AutoDialerApp/Auto_dialer_app';
import Lead_lists from './Components/AutoDialerApp/Lead_lists';
import Leads_store from './Components/AutoDialerApp/Leads_store';
import Call_dashboard from './Components/AutoDialerApp/Call_dashboard/Call_dashboard';

// Styles
import './css/Styles.css'

function App() {
    return (
      <Provider>
        <BrowserRouter>
          <div>
          <Route path="/home" component={Header} />
          <Route path="/" exact component={Change_env} />

          <Route path="/dialer" component={Header_dialer} />

            <div>
                //Header
                <Route path="/home" exact component={Home} />
                <Route path="/home/faq" exact component={Faq} />
                <Route path="/home/prices" exact component={Prices} />
                <Route path="/home/login" exact component={Login} />
                <Route path="/home/register" exact component={Login} />
                // Header Dialer
                <Route path="/dialer/leads_store" exact component={Leads_store} />
                <Route path="/dialer/lead_lists" exact component={Lead_lists} />
                <Route path="/dialer/dashboard/:id" exact component={Call_dashboard} />

            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
}

export default App;
