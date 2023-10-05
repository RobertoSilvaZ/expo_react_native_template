// Vendor
import React from 'react';
import {  SafeAreaView, StatusBar } from 'react-native';
// Components
import { KeyboardAvoidingView, Text } from '@components';

const HomeScreen: React.FC = () => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView backgroundColor="transparent">
          <Text>Home</Text>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
 

export default HomeScreen;
