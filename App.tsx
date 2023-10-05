// Vendor
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
// Config
import { QueryClientProvider, queryClient } from '@config/reactQueryConfig';
import Reactotron from '@config/reactotronConfig';
// Routes
import Routes from '@routes/index.routes';
// Screens
import SplashScreen from '@screens/SplashScreen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (__DEV__) {
      Reactotron.clear;
      Reactotron.connect();
      console.log('🎉 Reactotron Started');
    }

    return () => {
      if (__DEV__) {
        Reactotron.close();
        console.log('👋 Reactotron Disconnected');
      }
    };
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          FontItalic: require('@assets/fonts/Roboto-Italic.ttf'),
          FontRegular: require('@assets/fonts/Roboto-Regular.ttf'),
        });

        // Please remove this line when is the app is ready to Prod.
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return <SplashScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
