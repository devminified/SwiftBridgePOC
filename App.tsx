import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SwiftView } from './src/components/SwiftView';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SwiftView 
        style={styles.swiftView}
        onEventTriggered={(event) => console.log('Event:', event)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiftView: {
    width: '100%',
    height: 200,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default App;
