import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const Player = ({route}) => {
  console.log(route.params.data[0]);
  return (
    <Video
      source={{uri: route.params.data[0]}}
      fullscreen={true}
      style={styles.backgroundVideo}
    />
  );
};

export default Player;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
