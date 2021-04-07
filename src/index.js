import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebaseConfig from './components/firebase-config'
import { FirebaseAppProvider } from 'reactfire'

ReactDOM.render(
<FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <Suspense fallback={'conectando la app...'}>
<App />
</Suspense>
</FirebaseAppProvider>
,
  document.getElementById('root')
);

