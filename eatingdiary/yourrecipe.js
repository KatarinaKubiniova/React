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
    View, TextInput,
} from 'react-native';

export function Yourrecipe ({navigation})  {


    return (
        <SafeAreaView style={styles.screen}>

            <View style={{flex:0.1, backgroundColor: '#DB7093'}}>
            </View>

            <View style={{flex:0.13, backgroundColor: '#FFEFD5'}}>
                <Text style={styles.nadpis}>
                    Sledovanie kalórií
                </Text>
            </View>

            <View style={{flex:0.15, backgroundColor: '#FFFFF0'}}>
                <Text style={styles.standardtext}>
                    <TextInput
                    />
                </Text>
            </View>

            <View style={{flex:0.1, backgroundColor: '#FFEFD5', height: 80}}>
            </View>

        </SafeAreaView>
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
        color: 'white',
        textAlign: 'center',
    }
});
