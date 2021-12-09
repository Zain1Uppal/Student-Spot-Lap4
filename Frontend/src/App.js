import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './layout/index';
import { MainFeed, Profile, Categories, FrontPage, Resources, News, UserPage} from './pages/index';
import {default as NotFoundPage} from '../src/components/NotFoundRoute/index'
import { Biology, Chemistry, Computing, English, Maths, Physics } from './pages/GroupPages/index';
import {GroupSection} from './components/GroupSection'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Navbar from './layout/Navbar';
import Login from './views/auth/login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout';
import { Dashboard } from './views/app/Dashboard'

function App() {
    return (
        <>
        
            <Switch>
                {/* <Router> */}
                <Route exact path="/"><FrontPage/> <Navbar /> </Route>
                <Route path='/login' component={Login} exact />
                <Route path='/signup' component={Signup} exact />
                <Route path='/logout' component={Logout} exact />
                <Route path="/MainFeed"><MainFeed/></Route>
                <Route path="/profile/"><Profile /></Route>
                <Route path="/:username"><UserPage /></Route>
                <Route path="/dashboard"><Dashboard /></Route>
                <Route path="/resources"><Resources /></Route>
                <Route path="/news"><News /></Route>
                <Route path="*" component={NotFoundPage} />
                {/* </Router> */}
                <Route path="/categories/:cateName"><Categories/></Route>
                {/* <Route path="/biology"><Biology /></Route>
                <Route path="/chemistry"><Chemistry /></Route>
                <Route path="/computing"><Computing /></Route>
                <Route path="/english"><English /></Route>
                <Route path="/maths"><Maths /></Route>
                <Route path="/physics"><Physics /></Route> */}

            </Switch>
        
            {/* <Footer /> */}
        </>


    )
}

export default App;