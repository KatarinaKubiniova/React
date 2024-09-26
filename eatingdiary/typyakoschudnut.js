import React from 'react';
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
    TextInput,
    Alert,
    Image,
    Platform, PermissionsAndroid
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import NativePermissionsAndroid from "react-native/Libraries/PermissionsAndroid/NativePermissionsAndroid";



export function Typyakoschudnut ({navigation})  {

    const { t, i18n } = useTranslation();

    const [postup, onChangePostup] = React.useState("Text");
    const [nazov, onChangeNazov] = React.useState("Text");
    const [suroviny, onChangeSuroviny] = React.useState("Text");
    const [image, onChangeImage] = React.useState("");
    const [poledate, onChangePoledate] = React.useState(null);
    const [vykreslit, onChangeVykreslit] = React.useState(null)


    async function cameralaunch() {
        if(Platform.OS === "android") {
            let tmp = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            if(tmp === PermissionsAndroid.RESULTS.GRANTED) {
                const result = await launchCamera();
                onChangeImage(result["assets"][0]["uri"])
            }
        }
        // console.log(poledate);
        // //console.log(result);
        // let tmp;
        // onChangeImage(image + 1);
        // tmp.push(<Image source={{uri: result["assets"][0]["uri"]}} style={{height: 50, width: 50, resizeMode: "contain"}} key={image} />)
        //
        // //tmp.push(<Image source={{uri: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"}} style={{height: 50, width: 50, resizeMode: "contain"}} key={image} />)
        // //tmp = [<Image source={{uri: result["assets"][0]["uri"]}} style={{height: 50, width: 50, resizeMode: "contain"}} key={"image"}/>]
        // tmp.push(<Text key={"text"}>vec</Text>)
        // console.log(tmp);
        // onChangePoledate(tmp);
    }

    async function galerypick(){
        if(Platform.OS === "android") {
            let tmp = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
            if(tmp === PermissionsAndroid.RESULTS.GRANTED) {
                const result = await launchImageLibrary();
                onChangeImage(result["assets"][0]["uri"])
            }
        }

        //const result = await launchImageLibrary();
        //onChangeImage(result["assets"][0]["uri"])
    }

    async function storeData(key, value){
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
            console.error(e);
        }
    }

    const getData = async (key) => {
        try {
            let jsonValue = await AsyncStorage.getItem("kluc2")
            if (jsonValue != null) {
                jsonValue =  JSON.parse(jsonValue)
                let data = []
                //data.push(jsonValue)
                console.log(jsonValue)
                const leng = jsonValue.length

                for (let i = 0; i < leng; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (j ===0){
                            data.push(<Text key={i*10+j}  style={styles.nazovjedla}>{jsonValue[i][j]}</Text>)
                        }
                        else if ( j === 1){
                            data.push(<Text key={i*10+j}  style={styles.suroviny2}>{jsonValue[i][j]}</Text>)

                        }
                        else if (j === 2) {
                            data.push(<Text key={i*10+j}  style={styles.instrukcie}>{jsonValue[i][j]}</Text>)
                        }
                        else if (j === 3 && jsonValue[i][j] !== ""){
                            data.push(<Image source={{uri: jsonValue[i][j]}} key={i*10+j} style={{resizeMode: "contain", height: 241, width: 240, marginLeft: 30, marginBottom: 40, marginTop: 10}}/>)
                        }
                    }
                }

                //console.log(data)
                //if(vykreslit === null) {
                    onChangeVykreslit(data)
                /*}else{
                    data.push(vykreslit);
                    onChangeVykreslit(data);
                }*/
            } else {
                onChangeVykreslit(null)
            }
        } catch(e) {
            // error reading value
        }



        // try {
        //     const jsonValue = await AsyncStorage.getItem("a")
        //     return jsonValue != null ? onChangePoledate(JSON.parse(jsonValue)) : onChangePoledate(null);
        // } catch(e) {
        //     // error reading value
        // }
    }

    React.useEffect(()=>{
        //console.log(vykreslit)
    },[vykreslit])

    React.useEffect(() => {
        async function loadPoleDat(){
            //let data = await AsyncStorage.removeItem("kluc")
            let jsonValue = await AsyncStorage.getItem("kluc2")
            if (jsonValue != null) {
                onChangePoledate(JSON.parse(jsonValue))
            }
        }

        loadPoleDat()
    },[])


    async function savingData() {
        //do poledat zavola funkcia async storage, ktora na zaklade kluca datum vytiahne data
        //console.log("novavec")
        let help = (poledate === null) ? [] : poledate
        help.push([nazov, suroviny, postup, image])
        onChangeImage("")
        console.log(help)

        onChangePoledate(help)
        storeData("kluc2", help)//
        // console.log(poledate)
        onChangePostup("Text");
        onChangeSuroviny("Text");
        onChangeNazov("Text");
    }


    //const newCameraPermission = await Camera.requestCameraPermission()

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>
            <View style={{flex:0.1, backgroundColor: '#DB7093', height: 50}}>
            </View>

            <View style={{flex:0.13, backgroundColor: '#FFEFD5', height: 110}}>
                <Text style={styles.nadpis}>
                    {t('Have your own FIT recepies')}
                </Text>
            </View>

            <View style={{flex:0.15, backgroundColor: '#FFFFF0'}}>
                <Text style={styles.standardtext}>
                    {t('Write your recipe and take a photo of your meal!')}
                </Text>
            </View>

            <View style={{flex:0.1, backgroundColor: 'white'}}>

                <Text style={styles.standardtext2}>
                   {t('Name: ')}
                </Text>

                <TextInput
                    style={styles.nazov}
                    onChangeText={onChangeNazov}
                    value={nazov}
                    underlineColorAndroid = "transparent"
                    placeholder = "Weight"
                    placeholderTextColor = '#DB7093'
                />

                <Text style={styles.standardtext2}>
                    {t('Ingredients: ')}
                </Text>

                <TextInput
                    multiline
                    numberOfLines={10}
                    style={styles.suroviny}
                    onChangeText={onChangeSuroviny}
                    value={suroviny}
                    underlineColorAndroid = "transparent"
                    placeholder = "Weight"
                    placeholderTextColor = '#DB7093'
                />

                <Text style={styles.standardtext2}>
                    {t('Instructions: ')}
                </Text>

                <TextInput
                    multiline
                    numberOfLines={30}
                    style={styles.postup}
                    onChangeText={onChangePostup}
                    //onChangeText={text => onChangeText(text)}
                    value={postup}
                    underlineColorAndroid = "transparent"
                    placeholder = "Weight"
                    placeholderTextColor = '#DB7093'
                />

                <TouchableOpacity style={styles.submitButton3} onPress={()=>cameralaunch()}>
                    <Text style={styles.tlacidlatext3}>{t('Take photo')}</Text>
                </TouchableOpacity>

                <Text style={styles.standardtext2}>
                    {t('or')}
                </Text>

                <TouchableOpacity style={styles.submitButton3} onPress={()=>galerypick()}>
                    <Text style={styles.tlacidlatext3}>{t('Pick photo from gallery')}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton} onPress={()=>savingData()}>
                    <Text style={styles.tlacidlatext}>{t('Save recipe')}</Text>
                </TouchableOpacity>
            </View>

                <View style={{ backgroundColor: "#DCDCDC", marginTop: 12}}>
                    <TouchableOpacity style={styles.submitButton2} onPress={()=>getData("kluc2")}>
                        <Text style={styles.tlacidlatext2}>{t('**Show my fit recipes**')}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {vykreslit}
                </View>

                <View style={{backgroundColor: "white", height: 30}}>
                </View>

                <View style={{backgroundColor: "grey", height: 45}}>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFFFFF',
    },
    nazovjedla: {
    fontSize: 25,
        fontWeight: '400',
        color: '#E9967A',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,

    //backgroundColor: "#FFA07A",
    },
    instrukcie: {
    fontSize: 15,
        fontWeight: '300',
        color: 'black',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
    },
    suroviny2: {
        fontSize: 16,
        fontWeight: '700',
        color: 'grey',
        marginLeft: 15,
    },
    postup: {
        margin: 15,
        height: 100,
        borderColor: '#DB7093',
        borderWidth: 1,
        textAlignVertical: "top"
    },
    nazov: {
        margin: 15,
        height: 40,
        borderColor: '#DB7093',
        borderWidth: 1,
        textAlignVertical: "top"
    },
    suroviny: {
        margin: 15,
        height: 70,
        borderColor: '#DB7093',
        borderWidth: 1,
        textAlignVertical: "top"
    },
    submitButton: {
        backgroundColor: '#DB7093',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButton2: {
        backgroundColor: '#E9967A',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
    },
    submitButton3: {
        backgroundColor: 'white',
        borderColor: '#DB7093',
        borderWidth: 1,
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
    },
    nadpis: {
        fontSize: 36,
        fontWeight: '800',
        color: '#696969',
        textAlign: 'center',
        marginTop: 7,
        marginLeft: 5,
        marginRight: 5,
    },
    standardtext3: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        //textAlign: 'center',
        marginTop: 10,
        marginLeft: 15
    },
    standardtext: {
        fontSize: 18,
        fontWeight: '400',
        color: 'grey',
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    standardtext2: {
        fontSize: 15,
        fontWeight: '400',
        color: 'grey',
        marginTop: 1,
        marginLeft: 15,
    },
    tlacidlatext: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',

    },
    tlacidlatext3: {
        fontSize: 15,
        fontWeight: '500',
        color: '#DB7093',

    },
    tlacidlatext2: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#696969',
        width: '40%',
        marginLeft: '30%',
    },
    button2: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#696969',
        width: '80%',
        marginLeft: '10%',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: 'center',
    }
});
