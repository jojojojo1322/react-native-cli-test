import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Linking,
  Animated,
  Dimensions
} from 'react-native';
import {Link} from 'react-router-native';

const images = new Array('','','')
const window = Dimensions.get("window");

class Initial2 extends Component {
  scrollX = new Animated.Value(0);
  state = {
    number: 1
  };
  state = {
    dimensions: {
      window
    }
  };
  handleBack = () => {
    this.props.history.goBack();
  };
  handleLoginRoute = (e) => {
    console.log('/ >> /login');
    this.props.history.push('/login');
  };
  
  onDimensionsChange = ({ window }) => {
    this.setState({ dimensions: { window } });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.onDimensionsChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onDimensionsChange);
  }
  render() {
    const windowWidth = this.state.dimensions.window.width;
    return (
      <View style={styles.container2}>
        <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.scrollX
                  }
                }
              }
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={styles.imgBox, {width: windowWidth}}
                  key={imageIndex}
                >
                  <Image 
                    source={imageIndex == 0 ? (require('../imgs/icon_intro_01.png')) : imageIndex == 1 ? (require('../imgs/icon_intro_02.png')) : (require('../imgs/icon_intro_03.png'))}
                    style={styles.Image}
                  />
                  <Text style={styles.TextTitle}>
                    {imageIndex == 0 ? 'RESEARCH' : imageIndex == 1 ? 'WALLET' : 'REWARD'}
                  </Text>
                  <Text style={styles.infoText}>
                    {imageIndex == 0 ? '나의 생각이 전세계에\n반영되는 설문조사' : imageIndex == 1 ? '쉽고 안전하고 빠른 지갑 송금\nReal Research에서 가능합니다.' : 'Real Research 만의\n놀라운 리워드 지금 시작하세요!'}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const backgroundColor = this.scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1)
                ],
                outputRange: ['#e7e8e9', '#164895', '#e7e8e9'],
                extrapolate: "clamp"
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { backgroundColor }]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    
        <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.button} activeOpacity={0.75}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogin} activeOpacity={0.75} onPress={this.handleLoginRoute}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  imgBox: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  Image: {
    resizeMode: 'contain',
    width: 160,
    height: 140,
    alignSelf: 'center'
  },
  scrollContainer: {
    height: 400,
    alignItems: "center",
    justifyContent: "center"
  },
  TextTitle: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  },
  infoText: {
    marginTop: 20,
    textAlign: 'center',
    color: "black",
    color: '#222',
    fontSize: 17,
    lineHeight: 25,
    fontWeight: 'normal'
  },
  normalDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#e7e8e9',
    marginHorizontal: 6
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonBox: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
      width: '90%',
      height: 56,
      borderRadius: 30,
      backgroundColor: '#164895',
      color: '#FFF',
      marginTop: 40
  },
  buttonLogin: {
      width: '90%',
      height: 56,
      borderRadius: 30,
      backgroundColor: '#0b95c9',
      color: '#FFF',
      marginTop: 10
  },
  buttonText: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 17,
      lineHeight: 56,
  },
});

export default Initial2;
