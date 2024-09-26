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
    View, TextInput,
} from 'react-native';

export function Statistiky ({navigation})  {

    const { t, i18n } = useTranslation();

    const [hmotnost, onChangeHmotnost] = React.useState(null);
    const [vyska, onChangeVyska] = React.useState(null);
    const [bmi, onChangeBMI] = React.useState(0);

    function countBMI(){
        if(vyska === null || hmotnost === null){
            return;
        }
        //onChangeVyska(parseFloat(vyska));
        let tmp = parseFloat(vyska)/100.0
        //onChangeVyska(parseFloat(vyska)/100.0);
        console.log(tmp);
        console.log(typeof tmp)
        onChangeBMI(((hmotnost/(Math.pow(tmp, 2))).toFixed(1)));
    }

    return (
        <SafeAreaView style={styles.screen}>
        <ScrollView>
            <View style={{flex:0.1, backgroundColor: '#DB7093', height: 40}}>
            </View>

            <View style={{flex:0.13, backgroundColor: '#FFEFD5', height: 80}}>
                <Text style={styles.nadpis}>
                    {t('Learn your BMI index')}
                </Text>
            </View>

            <View style={{flex:0.15, backgroundColor: '#FFFFF0', height: 120}}>
                <Text style={styles.standardtext}>
                    {t('The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.')}
                </Text>
            </View>

            <View style={{flex:0.15, backgroundColor: 'white'}}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeHmotnost}
                    value={hmotnost}
                    keyboardType="numeric"
                    underlineColorAndroid = "transparent"
                    placeholder = {t("Weight")}
                    placeholderTextColor = '#DB7093'
                    //autoCapitalize = "none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeVyska}
                    value={vyska}
                    keyboardType="numeric"
                    underlineColorAndroid = "transparent"
                    placeholder = {t("Height")}
                    placeholderTextColor = '#DB7093'
                    //autoCapitalize = "none"
                />

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => countBMI()
                    }>
                    <Text style = {styles.submitButtonText}> {t("Submit")} </Text>
                </TouchableOpacity>

                <Text style = {styles.standardtext2}>
                    {t("Your BMI index:")} {bmi}
                </Text>
            </View>

            <View style={{backgroundColor: '#FFFFF0'}}>
                <Text style = {styles.text}>
                    BMI                  {t("Weight Status")}{'\n'}{'\n'}
                    {'<'}18                   {t("Underweight")}{'\n'}
                     18 – 25            {t("Healthy Weight")}{'\n'}
                     25 – 30            {t("Overweight")}{'\n'}
                    {'>'}30                   {t("Obesity")}{'\n'}
                </Text>
            </View>


            <View style={{flex:0.1, backgroundColor: '#FFEFD5', height: 50}}>
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
    input: {
        margin: 15,
        height: 40,
        borderColor: '#DB7093',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#DB7093',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
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
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    standardtext2: {
        fontSize: 22,
        fontWeight: '700',
        color: 'grey',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    tlacidlatext: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
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
        color: 'grey',
        marginLeft: 20,
        marginTop: 20,
        //textAlign: 'center',
    }
});
