import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmployeeList from '../screens/employee-list/employee-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuizApp from '../screens/quiz-app/quiz-app';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle:{backgroundColor:"black"}
      }}>
        <Tab.Screen name="Dashboard" component={QuizApp} 
        options={{
          tabBarLabel: 'Archive',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="archive-outline" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} 
         options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
  );
}