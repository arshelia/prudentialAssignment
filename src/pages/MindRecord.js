import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import backSvg from '../images/back.svg';
import Profile from '../components/profile';
import Records from '../components/records';

const styles = StyleSheet.create({
  back: {
    width: 27,
    height: 20,
    paddingHorizontal: 4,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 12,
    marginTop: -199,
  },
});

export default class MindRecord extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '历史心情指数',
    headerTintColor: '#2D2F33',
    headerLeft: () => (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.back}>
          <SvgXml width={27} height={20} xml={backSvg} />
        </View>
      </TouchableOpacity>
    ),
  });
  state = {
    user: {
      name: '李强',
      avatar: require('../images/avatar.png'),
    },
    records: [
      {
        title: '六',
        day: 6,
        score: 86,
      },
      {
        title: '日',
        day: 0,
        score: 80,
      },
      {
        title: '一',
        day: 1,
        score: null,
      },
      {
        title: '二',
        day: 2,
        score: 90,
      },
      {
        title: '三',
        day: 3,
        score: 92,
      },
      {
        title: '四',
        day: 4,
        score: 97,
      },
      {
        title: '五',
        day: 5,
        score: 81,
      },
    ],
    averageScore: 0,
  };

  getAverage = list => {
    const filterList = list.filter(item => item.score !== null);
    const scores = filterList.map(item => item.score);
    const sum = scores.reduce((prev, cur) => prev + cur, 0);
    const averageScore = Math.round(sum / scores.length);
    this.setState({
      averageScore,
    });
  };

  componentDidMount() {
    this.getAverage(this.state.records);
  }

  render() {
    const {user, records, averageScore} = this.state;
    return (
      <View style={styles.container}>
        <Profile user={user} averageScore={averageScore} />
        <View style={styles.wrapper}>
          <Records records={records} />
        </View>
      </View>
    );
  }
}
