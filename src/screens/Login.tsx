import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ShadowPropTypesIOS, InputAccessoryView } from 'react-native';
import iUser from '../interface/IUser'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios';



function login(){
    const navigation = useNavigation();
    const [lgnId, setlgnId] = useState('');
    const [lgnPw, setlgnPw] = useState('');
    const [checkLogin, setcheckLogin] = useState(false);
    let useUser: iUser;
    const userCheck = async(lgnId: string, lgnPw: string) => {
    if (lgnId === 'lslunar' && lgnPw === '789456') {
        const param = {
            login:{
               'lgnId' : lgnId,
                'lgnPw' : lgnPw,
                'srvId' : 'KP'
            }
        }
        const res = await axios.post('http://test.econ.co.kr:8091/kpWeb/ws/member/login/login.ws',param, {
            headers : {
                'APIKEY': '900bd9ac84def0d1be1073f1acdeda89871fb0ac14885ddc14d44cf471469ffa'
                ,'Content-Type': 'application/json'
            }
        });
        const {data} = res;
        if(data){
            useUser = data;
            setcheckLogin(true);
            navigation.navigate('Info');
            console.log(useUser);
        }else{
            alert('유저가 존재하지 않습니다.');
            setlgnId('');
            setlgnPw('');
        }
    } else{
        
        alert('아이디 비밀번호를 확인해주세요');
        setlgnId('');
        setlgnPw('');
    }
    }
    
    return (
        <View style={styled.bigContainer}>
            <View style={styled.headerContainer}> 
                <Text style={styled.headerText}>Login</Text>
            </View>
            <View style={styled.textInputContainer}>
                <Text style={styled.labelText}>ID  </Text>
                <TextInput style={styled.textInputWrapper} onChangeText={(e) => setlgnId(e)} />
                <Text style={styled.labelText}>Password</Text>
                <TextInput secureTextEntry={true} style={styled.textInputWrapper} onChangeText={(e) => setlgnPw(e)} />
            </View>
            <View style={styled.buttonContainer}>
                <TouchableOpacity style={styled.loginTouchableOpacity} onPress={() => {userCheck(lgnId, lgnPw)}}>
                   <Text style={styled.loginButtonText}>Log In</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styled.joinTouchableOpacity}>
                   <Text style={styled.loginButtonText}>Join</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    bigContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        width : '70%',
        justifyContent: 'center',
        alignItems:'flex-start',
        paddingBottom : 10,
    },
    headerText:{
        fontSize: 32,
        fontWeight:'bold',
    },
    textInputContainer:{
        padding:10,
        width:'70%',
        
    },
    textInputWrapper:{
        marginTop : 5,
        marginBottom: 5,
        padding : 5,
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    buttonContainer:{
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    loginTouchableOpacity:{
        backgroundColor: '#2EE879',
        marginBottom:20,
        width:'66%',
        alignItems:'center',
        height:50,
        justifyContent:'center',
    },
    loginButtonText:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    
    joinTouchableOpacity:{
        backgroundColor: '#86B8FF',
        marginBottom:20,
        width:'66%',
        alignItems:'center',
        height:50,
        justifyContent:'center',
    },
    labelText:{
        fontWeight:'bold',
        fontSize: 16,
        alignSelf:'flex-start'
        
    }
    
})
export default login;
