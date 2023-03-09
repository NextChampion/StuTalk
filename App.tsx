// In App.js in a new project

import React, {useEffect, useState} from 'react';
import MainNavigator from './src/navigator';
import {store, onLoadRedux, Provider} from './src/redux';
import {NativeBaseProvider} from 'native-base';
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
      <NativeBaseProvider>
        <MainNavigator />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
