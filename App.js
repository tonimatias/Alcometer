import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Switch, TouchableOpacity, TextInput } from 'react-native';
import { useRef, useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import styles from './styles/Styles';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const radioStyle = { flexDirection: 'row', alignItems: 'center' };

  const info = isDarkMode ? "Lightmode" : "Darkmode";

  
  


  const calculate = (e) => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);

    let promille = 0;
    
    const ratio = gender === 'male' ? 0.7 : 0.6;
    promille =  gramsLeft / (weight * ratio);

    if (!time || !bottles) 
      return;

    if (weight <= 0) 
      return alert('Please fill weight!');
    
    if (promille < 0) {
      promille = 0;
    }
    setResult(promille);
  };

  const getResultColor = (result) => {
    if (result == 0) {
      return {color: 'black'}
    }
    else if (result <= 0.40) {
      return { color: 'green' };
    } 
    else if (result >= 0.41 && result <= 0.99) {
      return { color: 'yellow' };
    } 
    else if (result >= 1) {
      return { color: 'red' };
    } 
    else {
      return {};
    }
  };

  return (
    <ScrollView>
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <View style={styles.switchRow}>
        <Text>{info}</Text>
        <Switch
          style={styles.switch}
          value={isDarkMode}
          onValueChange={newValue => setIsDarkMode(newValue)} />

      </View>
      <Text style={[styles.title, isDarkMode && styles.darkMode]}>Alcometer</Text>

      <Text style={styles.text}>Weight</Text>
      <TextInput
        style={styles.textInput}
        keyboardType='number-pad'
        value={weight} onChangeText={e => setWeight(e)}
      />

      <Text style={styles.text}>Bottles</Text>
      <NumericInput minValue={0} onChange={v => setBottles(v)} />

      <Text style={styles.text}>Hours</Text>
      
      <NumericInput minValue={0} style={styles.numericInput} onChange={v => setTime(v)} />

      <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
        <View style={radioStyle}>
          <RadioButton value='male' style={styles.male} />
          <Text label={'male'}>Male</Text>
        </View>
        <View style={radioStyle}>
          <RadioButton value='female' />
          <Text>Female</Text>
        </View>
      </RadioButton.Group>

      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText} >Calculate</Text>
      </TouchableOpacity>
      <Text style={[styles.result, getResultColor(result)]}>{result.toFixed(2)}</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

