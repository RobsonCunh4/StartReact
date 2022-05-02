import React from "react";
import {View, Text} from 'react-native';
import { css } from "../assets/css/Css";

export default function Page(props) 
{
    return(
        <View>
            <Text style={css.textPage}>Nome de teste - {props.empresa}: func {props.name}</Text>
            <Text style={css.textPage}>Produto - {props.product}: qnt {props.quantidade}</Text>
        </View>
    )

}