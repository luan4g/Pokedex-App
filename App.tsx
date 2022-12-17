import { NativeBaseProvider } from 'native-base';
import { Oxanium_600SemiBold, useFonts } from '@expo-google-fonts/oxanium'

import { Pokedex } from './src';
import { Loading } from './src/components/Loading';
import { THEME } from './src/styles/theme';

export default function App() {
  const fontsLoaded = useFonts({
    Oxanium_600SemiBold
  })

  if (!fontsLoaded) {
    <Loading />
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <Pokedex />
    </NativeBaseProvider>
  );
}
