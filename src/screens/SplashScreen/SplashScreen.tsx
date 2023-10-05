// Vendor
import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
// Icons
import { LogoSplashScreen } from '@icons';
// Theme
import { colors } from '@theme';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={require('@assets/images/splash.png')} style={styles.image}>
        <LogoSplashScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainframe.bg,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
