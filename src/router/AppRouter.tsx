import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../hooks/useAuth';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import Login from '../screens/Login';
import NewTicket from '../screens/NewTicket';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'help-circle-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === 'Novo') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Dash') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: 'Tickets' }}
      />
      <Tab.Screen
        name="Novo"
        component={NewTicket}
        options={{ title: 'Novo Ticket' }}
      />
      <Tab.Screen
        name="Dash"
        component={Dashboard}
        options={{ title: 'Dashboard' }}
      />
    </Tab.Navigator>
  );
}

export default function AppRouter() {
  const isLoggedIn = useAuth((state) => state.isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={Login} />
      )}
    </Stack.Navigator>
  );
}