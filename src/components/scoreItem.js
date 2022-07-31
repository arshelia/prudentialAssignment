import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import happySvg from '../images/happy.svg';
import smileSvg from '../images/smile.svg';
import hoverHappySvg from '../images/hoverHappy.svg';
import hoverSmileSvg from '../images/hoverSmile.svg';
import unknownSvg from '../images/unknown.svg';

const happyIcon = () => <SvgXml width={36} height={36} xml={happySvg} />;
const smileIcon = () => <SvgXml width={36} height={36} xml={smileSvg} />;
const hoverHappyIcon = () => (
  <SvgXml width={36} height={36} xml={hoverHappySvg} />
);
const hoverSmileIcon = () => (
  <SvgXml width={36} height={36} xml={hoverSmileSvg} />
);
const unknownIcon = () => <SvgXml width={36} height={36} xml={unknownSvg} />;

const styles = StyleSheet.create({
  item: {
    width: 50,
    height: 332,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hoverItem: {
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    shadowOpacity: 0.15,
    shadowColor: '#000',
  },
  score: {
    width: 50,
    height: 280,
    display: 'relative',
  },
  inner: {
    width: 50,
    borderRadius: 22,
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderWidth: 3,
    borderColor: '#fff',
  },
  grayInner: {
    backgroundColor: '#CFCFCF',
  },
  happyInner: {
    backgroundColor: '#FF823C',
  },
  happyHoverInner: {
    borderWidth: 3,
    borderColor: '#FFE9D4',
    background: 'linear-gradient(180deg, #FFA14A 35.42%, #FFCC4A 100%)',
  },
  smileInner: {
    backgroundColor: '#52C873',
  },
  smileHoverInner: {
    borderWidth: 3,
    borderColor: '#DCFFD6',
    background: 'linear-gradient(180deg, #42F373 42.71%, #A1FD44 100%)',
  },
  scoreText: {
    position: 'absolute',
    top: 8,
    left: 9,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: 500,
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    left: 4,
    bottom: 2,
  },
  textHoverWrapper: {
    width: 36,
    height: 36,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  textCurrentWrapper: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#2D2F33',
  },
  textWrapper: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    lineHeight: 36,
    fontWeight: 500,
    textAlign: 'center',
  },
});
const ScoreItem = props => {
  const {item} = props;
  const currentDay = new Date().getDay();
  const [hover, setHover] = useState(false);
  return (
    <View
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{...styles.item, ...(hover ? styles.hoverItem : null)}}>
      <View style={styles.score}>
        <View
          style={{
            ...styles.inner,
            ...(!item.score
              ? styles.grayInner
              : item.score >= 90
              ? hover
                ? styles.happyHoverInner
                : styles.happyInner
              : hover
              ? styles.smileHoverInner
              : styles.smileInner),
          }}
          height={!item.score ? 87 : (item.score / 100) * 280}>
          <Text style={styles.scoreText}>{item.score}</Text>
          <View style={styles.icon}>
            {!item.score
              ? unknownIcon()
              : item.score >= 90
              ? hover
                ? hoverHappyIcon()
                : happyIcon()
              : hover
              ? hoverSmileIcon()
              : smileIcon()}
          </View>
        </View>
      </View>
      <View
        style={
          hover
            ? styles.textHoverWrapper
            : item.day === currentDay
            ? styles.textCurrentWrapper
            : styles.textWrapper
        }>
        <Text
          style={{
            ...styles.title,
            color:
              hover && item.score
                ? item.score >= 90
                  ? '#F36A1B'
                  : '#52C873'
                : item.day === currentDay
                ? '#fff'
                : '#2D2F33',
          }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};
export default ScoreItem;
