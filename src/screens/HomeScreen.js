import {Image, StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import {data, dataTypes} from '../Data';
import {height, width} from '../helpers/Index';
import Button from '../Components/Button';
import {MaterialCommunityIcons, Ionicons} from '../helpers/Icons';
import Styles from '../helpers/Styles';
import {SharedElement} from 'react-navigation-shared-element';

const HomeScreen = ({navigation}) => {
  const [types, setTypes] = useState('Fruits');

  const dataTypesItem = data.filter(item => item.type === types);

  const FruitTypes = ({item}) => {
    return (
      <Pressable
        style={{
          ...styles.types,
          backgroundColor: item.background,
        }}
        onPress={() => setTypes(item.name)}>
        <View
          style={{
            width: 25,
            height: 25,
          }}>
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            color: item.color,
            marginLeft: height(1),
          }}>
          {item.name}
        </Text>
      </Pressable>
    );
  };

  const FruitItems = ({item}) => {
    return (
      <SharedElement id={`item.${item.name}.photo`}>
        <Pressable
          style={{
            ...styles.allFruitsContainer,
            backgroundColor: item.color,
          }}
          onPress={() =>
            navigation.navigate('FruitDetails', {
              item,
            })
          }>
          <View style={Styles.flex}>
            <Text style={Styles.text('#fff', 2.4, 600)}>{item.name}</Text>
            <Ionicons name="heart-outline" size={width(5)} color="#fff" />
          </View>
          <View
            style={{
              width: width(50),
              height: width(50),
              marginVertical: height(1),
              marginLeft: height(-4),
            }}>
              <Image
                source={item.image}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode="contain"
              />
          </View>
          <Text style={Styles.text('#fff', 2.7, 600)}>{item.variety}</Text>
          <Text style={Styles.text('#fff', 2, 200)}>1.5Kgs Rs.100 Only</Text>
          <View style={{...Styles.flex, marginVertical: height(2)}}>
            <Text style={Styles.text('#fff', 2, 200)}>Kg</Text>
            <View
              style={{
                ...Styles.flex,
                width: '45%',
                paddingHorizontal: 10,
                borderRadius: 5,
                paddingVertical: 5,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              }}>
              <Text style={Styles.text('#fff', 2, 200)}>500g</Text>
              <Ionicons name="caret-down" color="#fff" />
            </View>
          </View>
          <Button
            textColor={`${item.color}`}
            style={{
              width: '100%',
            }}>
            ADD TO CART
          </Button>
        </Pressable>
      </SharedElement>
    );
  };
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="sort-variant"
        size={width(6)}
        style={{alignSelf: 'flex-end', marginRight: height(3)}}
        color="#aaa"
      />
      <View style={{marginVertical: height(1)}}>
        <Text style={Styles.text('#333', 2.5, 400)}>Hello</Text>
        <Text style={Styles.text('#333', 3.7, 700)}>Tanveer</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: height(1),
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
          renderItem={({item}) => <FruitTypes item={item} />}
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
    paddingLeft: height(3),
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
  types: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: height(1),
    borderRadius: 15,
    paddingHorizontal: height(1.8),
    marginRight: height(1.6),
    justifyContent: 'space-between',
    elevation: 1,
  },
  allFruitsContainer: {
    width: width(50),
    marginRight: height(1.5),
    marginLeft: height(2),
    borderRadius: 15,
    paddingHorizontal: height(2),
    paddingVertical: height(1),
  },
});
