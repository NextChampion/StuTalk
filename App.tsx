// In App.js in a new project

import React, {useEffect, useState} from 'react';
import MainNavigator from './src/navigator';
import {store, onLoadRedux, Provider} from './src/redux';

function App() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    onLoadRedux(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
