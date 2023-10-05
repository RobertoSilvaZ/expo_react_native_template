import React from 'react';
import { Pressable, PressableProps as RNButtonProps } from 'react-native';

export default function GaButton({ children, ...attrs }: RNButtonProps) {
  return <Pressable {...attrs}>{children}</Pressable>;
}
