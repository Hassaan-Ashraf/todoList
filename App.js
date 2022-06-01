import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Buttons from './src/components/Button/Button';

import Input from './src/components/InputField/InputField';
import List from './src/components/List/List';

const App = () => {
  const [inputField, setInputField] = useState('');
  const [btn, setBtn] = useState('Add');
  const [list, setList] = useState([]);
  const [editList, setEditList] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Input
        inputField={inputField}
        setInputField={setInputField}
        setList={setList}
        list={list}
        btn={btn}
        editList={editList}
        setBtn={setBtn}
      />

      {list.map((data, i) => (
        <List
          key={i}
          title={data}
          setInputField={setInputField}
          setList={setList}
          list={list}
          setEditList={setEditList}
          setBtn={setBtn}
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});

export default App;
