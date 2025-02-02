import {StyleSheet, View, Text } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <Text>This is your search content.</Text>
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
