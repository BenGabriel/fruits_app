import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {data, dataTypes} from '../Data';
import {height, width} from '../helpers/Index';
import {MaterialCommunityIcons, Ionicons} from '../helpers/Icons';
import Styles from '../helpers/Styles';
import FruitTypes from '../Components/FruitTypes';
import FruitItems from '../Components/FruitItems';

const HomeScreen = () => {
  const [types, setTypes] = useState('Fruits');

  console.log('hi');

  const dataTypesItem = data.filter(item => item.type === types);

  const changeType = React.useCallback(
    name => {
      setTypes(name);
    },
    [types],
  );

 return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="sort-variant"
        size={width(6)}
        style={{alignSelf: 'flex-end', marginRight: height(3)}}
        color="#aaa"
      />
      <View style={{marginVertical: height(1), marginLeft: height(3)}}>
        <Text style={Styles.text('#333', 2.5, 400)}>Hello</Text>
        <Text style={Styles.text('#333', 3.7, 700)}>Tanveer</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: height(1),
          marginLeft: height(3),
        }}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
          <Ionicons name="search" />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: '#ffe6bf',
            marginRight: height(3),
          }}>
          <MaterialCommunityIcons
            name="microphone"
            size={width(6)}
            color="#d39c35"
          />
        </View>
      </View>
      <View style={{paddingVertical: height(1.5)}}>
        <FlatList
          data={dataTypes}
          horizontal
          renderItem={({item}) => (
            <FruitTypes item={item} changeType={changeType} />
          )}
          keyExtractor={item => `${item.name}`}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{paddingVertical: height(1.5)}}>
        <FlatList
          data={dataTypesItem}
          horizontal
          renderItem={({item}) => <FruitItems item={item} />}
          keyExtractor={item => `${item.name}`}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffbf2',
    flex: 1,
    paddingTop: height(2),
  },
  searchContainer: {
    flexDirection: 'row',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: height(1.8),
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#fff',
  },
});
