import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Button, TouchableHighlight} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';

class ResearchForm extends Component {
  state = {
    question: [],
    questionLength: 0,
    isChecked: false,
    checkId: '',
    nowIndex: 0,
  };

  handlerPrev = (e) => {
    e.preventDefault();
    const nowIndex = this.state.nowIndex;
    if (nowIndex != 0) {
      this.setState({
        nowIndex: nowIndex - 1,
        checkId: '',
      });
    }
  };
  handlerNext = (e) => {
    e.preventDefault();
    const nowIndex = this.state.nowIndex;
    if (nowIndex != this.state.questionLength - 1) {
      this.setState({
        nowIndex: nowIndex + 1,
        checkId: '',
      });
    }
  };

  componentDidMount() {
    this.setState({
      question: [
        {id: 0, question: '설문조사 질문입니다. 이 질문에 대해서 어떻게 생각하시나요?', answer: ''},
        {id: 1, question: '설문조사 질문입니다. 이 질문에 대해서 어떻게 생각하시나요?', answer: ''},
        {id: 2, question: '설문조사 질문입니다. 이 질문에 대해서 어떻게 생각하시나요?', answer: ''},
      ],
      questionLength: 3,
    });
  }
  componentDidUpdate(preProps, preState) {
    if (preState.checkId != this.state.checkId) {
      this.setState({
        isChecked: true,
      });
    }
  }

  render() {
    let researchArr = this.state.question;
    let Arr;
    let researchList = [];
    let i = 0;
    researchArr.map(
      (data, index) =>
        (researchList = researchList.concat(
          <View
            style={styles.container}
            key={index}
          >

            <View style={styles.researchSubBox}>
              <Text style={styles.researchSubNumber}>{data.id+1}/{this.state.questionLength}</Text>
              <Text style={styles.researchSubText}>{data.question}</Text>
            </View>
            
            <ScrollView>

              <View style={styles.checkListFirst}>
                <Text style={styles.checkListText}>매우 나쁨</Text>
                <CheckBox
                  onClick={() => {
                    this.setState({
                      isChecked: !this.state.isChecked,
                      checkId: 1,
                    });
                  }}
                  isChecked={this.state.isChecked && this.state.checkId == 1}
                />
              </View>
                
              <View style={styles.checkList}>
                <Text style={styles.checkListText}>적당히 나쁨</Text>
                <CheckBox
                  onClick={() => {
                    this.setState({
                      isChecked: !this.state.isChecked,
                      checkId: 2,
                    });
                  }}
                  isChecked={this.state.isChecked && this.state.checkId == 2}
                />
              </View>
                
              <View style={styles.checkList}>
                <Text style={styles.checkListText}>보통</Text>
                <CheckBox
                  onClick={() => {
                    this.setState({
                      isChecked: !this.state.isChecked,
                      checkId: 3,
                    });
                  }}
                  isChecked={this.state.isChecked && this.state.checkId == 3}
                />
              </View>
                
              <View style={styles.checkList}>
                <Text style={styles.checkListText}>적당히 좋음</Text>
                <CheckBox
                  onClick={() => {
                    this.setState({
                      isChecked: !this.state.isChecked,
                      checkId: 4,
                    });
                  }}
                  isChecked={this.state.isChecked && this.state.checkId == 4}
                />
              </View>
                
              <View style={styles.checkList}>
                <Text style={styles.checkListText}>매우 좋음</Text>
                <CheckBox
                  onClick={() => {
                    this.setState({
                      isChecked: !this.state.isChecked,
                      checkId: 5,
                    });
                  }}
                  isChecked={this.state.isChecked && this.state.checkId == 5}
                />
              </View>

            </ScrollView>

          </View>
            
        )),
    );
    console.log('Length', this.state.questionLength);
    console.log('nowIndex', this.state.nowIndex);
    return (
      <View style={styles.container}>

        <Text style={styles.researchTitle}>설문조사 제목</Text>
          
        {researchList[this.state.nowIndex]}

        <View style={styles.buttonBox}>
          <TouchableHighlight
            style={this.state.nowIndex == 0 ? styles.buttonCancel : styles.button}
            activeOpacity={0.75}
            onPress={this.handlerPrev}
          >
            <Text style={styles.buttonText}>{this.state.nowIndex == 0 ? '취소' : '이전'}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.75}
            onPress={this.handlerNext}
          >
            <Text style={styles.buttonText}>{
            this.state.nowIndex == this.state.questionLength - 1
              ? '제출'
              : '다음'
          }</Text>
          </TouchableHighlight>
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
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  researchTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: '10%'
  },
  researchSubBox: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  researchSubNumber: {
    marginTop: 30,
    fontSize: 27,
    lineHeight: 36,
    fontWeight: '500',
    color: '#164895'
  },
  researchSubText: {
    marginTop: 30,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30
  },
  buttonBox: {
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  button: {
    width: '48%',
    height: 56,
    borderRadius: 30,
    backgroundColor: '#164895',
    color: '#FFF'
  },
  buttonCancel: {
    width: '48%',
    height: 56,
    borderRadius: 30,
    backgroundColor: '#c6c9cf',
    color: '#FFF'
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 56,
    fontWeight: '500',
    letterSpacing: 0.9
  },
  checkList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
    borderBottomWidth: 1,
    borderColor: '#dddddd'
  },
  checkListFirst: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#dddddd'
  },
  checkListText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#333'
  }
});

export default ResearchForm;
