import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import AstronomyContainer from './components/AstronomyContainer';

import '../css/style.css';

render(<Provider store={Store}>
            <AstronomyContainer />
        </Provider>, 
    document.getElementById('app'));