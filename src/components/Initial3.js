import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Animated,
  Dimensions
} from "react-native";

// const images = new Array(3).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');
const images = new Array('','','')

const window = Dimensions.get("window");

export default class Initial3 extends Component {
  scrollX = new Animated.Value(0);

  state = {
    dimensions: {
      window
    }
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
                  <Image source={imageIndex == 0 ? (require('../imgs/icon_intro_01.png')) : imageIndex == 1 ? (require('../imgs/icon_intro_02.png')) : (require('../imgs/icon_intro_03.png'))} style={styles.card}/>
                    <View style={styles.textContainer}>
                      <Text style={styles.TextTitle}>
                      {imageIndex == 0 ? 'RESEARCH' : imageIndex == 1 ? 'WALLET' : 'REWARD'}
                      </Text>
                      <Text style={styles.infoText}>
                      {imageIndex == 0 ? '나의 생각이 전세계에 반영되는 설문조사' : imageIndex == 1 ? '쉽고 안전하고 빠른 지갑 송금 Real Research에서 가능합니다.' : 'Real Research 만의 놀라운 리워드 지금 시작하세요!'}
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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