import './App.css';
import React from 'react';
import CounterListContainer from '../CounterList/CounterListContainer';
import HeaderContainer from '../Header/HeaderContainer';

const App = () => {
    return (
        <div className="app">
            <HeaderContainer />
            <CounterListContainer />
        </div>
    )
};

export default App;
