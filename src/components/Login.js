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
        <Text style={styles.realresearch}>Real Research</Text>
        <Text style={styles.textalign}>
          Hello there,{'\n'}Login to your account
        </Text>
        <TextInput
          style={[styles.textinput, styles.firstTextInput]}
          placeholder="Email Address"
          value={this.state.ID}
          onChangeText={(text) => this.handleID(text)}></TextInput>
        <TextInput
          style={styles.textinput}
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
    justifyContent: 'center',
    alignItems: 'center'
    //   flex: 1,
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
  },
  realresearch: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
  },
  textalign: {
    textAlign: 'center',
    color: '#888',
    lineHeight: 20,
    fontSize: 15,
    marginTop: 20,
  },
  textinput: {
     width: '90%',
     height: 56,
     borderWidth: 1.5,
     borderColor: '#164895',
     borderRadius: 50,
     paddingLeft: 31,
     marginTop: 20
  },
  firstTextInput: {
    marginTop: 50
  }
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