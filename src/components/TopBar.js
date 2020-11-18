import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withRouter} from 'react-router-native';

const TopBar = ({location}) => {
  console.log(location.pathname);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {location.pathname == '/' ? '그림을 클릭하세요!' : '상세 그림'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
  },
});

export default withRouter(TopBar);
