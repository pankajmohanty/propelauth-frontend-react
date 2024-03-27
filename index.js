// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from '@propelauth/react';
import YourApp from './components/YourApp';

const authUrl = process.env.REACT_APP_AUTH_URL;

ReactDOM.render(
    <AuthProvider authUrl={authUrl}>
        <YourApp />
    </AuthProvider>,
    document.getElementById('root')
);
