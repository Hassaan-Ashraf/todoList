import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Buttons from '../Button/Button';

const List = ({title, setBtn, setList, list, setEditList, setInputField}) => {
  const editList = () => {
    setInputField(title);
    setEditList(title);
    setBtn('Update');
  };
  const deleteList = () => {
    let result = list.filter(data => data !== title);
    setList(result);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Buttons title="Edit" press={editList} />
        <Buttons title="Delete" press={deleteList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {color: 'black'},
});

export default List;
