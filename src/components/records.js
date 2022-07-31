import React from 'react';
import {View, StyleSheet} from 'react-native';
import ScoreItem from './scoreItem';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 332,
    padding: '0 12px',
    position: 'relative',
  },
  top: {
    width: '100%',
    height: 136,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: '#F2F2F2',
  },
  itemWrapper: {
    width: '100%',
    height: 332,
    position: 'absolute',
    padding: '0 12px',
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

const Scores = props => {
  const {records} = props;
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.itemWrapper}>
        {records.map(item => (
          <ScoreItem item={item} key={item.day} />
        ))}
      </View>
    </View>
  );
};

export default Scores;
