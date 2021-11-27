import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import {Provider} from "react-redux";
import store from './redux/reduxStore';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


