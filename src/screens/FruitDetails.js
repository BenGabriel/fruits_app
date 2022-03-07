import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Styles from '../helpers/Styles';
import {height, width} from '../helpers/Index';
import {MaterialCommunityIcons, Ionicons} from '../helpers/Icons';
import Button from '../Components/Button';
import {SharedElement} from 'react-navigation-shared-element';

const FruitDetails = ({
  navigation,
  route: {
    params: {item},
  },
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          ...Styles.flex,
          paddingHorizontal: height(3),
          position: 'absolute',
          width: width(100),
          zIndex: 10,
          top: 20,
        }}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={width(7)}
          onPress={() => navigation.goBack()}
        />
        <MaterialCommunityIcons
          name="heart-outline"
          size={width(6)}
          color="#fff"
        />
      </View>
      <SharedElement id={`item.${item.name}.photo`}>
        <View style={{...styles.leftContainer, backgroundColor: item.color}}>
          <View style={styles.imageContainer}>
              <Image
                source={item.image}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode="contain"
              />
          </View>
          <View style={styles.addIcon}>
            <Text style={Styles.text('#fff', 3, 100)}>+</Text>
          </View>
        </View>
      </SharedElement>
      <View style={styles.bottomContainer}>
        <View style={Styles.flex}>
          <Text style={Styles.text('#333', 3, 800)}>{item.name}</Text>
          <Text style={Styles.text('#333', 1.8, 700)}>
            Rs. <Text style={Styles.text('#333', 2.6, 700)}>60</Text>
            <Text style={Styles.text('#c4c4c4', 2.6, 700)}>/kg</Text>
          </Text>
        </View>
        <Text style={Styles.text('#333', 2.3, 400)}>
          <MaterialCommunityIcons
            name="star"
            color={item.color}
            size={width(5)}
          />{' '}
          4.5
        </Text>
        <Text style={{marginVertical: height(2)}}>{item.description}</Text>
        <View
          style={{
            ...Styles.flex,
            alignItems: 'center',
            marginVertical: height(1),
          }}>
          <Text
            style={{
              ...styles.sizes,
              ...Styles.text('#fff', 1.7, 400),
              backgroundColor: item.color,
            }}>
            500g
          </Text>
          <Text style={styles.sizes}>1kg</Text>
          <Text style={styles.sizes}>1.5kg</Text>
        </View>
        <View
          style={{
            width: '100%',
            ...Styles.flex,
          }}>
          <View style={styles.bottomButtonsIcon}>
            <Ionicons name="calendar-outline" size={width(5)} color="#d39c35" />
          </View>
          <Button
            textColor="#fff"
            style={{
              backgroundColor: item.color,
              width: '78%',
              borderRadius: 15,
            }}>
            PAY NOW{' '}
            <MaterialCommunityIcons name="chevron-right" size={width(5)} />
          </Button>
        </View>
      </View>
    </View>
  );
};

FruitDetails.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;

  return [
    {
      id: `item.${item.name}.photo`,
      animation: 'fade',
    },
  ];
};
export default FruitDetails;

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: height(6),
    paddingVertical: height(3),
  },
  leftContainer: {
    width: '70%',
    height: height(50),
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 50,
  },
  imageContainer: {
    width: width(62),
    height: width(62),
    marginTop: height(6),
    marginLeft: height(-6),
  },
  addIcon: {
    width: width(12),
    height: width(12),
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  bottomButtonsIcon: {
    backgroundColor: '#fff',
    width: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#ffe6bf',
    height: 46,
  },
  sizes: {
    backgroundColor: '#c9c8c9',
    width: '25%',
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 20,
    ...Styles.text('#333', 1.7, 400),
  },
});
