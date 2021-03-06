import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';


const App = () => {
    return(
        <Provider store={store}>
            <Fragment>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </Fragment>
        </Provider>
    )
}

render(<App />, document.getElementById('app'));