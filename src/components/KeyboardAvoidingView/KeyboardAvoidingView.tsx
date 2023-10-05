import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollViewProps as RNScrollViewProps,
  SafeAreaView,
  ScrollView,
} from 'react-native';

interface KeyboardAvoidingViewProps {
  children: React.ReactNode;
  style?: RNScrollViewProps['contentContainerStyle'];
  backgroundColor?: string;
  headerAvailable?: boolean;
}

export default function GaKeyboardAvoidingView({
  children,
  style,
  backgroundColor,
  headerAvailable = true,
}: KeyboardAvoidingViewProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor || '#000' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={headerAvailable ? 40 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            {
              flex: 1,
            },
            style,
          ]}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
