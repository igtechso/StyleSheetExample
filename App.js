import React,{useState} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

const App = () => {
  const [name,setName] = useState('Style Test')

  const onClickHandler = () =>{
    setName('Style Test Done')
  }
  return(
    <View style = {styles.body}>
      <Text style = {styles.headertext}>IGT Development</Text>
      <Text style = {styles.text}>{name}</Text>
      <Button title="Update State" onPress={onClickHandler} color="#D35400"></Button>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    body:{
      backgroundColor: '#273746',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 20,
      borderColor: '#85929E',
    },
    text:{
      margin: 10,
      fontSize: 30,
      color:'#F7DC6F',
      textTransform: 'uppercase'
    },
    headertext:{
      fontSize: 30,
      color:'#F5B7B1'
    }
  }
)

export default App;