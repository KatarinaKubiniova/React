import React from "react";
import {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking, Platform, Image, Pressable } from "react-native";
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';


  /*const [text, setText] =useState("");
  const dial=(number)=>{
    setText(text+number);
  }*/
  //const [number, onChangeNumber] = React.useState(null);

  /*return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );*/


export default function App() {
  //aconst call2=require('./assets/call2.png/');
  //const backspace=require('./assets/backspace.png/');
  const [isBack, setBack] = useState(false);
  let backspace = isBack
      ? require("./assets/backspace.png/")
      : null;


  const [isGreen, setGreen] = useState(false);
    let call2 = isGreen
        ? require("./assets/call1.png")
        : require("./assets/call2.png");


  const [number, setNumber] = useState("");
  const dial=(cislo)=>{
    setNumber(number+cislo);
    setBack(true);
  }

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 0.6, backgroundColor: "green", padding: 8}} >
      <Text style={{color: 'white', fontSize: 20}}>
        Phone
      </Text>
      </View>
      <View style={{ flex: 0.24, backgroundColor: "white", padding: 8}} >
      <Pressable onPress={()=>{setNumber(number.slice(0,-1)); if(number == "") setBack(false)}} onLongPress={()=>{setNumber(""); if(number == "") setBack(false)}}>
        <Image source={backspace} style={{width: 40, height: 31}}>
        </Image>
      </Pressable>
      </View>
      <View style={{ flex: 1, backgroundColor: "white" }} >
        <Text style={styles.text}>
          {number}
        </Text>
      </View>
      <View style={{ flex: 0.50, backgroundColor: "white", flexDirection:"row" }} >
      <TouchableOpacity onPress={()=>dial("1")} activeOpacity={0.15} style={styles.button}  >
        <Text style={{color: 'black', fontSize: 30}}> 1</Text>
        <Text style={{color: 'black', fontSize: 9}}>     o_o </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dial("2")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> 2</Text>
        <Text style={{color: 'black', fontSize: 9}}>     ABC </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dial("3")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> 3</Text>
        <Text style={{color: 'black', fontSize: 9}}>     DEF </Text>
      </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5, backgroundColor: "white", flexDirection:"row" }} >
      <TouchableOpacity onPress={()=>dial("4")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> 4</Text>
        <Text style={{color: 'black', fontSize: 9}}>     GHI </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dial("5")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> 5</Text>
        <Text style={{color: 'black', fontSize: 9}}>     JKL </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dial("6")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> 6</Text>
        <Text style={{color: 'black', fontSize: 9}}>     MNO </Text>
      </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5, backgroundColor: "white", flexDirection:"row" }} >
      <TouchableOpacity onPress={()=>dial("7")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> 7</Text>
        <Text style={{color: 'black', fontSize: 9}}>    PQRS </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dial("8")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> 8</Text>
        <Text style={{color: 'black', fontSize: 9}}>     TUV </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dial("9")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> 9</Text>
        <Text style={{color: 'black', fontSize: 9}}>    WXYZ </Text>
      </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5, backgroundColor: "white", flexDirection:"row" }} >
      <TouchableOpacity onPress={()=>dial("*")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> *</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dial("0")} activeOpacity={0.15} style={styles.button} onLongPress={()=>dial("+")} activeOpacity={0.15} style={styles.button}>
        <Text style={{color: 'black', fontSize: 30}}> 0</Text>
        <Text style={{color: 'black', fontSize: 10}}>     + </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dial("#")} activeOpacity={0.15} style={styles.button} >
        <Text style={{color: 'black', fontSize: 30}}> #</Text>
      </TouchableOpacity>
      </View>
      <View style={{ flex: 0.75, backgroundColor: "white", justifyContent: 'center', alignItems: 'center' }} >
      <TouchableOpacity onPress={()=>{
                      if(number.indexOf('#')==-1 && number.indexOf('+')==-1 && number.indexOf('*')==-1 && number.length>0){
                        setGreen(!isGreen);
                        RNImmediatePhoneCall.immediatePhoneCall(number);
                        console.log(number);
                      }
                    }}
                activeOpacity={0.5} style={styles.TouchableOpacity}>
           <Image source={call2} style={styles.image} style={{width: 50, height: 50}}>
           </Image>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: '33.3%',
    padding: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.75,
    borderColor: 'grey',
  },
  TouchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 43,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  }
});

//export default Flex;

/*export default function App() {
  return (
      <View style={styles.container}>
          <Button
              onPress={function () {
                  console.log("Button was pressed");
              }}
              title="Turn On"
          />
      </View>
  );
}*/

/*const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
*/

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
*/