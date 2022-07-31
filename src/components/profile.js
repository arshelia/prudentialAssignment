import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  out: {
    width: '100%',
    padding: 12,
  },
  contaienr: {
    width: '100%',
    height: 399,
    borderRadius: 24,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 16},
    shadowRadius: 16,
    shadowOpacity: 0.15,
    shadowColor: '#000',
    display: 'flex',
    alignItems: 'center',
  },
  user: {
    marginTop: 43,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 12,
    color: '#2D2F33',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
  },
  score: {
    color: '#2D2F33',
    fontWeight: '500',
    fontSize: 72,
    lineHeight: 98,
  },
  subTitle: {
    color: '#929292',
    fontSize: 18,
    lineHeight: 25,
  },
});

const Profile = props => {
  const {user, averageScore} = props;
  return (
    <View style={styles.out}>
      <View style={styles.contaienr}>
        <View style={styles.user}>
          <Image
            source={user.avatar}
            width={36}
            height={36}
            borderRadius={18}
          />
          <Text style={styles.userName}>{user.name}</Text>
        </View>
        <Text style={styles.score}>{averageScore}</Text>
        <Text style={styles.subTitle}>周平均心情指数</Text>
      </View>
    </View>
  );
};

export default Profile;
