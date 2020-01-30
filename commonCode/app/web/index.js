import React          from 'react';
import { render }     from 'react-dom';
import Root           from './containers/Root';
import store from '../reducers';

const rootElement = document.getElementById('root');

render( <Root store={store} />, rootElement );
