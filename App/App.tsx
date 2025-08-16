import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  /*
  Adicionando fonte
    useEffect(() => {
      async function loadFonts() {
        await Font.loadAsync({
          'font-safada': require('./assets/fonts/Poppins-Regular.ttf')
        });
        setFontsLoaded(true);
      }
  
      loadFonts();
    }, []);
  
    if (!fontsLoaded) {
       return null;
    }
       */

  return <Routes />;
}