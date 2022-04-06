import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import Styles from '../helpers/Styles';
import {height, width} from '../helpers/Index';
import {Ionicons} from '../helpers/Icons';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

const FruitItems = ({item}) => {
  const navigation = useNavigation();
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
          <SharedElement id={`item.${item.id}.photo`}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="contain"
            />
          </SharedElement>
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

export default FruitItems;

const styles = StyleSheet.create({
  allFruitsContainer: {
    width: width(50),
    marginRight: height(0.5),
    marginLeft: height(3),
    borderRadius: 15,
    paddingHorizontal: height(2),
    paddingVertical: height(1),
  },
});
