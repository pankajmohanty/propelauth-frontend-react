// YourApp.jsx

import React, { useEffect } from 'react';
import { withAuthInfo } from '@propelauth/react';

const YourApp = withAuthInfo(({ authInfo }) => {
    useEffect(() => {
        if (authInfo) {
            const accessToken = authInfo.accessToken;
            const redirectUrl = `https://your-redirect-url.com?access_token=${accessToken}`;
            window.location.href = redirectUrl;
        } else {
            document.body.innerHTML = "<h1>User is not logged in</h1>";
        }
    }, [authInfo]);

    return null; // or render your UI components here
});

export default YourApp;
