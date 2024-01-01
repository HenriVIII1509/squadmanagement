import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { getUrl, uploadData, remove } from 'aws-amplify/storage';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import {
  SquadTask 
 } from './ui-components';


function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h1>Hello {user?.username}!</h1>
          <SquadTask/>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;