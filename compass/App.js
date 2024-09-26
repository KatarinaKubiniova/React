import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import RNSimpleCompass from 'react-native-simple-compass';


export default function App () {
  
  const [d, setD] = useState(0)
  const degree_update_rate = 3;

  useEffect(() => {
    RNSimpleCompass.start(degree_update_rate, (degree) => {
      setD(degree)
    });
  },[])

  return (
      <SafeAreaView style={styles.screen}>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 36, color: 'red'}}>Compass</Text>
          <Text style={{fontSize: 30}}>Degree: {d}</Text>
        </View>
        <Image source={require("./assets/compass.png")} style={{width: 390, height: 390, transform: [{rotate: `${360-d}deg`}]}}/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
  }
});

