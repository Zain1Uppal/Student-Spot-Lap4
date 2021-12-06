import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './layout/index';
import { MainFeed, Profile, Categories, FrontPage, Category } from './pages/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Navbar from './layout/Navbar';
import Login from './views/auth/login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout'
import { Dashboard } from './views/app/Dashboard'

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/"><FrontPage/> <Navbar /> </Route>
                <Route path='/login' component={Login} exact />
                <Route path='/signup' component={Signup} exact />
                <Route path='/logout' component={Logout} exact />
                <Route path="/MainFeed"><MainFeed/> <Header /></Route>
                <Route path="/Profile"><Profile /></Route>
                <Route path="/Categories"><Categories /> <Header /></Route>
                <Route path="/Category"><Category /></Route>
                <Route path="/dashboard"><Dashboard /></Route>
            </Switch>
            {/* <Footer /> */}
        </>


    )
}

export default App;