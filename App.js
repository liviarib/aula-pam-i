import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>bem vinda!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    //alingItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margintop: Constants.statusbarheight,
  },
});
