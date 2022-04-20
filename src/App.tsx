import React from 'react';
import MyRoutes from './routes';
import 'normalize.css';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <MyRoutes/>
    </AuthProvider>
    
  );
}

export default App;
