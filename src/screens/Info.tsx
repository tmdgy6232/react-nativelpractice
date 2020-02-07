import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styled = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',

    }
})

function Info(){
    return(
        <View style={styled.container}>
            <Text>
                로그인성공화면
                
            </Text>
        </View>
    )
}

export default Info;