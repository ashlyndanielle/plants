import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';

import theme from './components/Theme';
import App from './components/App';

ReactDOM.render(
    <ThemeProvider theme={ theme }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>, 
document.getElementById('root'));
registerServiceWorker();
