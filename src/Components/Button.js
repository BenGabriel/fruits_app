import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import Styles from '../helpers/Styles';
import { height } from '../helpers/Index';

const Button = props => {
  return (
    <Pressable {...props} style={[styles.button, {...props.style}]}>
      <Text style={Styles.text(props.textColor, 1.8, 400)}>{props.children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 1,
    width: '85%',
    marginVertical: height(3),
  },
});
