import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import TopBar from './components/TopBar';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import Loading from './components/Loading';
import Initial2 from './components/Initial2';
import Login from './components/Login';

// const App = () => {
class App extends Component {
  state = {
    isLoading: true,
  };
  componentDidMount = async () => {
    setTimeout(() => {
      console.log('setTime');
      this.setState({isLoading: false});
    }, 3000);
  };
  render() {
    if (this.state.isLoading) {
      console.log('Loading..');
      return <Loading />;
    } else {
      console.log('load success');
      return (
        <NativeRouter>
          <ScrollView style={styles.container}>
            {/* <TopBar /> */}
            {/* <Route exact path="/" component={ListView} />
              <Route path="/detail/:id" component={DetailView} /> */}
            <Route exact path="/" component={Initial2} />
            <Route path="/login" component={Login} />
          </ScrollView>
        </NativeRouter>
      );
      //   return <Initial />;
    }
  }
}
//   return (
//     <NativeRouter>
//       <ScrollView style={styles.container}>
//         <TopBar />
//         <Route exact path="/" component={ListView} />
//         <Route path="/detail/:id" component={DetailView} />
//       </ScrollView>
//     </NativeRouter>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
