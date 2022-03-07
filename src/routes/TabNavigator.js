import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {Ionicons, Feather, MaterialCommunityIcons} from '../helpers/Icons';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {width} from '../helpers/Index';
import {Pressable} from 'react-native';
import FruitDetails from '../screens/FruitDetails';

const Tab = createBottomTabNavigator();
const Stack = createSharedElementStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FruitDetails" component={FruitDetails} />
    </Stack.Navigator>
  );
};

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="AppHome"
        component={StackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Pressable
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Home'}],
                })
              }>
              <Ionicons
                name="home-outline"
                size={width(5)}
                color={focused ? '#ff9501' : '#000'}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Dash"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={width(5)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name="notifications-outline" size={width(5)} />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <Feather name="user" size={width(5)} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
