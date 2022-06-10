import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Buttons from '../Button/Button';

const Input = ({
  inputField,
  setInputField,
  setList,
  btn,
  list,
  editList,
  setBtn,
}) => {
  const add = () => {
    if (btn === 'Add') {
      setList([...list, inputField]);
      setInputField('');
    } else if (btn === 'Update') {
      let result = list.map(data => (data === editList ? inputField : data));
      setList(result);
      setInputField('');
      setBtn('Add');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={newText => setInputField(newText)}
        defaultValue={inputField}
      />
      <Buttons title={btn} press={add} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    width: '70%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Input;
