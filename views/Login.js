import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { css } from '../assets/css/Css';

export default function Login() {

    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(null);

    async function sendForm() {
        let response = await fetch('http://localhost:3000/login', {

            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            }, 5000)
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logo}>
                <Image source={require('../assets/img/logo.png')} />
            </View>

            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text => setUser(text)} />
                <TextInput style={css.login__input} placeholder='Senha:' secureTextEntry={true} onChangeText={text => setPassword(text)} />
                <TouchableOpacity style={css.login__button} onPress={() => sendForm()}>
                    <Text style={css.login__buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}