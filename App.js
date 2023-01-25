import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Switch, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
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
    if (gender === 'male') {
      promille = gramsLeft / (weight * 0.7);
    }
    else {
      promille = gramsLeft / (weight * 0.6);
    }
    if (time < 0 || bottles < 0) {
      alert('Please enter positive number');
      return;
    }
    if (weight <= 0) {
      alert('Please fill weight!');
      return;
    }
    if (promille < 0) {
      promille = 0;
    }
    setResult(promille);
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
        <NumericInput onChange={v => setBottles(v)} />

        <Text style={styles.text}>Hours</Text>
        <NumericInput style={styles.numericInput} onChange={v => setTime(v)} />

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

        <TouchableOpacity style={styles.button}>
          <Text onPress={calculate}>Calculate</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{result.toFixed(2)}</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

