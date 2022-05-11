import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {css} from '../assets/css/Css';

export default function Home(props) {
    console.log(props);
    return (
        <View style={css.container_2}>            
            <TouchableOpacity style={css.button_home} onPress={() => props.navigation.navigate('Login')} >
                <Image source={require('../assets/img/login.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Rastreio')} >
                <Image source={require('../assets/img/rastreio.png')} />
            </TouchableOpacity>
        </View>
    )
}