import React from 'react';
import {View, Text} from 'react-native';
import style from './TasksCardHeaderStyles';

export default ({title, createdDate}) => {
  const date = new Date(createdDate).toLocaleDateString().replace(/\//g, '.');
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.createdDate}>{date}</Text>
    </View>
  );
};
