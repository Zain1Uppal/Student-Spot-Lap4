import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layout/index';
import { MainFeed, Profile, Categories } from './pages/index';
import './style.css'

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/MainFeed"><MainFeed/></Route>
                <Route path="/Profile"><Profile /></Route>
                <Route path="/Categories"><Categories /></Route>
                <h1>Welcome to StudentHub</h1>
            </Switch>
            <Footer />
        </>


    )
}

export default App;