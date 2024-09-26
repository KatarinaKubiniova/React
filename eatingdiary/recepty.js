import { useTranslation } from 'react-i18next';
import './i18n';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Pressable,
    useColorScheme,
    Image,
} from 'react-native';

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';


//fRu29Hrk6xpxkxr51ZyGs7txsGa8Qg4ybmBKm3uu api key agriculture us
export function Recepty ({navigation})  {

    const { t, i18n } = useTranslation();

    //const [isLoading, setLoading] = useState(true);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    //console.log(data);

    function writeRecipe(param){
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+ param)
            .then((response) => response.json())
            .then((dezery)=>{
                for(let i = 0; i<5; i++) {
                    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + dezery["meals"][i]["idMeal"])
                        .then((response2) => response2.json())
                        .then((json) =>{
                            if(i === 0){
                                setData1([json["meals"][0]["strCategory"],
                                    t(json["meals"][0]["strMeal"]),
                                    json["meals"][0]["strMealThumb"],
                                    t(json["meals"][0]["strInstructions"]),
                                    t(json["meals"][0]["strIngredient1"]),
                                    t(json["meals"][0]["strIngredient2"]),
                                    t(json["meals"][0]["strIngredient3"]),
                                    t(json["meals"][0]["strIngredient4"]),
                                    t(json["meals"][0]["strIngredient5"]),
                                    t(json["meals"][0]["strIngredient6"]),
                                    t(json["meals"][0]["strIngredient7"]),
                                    json["meals"][0]["strIngredient8"],
                                    json["meals"][0]["strIngredient9"],
                                    json["meals"][0]["strIngredient10"],
                                    json["meals"][0]["strIngredient11"],
                                    json["meals"][0]["strIngredient12"],
                                    json["meals"][0]["strIngredient13"],
                                    json["meals"][0]["strIngredient14"],
                                    t(json["meals"][0]["strMeasure1"]),
                                    t(json["meals"][0]["strMeasure2"]),
                                    t(json["meals"][0]["strMeasure3"]),
                                    t(json["meals"][0]["strMeasure4"]),
                                    t(json["meals"][0]["strMeasure5"]),
                                    t(json["meals"][0]["strMeasure6"]),
                                    t(json["meals"][0]["strMeasure7"]),
                                    json["meals"][0]["strMeasure8"],
                                    json["meals"][0]["strMeasure9"],
                                    json["meals"][0]["strMeasure10"],
                                    json["meals"][0]["strMeasure11"],
                                    json["meals"][0]["strMeasure12"],
                                    json["meals"][0]["strMeasure13"],
                                    json["meals"][0]["strMeasure14"]
                                ])}
                            if(i === 1){
                                setData2([json["meals"][0]["strCategory"],
                                    t(json["meals"][0]["strMeal"]),
                                    json["meals"][0]["strMealThumb"],
                                    t(json["meals"][0]["strInstructions"]),
                                    t(json["meals"][0]["strIngredient1"]),
                                    t(json["meals"][0]["strIngredient2"]),
                                    t(json["meals"][0]["strIngredient3"]),
                                    t(json["meals"][0]["strIngredient4"]),
                                    t(json["meals"][0]["strIngredient5"]),
                                    t(json["meals"][0]["strIngredient6"]),
                                    t(json["meals"][0]["strIngredient7"]),
                                    t(json["meals"][0]["strIngredient8"]),
                                    t(json["meals"][0]["strIngredient9"]),
                                    t(json["meals"][0]["strIngredient10"]),
                                    t(json["meals"][0]["strIngredient11"]),
                                    t(json["meals"][0]["strIngredient12"]),
                                    json["meals"][0]["strIngredient13"],
                                    json["meals"][0]["strIngredient14"],
                                    t(json["meals"][0]["strMeasure1"]),
                                    t(json["meals"][0]["strMeasure2"]),
                                    t(json["meals"][0]["strMeasure3"]),
                                    t(json["meals"][0]["strMeasure4"]),
                                    t(json["meals"][0]["strMeasure5"]),
                                    t(json["meals"][0]["strMeasure6"]),
                                    t(json["meals"][0]["strMeasure7"]),
                                    t(json["meals"][0]["strMeasure8"]),
                                    t(json["meals"][0]["strMeasure9"]),
                                    t(json["meals"][0]["strMeasure10"]),
                                    t(json["meals"][0]["strMeasure11"]),
                                    t(json["meals"][0]["strMeasure12"]),
                                    json["meals"][0]["strMeasure13"],
                                    json["meals"][0]["strMeasure14"]
                                ])}
                            if(i === 2){
                                setData3([json["meals"][0]["strCategory"],
                                    t(json["meals"][0]["strMeal"]),
                                    json["meals"][0]["strMealThumb"],
                                    t(json["meals"][0]["strInstructions"]),
                                    t(json["meals"][0]["strIngredient1"]),
                                    t(json["meals"][0]["strIngredient2"]),
                                    t(json["meals"][0]["strIngredient3"]),
                                    t(json["meals"][0]["strIngredient4"]),
                                    t(json["meals"][0]["strIngredient5"]),
                                    t(json["meals"][0]["strIngredient6"]),
                                    t(json["meals"][0]["strIngredient7"]),
                                    t(json["meals"][0]["strIngredient8"]),
                                    t(json["meals"][0]["strIngredient9"]),
                                    t(json["meals"][0]["strIngredient10"]),
                                    t(json["meals"][0]["strIngredient11"]),
                                    t(json["meals"][0]["strIngredient12"]),
                                    t(json["meals"][0]["strIngredient13"]),
                                    t(json["meals"][0]["strIngredient14"]),
                                    t(json["meals"][0]["strMeasure1"]),
                                    t(json["meals"][0]["strMeasure2"]),
                                    t(json["meals"][0]["strMeasure3"]),
                                    t(json["meals"][0]["strMeasure4"]),
                                    t(json["meals"][0]["strMeasure5"]),
                                    t(json["meals"][0]["strMeasure6"]),
                                    t(json["meals"][0]["strMeasure7"]),
                                    t(json["meals"][0]["strMeasure8"]),
                                    t(json["meals"][0]["strMeasure9"]),
                                    t(json["meals"][0]["strMeasure10"]),
                                    t(json["meals"][0]["strMeasure11"]),
                                    t(json["meals"][0]["strMeasure12"]),
                                    t(json["meals"][0]["strMeasure13"]),
                                    t(json["meals"][0]["strMeasure14"])
                                ])}
                            if(i === 3){
                                setData4([json["meals"][0]["strCategory"],
                                    t(json["meals"][0]["strMeal"]),
                                    json["meals"][0]["strMealThumb"],
                                    t(json["meals"][0]["strInstructions"]),
                                    t(json["meals"][0]["strIngredient1"]),
                                    t(json["meals"][0]["strIngredient2"]),
                                    t(json["meals"][0]["strIngredient3"]),
                                    t(json["meals"][0]["strIngredient4"]),
                                    t(json["meals"][0]["strIngredient5"]),
                                    t(json["meals"][0]["strIngredient6"]),
                                    t(json["meals"][0]["strIngredient7"]),
                                    t(json["meals"][0]["strIngredient8"]),
                                    t(json["meals"][0]["strIngredient9"]),
                                    t(json["meals"][0]["strIngredient10"]),
                                    t(json["meals"][0]["strIngredient11"]),
                                    t(json["meals"][0]["strIngredient12"]),
                                    json["meals"][0]["strIngredient13"],
                                    json["meals"][0]["strIngredient14"],
                                    t(json["meals"][0]["strMeasure1"]),
                                    t(json["meals"][0]["strMeasure2"]),
                                    t(json["meals"][0]["strMeasure3"]),
                                    t(json["meals"][0]["strMeasure4"]),
                                    t(json["meals"][0]["strMeasure5"]),
                                    t(json["meals"][0]["strMeasure6"]),
                                    t(json["meals"][0]["strMeasure7"]),
                                    t(json["meals"][0]["strMeasure8"]),
                                    t(json["meals"][0]["strMeasure9"]),
                                    t(json["meals"][0]["strMeasure10"]),
                                    t(json["meals"][0]["strMeasure11"]),
                                    t(json["meals"][0]["strMeasure12"]),
                                    json["meals"][0]["strMeasure13"],
                                    json["meals"][0]["strMeasure14"]
                                ])}
                            if(i === 4){
                                setData5([json["meals"][0]["strCategory"],
                                    t(json["meals"][0]["strMeal"]),
                                    json["meals"][0]["strMealThumb"],
                                    t(json["meals"][0]["strInstructions"]),
                                    t(json["meals"][0]["strIngredient1"]),
                                    t(json["meals"][0]["strIngredient2"]),
                                    t(json["meals"][0]["strIngredient3"]),
                                    t(json["meals"][0]["strIngredient4"]),
                                    t(json["meals"][0]["strIngredient5"]),
                                    t(json["meals"][0]["strIngredient6"]),
                                    t(json["meals"][0]["strIngredient7"]),
                                    t(json["meals"][0]["strIngredient8"]),
                                    t(json["meals"][0]["strIngredient9"]),
                                    t(json["meals"][0]["strIngredient10"]),
                                    t(json["meals"][0]["strIngredient11"]),
                                    t(json["meals"][0]["strIngredient12"]),
                                    t(json["meals"][0]["strIngredient13"]),
                                    t(json["meals"][0]["strIngredient14"]),
                                    t(json["meals"][0]["strMeasure1"]),
                                    t(json["meals"][0]["strMeasure2"]),
                                    t(json["meals"][0]["strMeasure3"]),
                                    t(json["meals"][0]["strMeasure4"]),
                                    t(json["meals"][0]["strMeasure5"]),
                                    t(json["meals"][0]["strMeasure6"]),
                                    t(json["meals"][0]["strMeasure7"]),
                                    t(json["meals"][0]["strMeasure8"]),
                                    t(json["meals"][0]["strMeasure9"]),
                                    t(json["meals"][0]["strMeasure10"]),
                                    t(json["meals"][0]["strMeasure11"]),
                                    t(json["meals"][0]["strMeasure12"]),
                                    t(json["meals"][0]["strMeasure13"]),
                                    t(json["meals"][0]["strMeasure14"])
                                ])}

                        })
                        .catch((error) => console.error(error))
                }}
            )

            .catch((error) => console.error(error))
            .finally(() => {
                //setLoading(false);
                //console.log(data);
            });
    }

    /*useEffect(() => {

    }, []);*/

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>

                <View style={{flex:0.1, backgroundColor: '#DB7093', height: 50}}>
                </View>

                <View style={{flex:0.13, backgroundColor: '#FFEFD5'}}>
                    <Text style={styles.nadpis}>
                        {t('Fit recipes')} {'\n'} {t('for inspiration')}
                    </Text>
                </View>

                <View style={{flex:0.15, backgroundColor: '#FFFFF0'}}>
                    <Text style={styles.standardtext}>
                        {t('Search recipes by category.')} {'\n'}{'\n'}
                        {t('Categories: ')} {'\n'}
                    </Text>

                    <TouchableOpacity
                        style = {{backgroundColor: '#5F9EA0',
                            padding: 10,
                            margin: 15,
                            height: 40}}
                        onPress={()=>writeRecipe("Seafood")}
                    >
                        <Text style = {styles.submitButtonText}>{t('Seafood')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {{backgroundColor: '#FFD700',
                            padding: 10,
                            margin: 15,
                            height: 40}}
                        onPress={()=>writeRecipe("Chicken")}>
                        <Text style = {styles.submitButtonText}>{t('Chicken')} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {{backgroundColor: '#CD853F',
                            padding: 10,
                            margin: 15,
                            height: 40}}
                        onPress={()=>writeRecipe("Beef")}>
                        <Text style = {styles.submitButtonText}> {t('Beef')} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {{backgroundColor: '#87CEEB',
                            padding: 10,
                            margin: 15,
                            height: 40}}
                        onPress={()=>writeRecipe("Breakfast")}>
                        <Text style = {styles.submitButtonText}> {t('Breakfast')} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {{backgroundColor: '#FFC0CB',
                            padding: 10,
                            margin: 15,
                            height: 40}}
                        onPress={()=>writeRecipe("Dessert")}>
                        <Text style = {styles.submitButtonText}> {t('Dessert')} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {{backgroundColor: '#FFE4C4',
                            padding: 10,
                            margin: 15,
                            height: 40}}
                        onPress={()=>writeRecipe("Pasta")}>
                        <Text style = {styles.submitButtonText}> {t('Pasta')} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {{backgroundColor: '#F5DEB3',
                            padding: 10,
                            margin: 15,
                            height: 40}}
                        onPress={()=>writeRecipe("Pork")}>
                        <Text style = {styles.submitButtonText}> {t('Pork')} </Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1, padding: 24 }}>
                     <View style={{ flex: 1, justifyContent:  'space-between'}}>

                                <Text style={styles.nazovjedla}>{data1[1]}</Text>
                                <Image source={{uri: data1[2]}} style={{height: 240, width: 240, marginLeft: 30, marginBottom: 40, marginTop: 10}}>
                                </Image>
                         {(data1[4] != null && data1[4] !== "") ? <Text style={styles.suroviny}>{data1[4]} - {data1[18]}</Text>  : null}
                         {(data1[5] != null && data1[5] !== "") ? <Text style={styles.suroviny}>{data1[5]} - {data1[19]}</Text>  : null}
                         {(data1[6] != null && data1[6] !== "") ? <Text style={styles.suroviny}>{data1[6]} - {data1[20]}</Text>  : null}
                         {(data1[7] != null && data1[7] !== "") ? <Text style={styles.suroviny}>{data1[7]} - {data1[21]}</Text>  : null}
                         {(data1[8] != null && data1[8] !== "") ? <Text style={styles.suroviny}>{data1[8]} - {data1[22]}</Text>  : null}
                         {(data1[9] != null && data1[9] !== "") ? <Text style={styles.suroviny}>{data1[9]} - {data1[23]}</Text>  : null}
                         {(data1[10] != null && data1[10] !== "") ? <Text style={styles.suroviny}>{data1[10]} - {data1[24]}</Text>  : null}
                         {(data1[11] != null && data1[11] !== "") ? <Text style={styles.suroviny}>{data1[11]} - {data1[25]}</Text>  : null}
                         {(data1[12] != null && data1[12] !== "") ? <Text style={styles.suroviny}>{data1[12]} - {data1[26]}</Text>  : null}
                         {(data1[13] != null && data1[13] !== "") ? <Text style={styles.suroviny}>{data1[13]} - {data1[27]}</Text>  : null}
                         {(data1[14] != null && data1[14] !== "") ? <Text style={styles.suroviny}>{data1[14]} - {data1[28]}</Text>  : null}
                         {(data1[15] != null && data1[15] !== "") ? <Text style={styles.suroviny}>{data1[15]} - {data1[29]}</Text>  : null}
                         {(data1[16] != null && data1[16] !== "") ? <Text style={styles.suroviny}>{data1[16]} - {data1[30]}</Text>  : null}
                         {(data1[17] != null && data1[17] !== "") ? <Text style={styles.suroviny}>{data1[17]} - {data1[31]}</Text>  : null}
                                <Text style={styles.instrukcie}>{data1[3]}</Text>
                            </View>


                         <View style={{ flex: 1, justifyContent:  'space-between'}}>

                                <Text style={styles.nazovjedla}>{data2[1]}</Text>
                                <Image source={{uri: data2[2]}} style={{height: 240, width: 240, marginLeft: 30, marginBottom: 40, marginTop: 10}}>
                                </Image>
                             {(data2[4] != null && data2[4] !== "") ? <Text style={styles.suroviny}>{data2[4]} - {data2[18]}</Text>  : null}
                             {(data2[5] != null && data2[5] !== "") ? <Text style={styles.suroviny}>{data2[5]} - {data2[19]}</Text>  : null}
                             {(data2[6] != null && data2[6] !== "") ? <Text style={styles.suroviny}>{data2[6]} - {data2[20]}</Text>  : null}
                             {(data2[7] != null && data2[7] !== "") ? <Text style={styles.suroviny}>{data2[7]} - {data2[21]}</Text>  : null}
                             {(data2[8] != null && data2[8] !== "") ? <Text style={styles.suroviny}>{data2[8]} - {data2[22]}</Text>  : null}
                             {(data2[9] != null && data2[9] !== "") ? <Text style={styles.suroviny}>{data2[9]} - {data2[23]}</Text>  : null}
                             {(data2[10] != null && data2[10] !== "") ? <Text style={styles.suroviny}>{data2[10]} - {data2[24]}</Text>  : null}
                             {(data2[11] != null && data2[11] !== "") ? <Text style={styles.suroviny}>{data2[11]} - {data2[25]}</Text>  : null}
                             {(data2[12] != null && data2[12] !== "") ? <Text style={styles.suroviny}>{data2[12]} - {data2[26]}</Text>  : null}
                             {(data2[13] != null && data2[13] !== "") ? <Text style={styles.suroviny}>{data2[13]} - {data2[27]}</Text>  : null}
                             {(data2[14] != null && data2[14] !== "") ? <Text style={styles.suroviny}>{data2[14]} - {data2[28]}</Text>  : null}
                             {(data2[15] != null && data2[15] !== "") ? <Text style={styles.suroviny}>{data2[15]} - {data2[29]}</Text>  : null}
                             {(data2[16] != null && data2[16] !== "") ? <Text style={styles.suroviny}>{data2[16]} - {data2[30]}</Text>  : null}
                             {(data2[17] != null && data2[17] !== "") ? <Text style={styles.suroviny}>{data2[17]} - {data2[31]}</Text>  : null}
                                <Text style={styles.instrukcie}>{data2[3]}</Text>
                            </View>

                     <View style={{ flex: 1, justifyContent:  'space-between'}}>

                                <Text style={styles.nazovjedla}>{data3[1]}</Text>
                                <Image source={{uri: data3[2]}} style={{height: 240, width: 240, marginLeft: 30, marginBottom: 40, marginTop: 10}}>
                                </Image>
                         {(data3[4] != null && data3[4] !== "") ? <Text style={styles.suroviny}>{data3[4]} - {data3[18]}</Text>  : null}
                         {(data3[5] != null && data3[5] !== "") ? <Text style={styles.suroviny}>{data3[5]} - {data3[19]}</Text>  : null}
                         {(data3[6] != null && data3[6] !== "") ? <Text style={styles.suroviny}>{data3[6]} - {data3[20]}</Text>  : null}
                         {(data3[7] != null && data3[7] !== "") ? <Text style={styles.suroviny}>{data3[7]} - {data3[21]}</Text>  : null}
                         {(data3[8] != null && data3[8] !== "") ? <Text style={styles.suroviny}>{data3[8]} - {data3[22]}</Text>  : null}
                         {(data3[9] != null && data3[9] !== "") ? <Text style={styles.suroviny}>{data3[9]} - {data3[23]}</Text>  : null}
                         {(data3[10] != null && data3[10] !== "") ? <Text style={styles.suroviny}>{data3[10]} - {data3[24]}</Text>  : null}
                         {(data3[11] != null && data3[11] !== "") ? <Text style={styles.suroviny}>{data3[11]} - {data3[25]}</Text>  : null}
                         {(data3[12] != null && data3[12] !== "") ? <Text style={styles.suroviny}>{data3[12]} - {data3[26]}</Text>  : null}
                         {(data3[13] != null && data3[13] !== "") ? <Text style={styles.suroviny}>{data3[13]} - {data3[27]}</Text>  : null}
                         {(data3[14] != null && data3[14] !== "") ? <Text style={styles.suroviny}>{data3[14]} - {data3[28]}</Text>  : null}
                         {(data3[15] != null && data3[15] !== "") ? <Text style={styles.suroviny}>{data3[15]} - {data3[29]}</Text>  : null}
                         {(data3[16] != null && data3[16] !== "") ? <Text style={styles.suroviny}>{data3[16]} - {data3[30]}</Text>  : null}
                         {(data3[17] != null && data3[17] !== "") ? <Text style={styles.suroviny}>{data3[17]} - {data3[31]}</Text>  : null}
                                <Text style={styles.instrukcie}>{data3[3]}</Text>
                            </View>


                        <View style={{ flex: 1, justifyContent:  'space-between'}}>

                                <Text style={styles.nazovjedla}>{data4[1]}</Text>
                                <Image source={{uri: data4[2]}} style={{height: 240, width: 240, marginLeft: 30, marginBottom: 40, marginTop: 10}}>
                                </Image>
                            {(data4[4] != null && data4[4] !== "") ? <Text style={styles.suroviny}>{data4[4]} - {data4[18]}</Text>  : null}
                            {(data4[5] != null && data4[5] !== "") ? <Text style={styles.suroviny}>{data4[5]} - {data4[19]}</Text>  : null}
                            {(data4[6] != null && data4[6] !== "") ? <Text style={styles.suroviny}>{data4[6]} - {data4[20]}</Text>  : null}
                            {(data4[7] != null && data4[7] !== "") ? <Text style={styles.suroviny}>{data4[7]} - {data4[21]}</Text>  : null}
                            {(data4[8] != null && data4[8] !== "") ? <Text style={styles.suroviny}>{data4[8]} - {data4[22]}</Text>  : null}
                            {(data4[9] != null && data4[9] !== "") ? <Text style={styles.suroviny}>{data4[9]} - {data4[23]}</Text>  : null}
                            {(data4[10] != null && data4[10] !== "") ? <Text style={styles.suroviny}>{data4[10]} - {data4[24]}</Text>  : null}
                            {(data4[11] != null && data4[11] !== "") ? <Text style={styles.suroviny}>{data4[11]} - {data4[25]}</Text>  : null}
                            {(data4[12] != null && data4[12] !== "") ? <Text style={styles.suroviny}>{data4[12]} - {data4[26]}</Text>  : null}
                            {(data4[13] != null && data4[13] !== "") ? <Text style={styles.suroviny}>{data4[13]} - {data4[27]}</Text>  : null}
                            {(data4[14] != null && data4[14] !== "") ? <Text style={styles.suroviny}>{data4[14]} - {data4[28]}</Text>  : null}
                            {(data4[15] != null && data4[15] !== "") ? <Text style={styles.suroviny}>{data4[15]} - {data4[29]}</Text>  : null}
                            {(data4[16] != null && data4[16] !== "") ? <Text style={styles.suroviny}>{data4[16]} - {data4[30]}</Text>  : null}
                            {(data4[17] != null && data4[17] !== "") ? <Text style={styles.suroviny}>{data4[17]} - {data4[31]}</Text>  : null}
                                <Text style={styles.instrukcie}>{data4[3]}</Text>
                            </View>


                         <View style={{ flex: 1, justifyContent:  'space-between'}}>

                                <Text style={styles.nazovjedla}>{data5[1]}</Text>
                                <Image source={{uri: data5[2]}} style={{height: 240, width: 240, marginLeft: 30, marginBottom: 40, marginTop: 10}}>
                                </Image>
                             {(data5[4] != null && data5[4] !== "") ? <Text style={styles.suroviny}>{data5[4]} - {data5[18]}</Text>  : null}
                             {(data5[5] != null && data5[5] !== "") ? <Text style={styles.suroviny}>{data5[5]} - {data5[19]}</Text>  : null}
                             {(data5[6] != null && data5[6] !== "") ? <Text style={styles.suroviny}>{data5[6]} - {data5[20]}</Text>  : null}
                             {(data5[7] != null && data5[7] !== "") ? <Text style={styles.suroviny}>{data5[7]} - {data5[21]}</Text>  : null}
                             {(data5[8] != null && data5[8] !== "") ? <Text style={styles.suroviny}>{data5[8]} - {data5[22]}</Text>  : null}
                             {(data5[9] != null && data5[9] !== "") ? <Text style={styles.suroviny}>{data5[9]} - {data5[23]}</Text>  : null}
                             {(data5[10] != null && data5[10] !== "") ? <Text style={styles.suroviny}>{data5[10]} - {data5[24]}</Text>  : null}
                             {(data5[11] != null && data5[11] !== "") ? <Text style={styles.suroviny}>{data5[11]} - {data5[25]}</Text>  : null}
                             {(data5[12] != null && data5[12] !== "") ? <Text style={styles.suroviny}>{data5[12]} - {data5[26]}</Text>  : null}
                             {(data5[13] != null && data5[13] !== "") ? <Text style={styles.suroviny}>{data5[13]} - {data5[27]}</Text>  : null}
                             {(data5[14] != null && data5[14] !== "") ? <Text style={styles.suroviny}>{data5[14]} - {data5[28]}</Text>  : null}
                             {(data5[15] != null && data5[15] !== "") ? <Text style={styles.suroviny}>{data5[15]} - {data5[29]}</Text>  : null}
                             {(data5[16] != null && data5[16] !== "") ? <Text style={styles.suroviny}>{data5[16]} - {data5[30]}</Text>  : null}
                             {(data5[17] != null && data5[17] !== "") ? <Text style={styles.suroviny}>{data5[17]} - {data5[31]}</Text>  : null}
                                <Text style={styles.instrukcie}>{data5[3]}</Text>
                            </View>

                </View>

                <View style={{flex:0.1, backgroundColor: '#FFEFD5'}}>
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
    nazovjedla: {
        fontSize: 30,
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
    },
    suroviny: {
        fontSize: 16,
        fontWeight: '700',
        color: 'grey',
    },
    standardtext: {
        fontSize: 18,
        fontWeight: '400',
        color: 'grey',
        textAlign: 'center',
        marginTop: 20,
    },
    standardtext3: {
        fontSize: 25,
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


