import {StyleSheet, View, Text } from 'react-native';

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Text>Saved Screen</Text>
      <Text>This is your saved content.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
