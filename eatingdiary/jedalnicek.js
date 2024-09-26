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
    TextInput
} from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
//import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Jedalnicek ({navigation})  {

    const { t, i18n } = useTranslation();

    //prepisat onChangeText na setText
    const [text, onChangeText] = React.useState("Text");
    const [number, onChangeNumber] = React.useState(null);
    const [date, onChangeDate] = React.useState(Date());
    const [poledate, onChangePoledate] = React.useState(null);
    const [kcalday, onChangeKcalday] = React.useState(0);

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
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ?  onChangePoledate(JSON.parse(jsonValue)) : onChangePoledate(null);
        } catch(e) {
            // error reading value
        }
    }

    React.useEffect(() => {

        if (poledate != null){
            storeData(date, poledate)
        }
    },[poledate])


        async function savingData() {
        //do poledat zavola funkcia async storage, ktora na zaklade kluca datum vytiahne data
        //console.log("novavec")
            if(text !== " " && number !== null && text != null && number !== 0) {
                let help

                try {
                    const jsonValue = await AsyncStorage.getItem(date)
                    help = jsonValue != null ? JSON.parse(jsonValue) : null;
                } catch (e) {
                    console.log(e)
                }

                if (help == null) {
                    let myInt1 = parseInt(number);
                    let myInt2 = parseInt("0");
                    console.log(typeof myInt2)
                    myInt2 = myInt2 + myInt1;
                    onChangeKcalday(myInt2)
                    //onChangeKcalday([number + kcalday])
                    onChangePoledate([["\n" + text + "  ", number, " kcal    kcal/24h: ", myInt2]])
                    console.log("test ended with null")
                } else {
                    let myInt1 = parseInt(number);
                    let myInt2 = parseInt(help[help.length - 1][3]);
                    console.log(typeof myInt2)
                    myInt2 = myInt2 + myInt1;
                    onChangeKcalday(myInt2)
                    help.push(["\n" + text + "  ", number, " kcal    kcal/24h: ", myInt2])
                    onChangePoledate(help)
                    console.log("test passed with value returned")
                }

                storeData(date, poledate)
                //console.log(poledate)
                onChangeText("Meal");
                onChangeNumber(0);
            }
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>

                <View style={{flex:0.5, backgroundColor: '#DB7093', height: 50}}>
                </View>

            <View style={{flex:0.13, backgroundColor: '#FFEFD5', height: 90}}>
                <Text style={styles.nadpis}>
                    {t('Daily calories')}
                </Text>
            </View>

            <View style={{flex:0.15, backgroundColor: '#FFFFF0', height: 130}}>
                <Text style={styles.standardtext}>
                    {t('Plan daily calories intake in 2 steps!')} {'\n'}{'\n'}
                    {t('1. Choose day in calendar')} {'\n'}
                    {t('2. Write meal + calories')} {'\n'}
                </Text>
            </View>

            <View style={{flex:0.6, height: 326}}>
                <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={{
                        //borderWidth: 1,
                        //borderColor: 'gray',
                        //height: 500,
                        paddingTop: 10,
                        textSectionTitleColor: "red",
                        selectedDayBackgroundColor: "red",
                        textDayHeaderFontFamily: 'monospace',
                        textSectionTitleDisabledColor: '#d9e1e8',
                    }}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={day => {
                        onChangeDate(day["dateString"]);
                        getData(day["dateString"]);
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={month => {
                        console.log('month changed', month);
                    }}
                    firstDay={1}
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                />
            </View>

                <View style={{backgroundColor: 'grey', marginTop: 5}}>
                    <Text style={styles.standardtext3}>
                        {t('Picked date:')} {date}
                    </Text>
                </View>

                <View style={{flex: 0.5, backgroundColor: 'white'}}>

                    <Text style={styles.standardtext2}>
                        {t("Meal: ")}
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        underlineColorAndroid = "transparent"
                        placeholder = "Text"
                        placeholderTextColor = '#DB7093'

                    />
                    <Text style={styles.standardtext2}>
                        {t('Number of calories:')}
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder= {t("Number of calories")}
                        keyboardType="numeric"
                        underlineColorAndroid = "transparent"
                        placeholderTextColor = '#DB7093'
                    />

                    <TouchableOpacity style={styles.submitButton} onPress={()=>savingData()}>
                        <Text style={styles.tlacidlatext}>
                            {t('Submit')}
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={{backgroundColor: "white"}}>
                    <Text style={styles.vypisKalorii}>
                        {poledate}
                    </Text>
                </View>

                <View style={{flex:0.5, backgroundColor: 'white', height: 40, paddingTop: 40}}>

                </View>

                <View style={{flex:0.5, backgroundColor: '#DB7093', height: 50, paddingTop: 40}}>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFFFFF',
    },
    submitButton: {
        backgroundColor: '#DB7093',
        padding: 10,
        margin: 15,
        height: 40,
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
    },
    standardtext2: {
        fontSize: 18,
        fontWeight: '500',
        color: 'grey',
        marginTop: 20,
        marginLeft: 20,
    },
    vypisKalorii: {
        fontSize: 18,
        fontWeight: '500',
        color: 'grey',
        marginLeft: 10,
        marginRight: 3,
    },
    standardtext3: {
        fontSize: 18,
        fontWeight: '500',
        color: "white",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
    },
    tlacidlatext: {
        //fontSize: 18,
        //fontWeight: '500',
        color: 'white',

        //textAlign: 'center',
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#DB7093',
    },
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

