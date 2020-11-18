import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, ScrollView} from 'react-native';
import Loading from './components/Loading';
import Initial2 from './components/Initial2';
import Login from './components/Login';

const Stack = createStackNavigator();
class App extends Component {
  state = {
    isLoading: true,
  };
  componentDidMount = async () => {
    setTimeout(() => {
      console.log('setTime');
      this.setState({isLoading: false});
    }, 3000);
  };
  render() {
    if (this.state.isLoading) {
      console.log('Loading..');
      return (
        <NavigationContainer>
          <Loading />
        </NavigationContainer>
      );
    } else {
      console.log('load success');
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Initial2">
            <Stack.Screen name="Initial2" component={Initial2} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
