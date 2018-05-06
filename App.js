import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
