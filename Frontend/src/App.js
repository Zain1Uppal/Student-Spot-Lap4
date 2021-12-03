import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layout/index';
import { MainFeed, Profile, Categories, FrontPage } from './pages/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Navbar from './layout/Navbar.js/navbar';
import Login from './views/auth/login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout'

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/"><FrontPage/> <Navbar /> </Route>
                <Route path='/login' component={Login} exact />
                <Route path='/signup' component={Signup} exact />
                <Route path='/logout' component={Logout} exact />
                <Route path="/MainFeed"><MainFeed/> <Header /></Route>
                <Route path="/Profile"><Profile /> <Header /></Route>
                <Route path="/Categories"><Categories /> <Header /></Route>
            </Switch>
            <Footer />
        </>


    )
}

export default App;