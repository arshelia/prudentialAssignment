import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
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
  score: {
    width: 50,
    height: 280,
    borderRadius: 25,
    overflow: 'hidden',
  },
  hoverScore: {
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.15,
    shadowColor: '#000',
  },
  innerWrapper: {
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    left: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  inner: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#fff',
  },
  happyHoverInner: {
    borderWidth: 3,
    borderColor: '#FFE9D4',
  },
  smileHoverInner: {
    borderWidth: 3,
    borderColor: '#DCFFD6',
  },
  scoreText: {
    position: 'absolute',
    top: 8,
    left: 9,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: '500',
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    left: 4,
    bottom: 2,
  },
  textWrapper: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  textHoverWrapper: {
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    backgroundColor: '#fff',
  },
  textCurrentWrapper: {
    backgroundColor: '#2D2F33',
  },
  title: {
    fontSize: 18,
    lineHeight: 36,
    fontWeight: '500',
    textAlign: 'center',
  },
});
const ScoreItem = props => {
  const {item, isHoverd} = props;
  const currentDay = new Date().getDay();
  const getInnterGradient = () => {
    if (!item.score) {
      return ['#CFCFCF', '#CFCFCF', '#CFCFCF'];
    } else {
      if (item.score >= 90) {
        return isHoverd
          ? ['#FFA14A', '#FFCC4A']
          : ['#FF823C', '#FF823C', '#FF823C'];
      } else {
        return isHoverd
          ? ['#42F373', '#A1FD44']
          : ['#52C873', '#52C873', '#52C873'];
      }
    }
  };
  const targetHeight = !item.score ? 87 : Math.ceil((item.score / 100) * 280);
  const upAnimation = {
    from: {
      height: 0,
    },
    to: {
      height: targetHeight,
    },
  };
  return (
    <View style={styles.item}>
      <View style={{...styles.score, ...(isHoverd ? styles.hoverScore : null)}}>
        <Animatable.View
          style={styles.innerWrapper}
          animation={upAnimation}
          duration={500}
          delay={100}>
          <LinearGradient
            colors={getInnterGradient()}
            style={{
              ...styles.inner,
              ...(item.score
                ? isHoverd
                  ? item.score >= 90
                    ? styles.happyHoverInner
                    : styles.smileHoverInner
                  : null
                : null),
            }}>
            <Text style={styles.scoreText}>{item.score}</Text>
            <View style={styles.icon}>
              {!item.score
                ? unknownIcon()
                : item.score >= 90
                ? isHoverd
                  ? hoverHappyIcon()
                  : happyIcon()
                : isHoverd
                ? hoverSmileIcon()
                : smileIcon()}
            </View>
          </LinearGradient>
        </Animatable.View>
      </View>
      <View
        style={{
          ...styles.textWrapper,
          ...(isHoverd
            ? styles.textHoverWrapper
            : item.day === currentDay
            ? styles.textCurrentWrapper
            : null),
        }}>
        <Text
          style={{
            ...styles.title,
            color:
              isHoverd && item.score
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
