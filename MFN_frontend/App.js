import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register';
import Maps from './pages/Maps';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Drawer with bottom tabs in React Native
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // tap navigator
    <NavigationContainer>
    
      <Stack.Navigator>      
      
        <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Maps" component={Maps} />
        
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
