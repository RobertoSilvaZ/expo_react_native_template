import React from 'react';
import { TextProps as RNTextProps, StyleSheet, Text, TextStyle } from 'react-native';

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}
const GaText = ({ children, style, ...attrs }: TextProps) => {
  return (
    <Text style={[styles.text, style]} {...attrs}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'FontRegular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
});

export default GaText;
