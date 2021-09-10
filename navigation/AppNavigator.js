import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import ArticleScreen from '../screens/ArticleScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="記事" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const BookmarkStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="記事" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    if (route.name === '記事') {
      iconName = 'home';
    } else if (route.name === 'お気に入り') {
      iconName = 'star';
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen
          name="記事"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="お気に入り"
          component={BookmarkStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
