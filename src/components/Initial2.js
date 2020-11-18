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
      <View style={styles.container}>
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
                  style={{
                    width: windowWidth,
                    height: 250
                  }}
                  key={imageIndex}
                >
                  <Image 
                    source={imageIndex == 0 ? (require('../imgs/icon_intro_01.png')) : imageIndex == 1 ? (require('../imgs/icon_intro_02.png')) : (require('../imgs/icon_intro_03.png'))}
                    style={styles.card}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.TextTitle}>
                    {imageIndex == 0 ? 'RESEARCH' : imageIndex == 1 ? 'WALLET' : 'REWARD'}
                    </Text>
                    <Text style={styles.infoText}>
                    {imageIndex == 0 ? '나의 생각이 전세계에\n반영되는 설문조사' : imageIndex == 1 ? '쉽고 안전하고 빠른 지갑 송금\nReal Research에서 가능합니다.' : 'Real Research 만의\n놀라운 리워드 지금 시작하세요!'}
                    </Text>
                  </View>
                  
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
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  TextTitle: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    color: "black",
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "bold"
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
  }
});

export default Initial2;
