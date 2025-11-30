import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { store } from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <HomeScreen />
      </PaperProvider>
    </Provider>
  );
}
