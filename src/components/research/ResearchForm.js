import React, {Component} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
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
        {id: 0, question: '1-1번 설문조사 질문입니다.', answer: ''},
        {id: 1, question: '1-2번 설문조사 질문입니다.', answer: ''},
        {id: 2, question: '1-3번 설문조사 질문입니다.', answer: ''},
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
          <View key={index}>
            <Text>{data.question}</Text>
            <Text>매우 나쁨</Text>
            {/* <CheckBox
            disabled={false}
            value={this.state.c1}
            onValueChange={(value) => this.setState({c1: value})}
          /> */}
            <CheckBox
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                  checkId: 1,
                });
              }}
              isChecked={this.state.isChecked && this.state.checkId == 1}
            />
            <Text>적당히 나쁨</Text>
            <CheckBox
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                  checkId: 2,
                });
              }}
              isChecked={this.state.isChecked && this.state.checkId == 2}
            />
            <Text>보통</Text>
            <CheckBox
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                  checkId: 3,
                });
              }}
              isChecked={this.state.isChecked && this.state.checkId == 3}
            />
            <Text>적당히 좋음</Text>
            <CheckBox
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                  checkId: 4,
                });
              }}
              isChecked={this.state.isChecked && this.state.checkId == 4}
            />
            <Text>매우 좋음</Text>
            <CheckBox
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                  checkId: 5,
                });
              }}
              isChecked={this.state.isChecked && this.state.checkId == 5}
            />
          </View>,
        )),
    );
    console.log('Length', this.state.questionLength);
    console.log('nowIndex', this.state.nowIndex);
    return (
      <ScrollView>
        <Text>설문조사 제목</Text>
        {researchList[this.state.nowIndex]}
        <Button
          title={this.state.nowIndex == 0 ? '취소' : '이전'}
          onPress={this.handlerPrev}></Button>
        <Button
          title={
            this.state.nowIndex == this.state.questionLength - 1
              ? '제출'
              : '다음'
          }
          onPress={this.handlerNext}></Button>
      </ScrollView>
    );
  }
}

export default ResearchForm;
