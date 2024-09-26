import React from 'react';
import type {Node} from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Jedalnicek} from "./jedalnicek";
import {Statistiky} from "./statistiky";
import {Recepty} from "./recepty";
import {Typyakoschudnut} from "./typyakoschudnut";


function HomeScreen({navigation}) {
  const { t, i18n } = useTranslation();

  return (
      <SafeAreaView style={styles.screen}>

        <View style={{flex:0.1, backgroundColor: '#DB7093'}}>
        </View>

        <View style={{flex:0.13, backgroundColor: '#FFEFD5'}}>
          <Text style={styles.nadpis}>
            {t('Stay fit')}
          </Text>
        </View>

        <View style={{flex:0.15, backgroundColor: '#FFFFF0'}}>
          <Text style={styles.standardtext}>
            {t('This App will help you watching your calories and follow dietary plans.')}
             {'\n'}  {t('Good luck!')}
          </Text>
        </View>

        <View style={{flex:0.5, backgroundColor: 'white'}}>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Jedalnicek")} >
            <Text style={styles.tlacidlatext}>{t('Daily calories')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Statistiky")}>
            <Text style={styles.tlacidlatext}>BMI index</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Recepty")}>
            <Text style={styles.tlacidlatext}>{t('Recipes')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate("Typy na chudnutie")}>
            <Text style={styles.tlacidlatext}>{t('Your meals')}</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:0.1, backgroundColor: '#FFEFD5'}}>
        </View>

      </SafeAreaView>

  );
}

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Jedalnicek" component={Jedalnicek} />
          <Stack.Screen name="Statistiky" component={Statistiky} />
          <Stack.Screen name="Recepty" component={Recepty} />
          <Stack.Screen name="Typy na chudnutie" component={Typyakoschudnut} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
  },
  nadpis: {
    fontSize: 36,
    fontWeight: '800',
    color: '#696969',
    textAlign: 'center',
    marginTop: 15,
  },
  standardtext: {
    fontSize: 18,
    fontWeight: '400',
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 3,
    marginRight: 3,
  },
  tlacidlatext: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#696969',
    width: '50%',
    marginLeft: '25%',
  },
  button2: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#696969',
    width: '60%',
    marginLeft: '20%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  }
});

/*
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
export default App;
