import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Login extends Component {
  state = {
    ID: '',
    passWord: '',
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
        {/* <Button title="back" onPress={this.handleBack}></Button> */}

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
        <TouchableOpacity style={styles.button} activeOpacity={0.75}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fotgotPasswordBox} activeOpacity={0.75}>
          <Text style={styles.fotgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.bottomText}>
          <View style={styles.bottomButtonBox}>
            <Text sytle={styles.buttonBoxInner}>Don't have an account? </Text>
            <TouchableOpacity activeOpacity={0.75}>
              <Text
                sytle={styles.buttonBoxInner}
                onPress={() => {
                  this.props.navigation.navigate('Signup');
                }}>
                Sign up here
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.bottomTextInner}>
            POWERED BY REAL RESEARCH INC.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  realresearch: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
  textalign: {
    textAlign: 'center',
    color: '#888',
    lineHeight: 25,
    fontSize: 18,
    marginTop: 20,
  },
  textinput: {
    width: '90%',
    height: 56,
    borderWidth: 1,
    borderColor: '#164895',
    borderRadius: 50,
    paddingLeft: 31,
    marginTop: 10,
    fontSize: 16,
    letterSpacing: 0.9,
  },
  button: {
    width: '90%',
    height: 56,
    borderRadius: 30,
    backgroundColor: '#164895',
    color: '#FFF',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 56,
    fontWeight: '500',
    letterSpacing: 0.9,
  },
  firstTextInput: {
    marginTop: 50,
  },
  fotgotPasswordBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#164895',
    marginTop: 20,
  },
  fotgotPassword: {
    fontSize: 14,
    lineHeight: 20,
    color: '#164895',
  },
  bottomText: {
    width: '100%',
  },
  bottomButtonBox: {
    marginTop: 85,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  buttonBoxInner: {
    fontSize: 13,
    color: '#49658f',
    letterSpacing: 1,
  },
  bottomTextInner: {
    textAlign: 'right',
    fontSize: 12,
    color: '#49658f',
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
