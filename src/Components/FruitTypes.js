import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {height} from '../helpers/Index';

const FruitTypes = ({item, changeType}) => {
  return (
    <Pressable
      style={{
        ...styles.types,
        backgroundColor: item.background,
      }}
      onPress={() => changeType(item.name)}>
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

export default FruitTypes;

const styles = StyleSheet.create({
  types: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: height(1),
    borderRadius: 15,
    marginRight: height(0),
    marginLeft: height(3),
    paddingHorizontal: height(1.8),
    justifyContent: 'space-between',
    elevation: 1,
  },
});
