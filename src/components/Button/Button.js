import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Buttons = ({title, press}) => {
  return (
    <TouchableOpacity style={styles.container} key={title} onPress={press}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'steelblue',
    margin: 12,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white'},
});

export default Buttons;
