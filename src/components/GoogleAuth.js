import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '',
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>
        Google Auth
      </div>
    );
  };
};

export default GoogleAuth;


// Create a new project
// Add and Enable the Analytics API
// Create a new credential - ensure that it is an OAUTH credential (scroll to the bottom of this page for instructions https://developers.google.com/api-client-library/javascript/start/start-js#Setup).
// During creation of the credentials, you will see a section called "Restrictions Enter JavaScript origins, redirect URIs, or both". This is where you can enter your origins.

