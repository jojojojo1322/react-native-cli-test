import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TextInput,
} from 'react-native';

class Login extends Component {
  state = {
    ID: '',
    passWord: '',
  };
  handleBack = () => {
    this.props.history.goBack();
  };
  handleID = (text) => {
    this.setState({
      ID: text,
    });
  };
  handlePassword = (text) => {
    this.setState({
      passWord: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="back" onPress={this.handleBack}></Button>
        <Text>Real Research{'\n'}</Text>
        <Text>Hello there,{'\n'}Login to your account</Text>
        <TextInput
          placeholder="Email Address"
          value={this.state.ID}
          onChangeText={(text) => this.handleID(text)}></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.passWord}
          onChangeText={(text) => this.handlePassword(text)}></TextInput>
        <Button title="LOGIN"></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    //   flex: 1,
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
  },
  //   row: {
  //     alignItems: 'center',
  //     backgroundColor: 'white',
  //     width: deviceWidth,
  //     height: deviceWidth / 2,
  //     marginBottom: 15,
  //   },
  //   image: {
  //     width: deviceWidth / 2,
  //     height: deviceWidth / 2,
  //     borderRadius: 20,
  //   },
});
export default Login;
