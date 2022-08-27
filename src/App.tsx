import React from 'react';
import {StyleSheet, SafeAreaView, Switch, View, Text} from 'react-native';
import {ThemeContext} from './context/ThemeContext';
import {useState} from 'react';
import {colors} from './styles/Colors';
import Keyboard from './components/Keyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: 'black'}]
        }>
        <View style={styles.dark_mode_switch_container}>
          <Text
            style={
              theme === 'light'
                ? styles.dark_mode_text
                : [styles.dark_mode_text, {color: colors.light}]
            }>
            Dark Mode
          </Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </View>
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dark_mode_switch_container: {
    flexDirection: 'row',
  },
  dark_mode_text: {
    color: colors.dark,
    fontWeight: 'bold',
  },
});
