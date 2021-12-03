import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './layout/index';
import { MainFeed, Profile, Categories, FrontPage } from './pages/index';
import './style.css'

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/"><FrontPage/></Route>
                <Route path="/MainFeed"><MainFeed/></Route>
                <Route path="/Profile"><Profile /></Route>
                <Route path="/Categories"><Categories /></Route>
            </Switch>
            <Footer />
        </>


    )
}

export default App;