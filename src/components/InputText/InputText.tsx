import React from 'react';
import { Platform, TextInputProps as RNTextInputProps, TextInput } from 'react-native';

export default function InputText({ ...attrs }: RNTextInputProps) {
  if (attrs.textContentType === 'emailAddress') {
    return (
      <TextInput
        {...attrs}
        inputMode="email"
        autoComplete="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        underlineColorAndroid="transparent"
      />
    );
  }

  if (attrs.textContentType === 'password') {
    return (
      <TextInput
        {...attrs}
        inputMode="text"
        keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
        textContentType="password"
        autoComplete="password"
        secureTextEntry
        underlineColorAndroid="transparent"
      />
    );
  }

  return (
    <TextInput
      {...attrs}
      inputMode="text"
      autoComplete="off"
      keyboardType="default"
      textContentType="none"
      underlineColorAndroid="transparent"
    />
  );
}
