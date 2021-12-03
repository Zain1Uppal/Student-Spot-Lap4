import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layout/index';
import { MainFeed, Profile, Categories, FrontPage } from './pages/index';
import './style.css'

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/"><FrontPage/></Route>
                <Route path="/MainFeed"><MainFeed/> <Header /></Route>
                <Route path="/Profile"><Profile /> <Header /></Route>
                <Route path="/Categories"><Categories /> <Header /></Route>
            </Switch>
            <Footer />
        </>


    )
}

export default App;