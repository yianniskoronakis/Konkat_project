import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/components/Navigation';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#343d67" />
      <Navigation />
    </AuthProvider>
  );
};

export default App;