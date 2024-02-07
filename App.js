import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,TouchableOpacity} from 'react-native';
import { useState } from 'react';
export default function App() {
  const [height,setHeight]=useState('');
  const [weight,setWeight]=useState('');
  const [bmi,setBmi]=useState('');
  function calculate(){
    setBmi((weight/(height*height))*10000);
  }
  console.log(weight)
  return (
    <View style={styles.container}>
      <TextInput onChange={(e)=>{
        const targetval=e.target.value;
        setHeight(targetval);
        }} value= {height}placeholder='Enter Your Height' keyboardType='numeric'></TextInput>
      <TextInput onChange={(e)=>{
        const targetval=e.target.value;
        setWeight(targetval);
      }} value={weight} placeholder='Enter Your Weight' keyboardType='numeric'></TextInput>
      <TouchableOpacity onPress={calculate}>Submit</TouchableOpacity>
      {
        bmi!== '' &&
        <Text>Your BMI Value is:{bmi}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
