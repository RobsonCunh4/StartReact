import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container_2: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'      
    },
    button_home:{
     maxHeight: 1, 
      marginTop: 10
    },
    darkbg:{
      backgroundColor: "#ced4da"
    },
    login__msg:(text='none')=>({      
      fontSize: 18,
      color: "red",
      marginTop: 10,
      marginBottom: 15,
      display: text
    }),
    login__form:{
      width: "80%"
    },
    login__input:{
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      marginBottom: 15,
      borderRadius: 8
    },
    login__button:{
      padding: 12,
      backgroundColor: "#00D2FF",
      alignSelf: "center",
      borderRadius: 8
    },
    login__buttonText:{
      fontWeight: "bold",
      fontSize: 22,
      color: "#fff"
    },
    login__logo:{
      marginBottom: 10
    }
});
  
export {css};