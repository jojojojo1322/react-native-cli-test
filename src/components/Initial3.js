import React, { useState, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Modal,
  Button,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  FlatList,
  StatusBar,
  Linking,
  Animated,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');

const DATA = [
  {
    id: "1",
    title: "Afghanistan(AF)",
    cd: '+93'
  },
  {
    id: "2",
    title: "Albania",
    cd: '+355'
  },
  {
    id: "3",
    title: "Argentina",
    cd: '+54'
  },
  {
    id: "4",
    title: "Angola",
    cd: '+244'
  },
];

const CountryList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#efefef" : "#FFF";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View
      style={styles.countryList}
    >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.cd}>{item.cd}</Text>
  </TouchableOpacity>
);

class ModalCountry extends Component {
  render() {
    return (
      <>
        <View style={styles.modalView}>

          <View style={styles.modalBox}>
            <Text style={styles.modalText}>국적선택</Text>
            <TouchableHighlight
              style={styles.closeButton}
              setModalVisible={this.setModalVisible}
              modalVisible={this.props.modalVisible}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Image style={styles.closeButton} source={require('../imgs/icon_close.png')}/>
            </TouchableHighlight>
          </View>

          <View style={styles.modalInputBox}>
            <TextInput
              style={styles.searchInputText}
              placeholder="search"
            ></TextInput>
            <TouchableHighlight
              style={styles.closeButton}
            >
              <Image  style={styles.closeButton} source={require('../imgs/icon_search.png')}/>
            </TouchableHighlight>
          </View>

          <CountryList />

        </View>
      </>
    );
  }
}


class Initial3 extends Component {

  state = {
    dimensions: {
      window,
    },
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    const windowWidth = this.state.dimensions.window.width;
    return (
      <View style={styles.container}>
          
          <TouchableHighlight
          activeOpacity={0.75}
          onPress={() => {
            this.setModalVisible(true);
          }}
          >
            <Text>
              button
            </Text>
          </TouchableHighlight>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >

            <TouchableOpacity
              style={styles.centeredView}
              onPress={() => {
                this.setModalVisible(!modalVisible);
              }}
            >

              <ModalCountry data={this.state} setModalVisible={this.setModalVisible}></ModalCountry>

            </TouchableOpacity>
            
          </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'hsla(0, 0%, 20%, 0.6)'
  },
  modalView: {
    width: '90%',
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'hsla(0, 0%, 20%, 0.6)'
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    marginTop: '5%',
    marginBottom: '5%'
  },
  modalBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  modalInputBox : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginTop: 15
  },
  modalText: {
    fontSize: 20,
    lineHeight: 24,
  },
  closeButton: {
    width: 20 ,
    height: 20,
  },
  searchInputText: {
    fontSize: 15
  },
  countryList: {
    width: '100%',
    flexDirection: 'column'
  },
  item: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
  },
});

export default Initial3;
