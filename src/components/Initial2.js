import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import {Link} from 'react-router-native';

const images = new Array(3).fill('../imgs/icon_intro_01.png');

class Initial2 extends Component {
//   scrollX = useRef(new Animated.Value(0)).current;
  state = {
    number: 1,
  };
  handleBack = () => {
    this.props.history.goBack();
  };
  handleLoginRoute = (e) => {
    console.log('/ >> /login');
    this.props.history.push('/login');
  };
  render() {
    return (
      <View style={styles.container}>
        <View sylte={styles.imgViewBox}>
            <View style={styles.imgBox}>
                <Image
                  source={require('../imgs/icon_intro_01.png')}
                  style={styles.Image}
                />
                <Text style={styles.TextTitle}>RESEARCH</Text>
                <Text style={styles.TextBody}>나의 생각이 전세계에{'\n'}반영되는 설문조사</Text>
            </View>
            <View style={styles.imgBox}>
                <Image
                  source={require('../imgs/icon_intro_02.png')}
                  style={styles.Image}
                />
                <Text style={styles.TextTitle}>WALLET</Text>
                <Text style={styles.TextBody}>쉽고 안전하고 빠른 지갑 송금{'\n'}Real Research에서 가능합니다.</Text>
            </View>
            <View style={styles.imgBox}>
                <Image
                  source={require('../imgs/icon_intro_03.png')}
                  style={styles.Image}
                />
                <Text style={styles.TextTitle}>REWARD</Text>
                <Text style={styles.TextBody}>Real Research 만의 놀라운 리워드{'\n'}지금 시작하세요!</Text>
            </View>
        </View>
    
        <View>
        <Button title="SIGN UP"></Button>
        <TouchableOpacity activeOpacity={0.75}>
          {/* <Link to={`/login`}> */}
          <Button title="LOGIN" onPress={this.handleLoginRoute} />
          {/* <Text>Login</Text> */}
          {/* </Link> */}
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // 혹은 'column'
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  TextTitle: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  TextBody: {
     marginTop: 30,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
    fontWeight: 'normal',
    color: '#222'
  },
  imgViewBox:{
      flex: 3,
      flexWrap: 'nowrap',
      flexDirection: 'row'
  },
  imgBox: {
    flex: 1,
    alignItems: "center",
    
  },
  Image: {
    resizeMode: 'contain',
    width: 160,
    height: 140,
    marginTop: 100
  },
  greyCircle: {
    resizeMode: 'contain',
    // flexDirection: 'row',
    // resizeMethod: 'resize',
    height: 12,
    width: 12,
    margin: 7.5,
    marginBottom: 70,
    tintColor: '#e7e8e9',
  },
  blueCircle: {
    resizeMode: 'contain',
    // flexDirection: 'row',
    // resizeMethod: 'resize',
    height: 12,
    width: 12,
    margin: 7.5,
    marginBottom: 70,
    tintColor: '#1e4683',
  },
});

export default Initial2;
