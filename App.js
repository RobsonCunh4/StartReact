import React, {useState, useEffect} from 'react';
import Page from './views/Page';
import {css} from './assets/css/Css';

import { Text, View, Button, Alert} from 'react-native';

export default function App(){

  const [product, setProduct] = useState('qualquer');
  const [quantity, setQuantity] = useState(0);

  
  useEffect(() => {
    if(quantity > 0){
      Alert.alert('Novo produto add!');
    }
  }, [quantity]);
  

  const props = {
    empresa: 'WebS',
    name: 'Devp',
    product: product,
    quantidade: quantity
  };

  return (
    <View style={css.container}>
      <Text>{product}</Text>      
      <Page {...props}/>    
      <Button title='add produtos' onPress={()=> setQuantity(quantity + 1)} />
    </View>
  )
}


