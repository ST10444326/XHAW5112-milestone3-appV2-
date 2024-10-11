import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import CourseSelectionScreen from './CourseSelectionScreen';
import LifeSkillsScreen from './LifeSkillsScreen'; 
import FirstAidScreen from './FirstAidScreen';
import SewingScreen from './SewingScreen';
import ChildMindingScreen from './ChildMindingScreen';
import GardenMaintenanceScreen from './GardenMaintenanceScreen';
import CookingScreen from './CookingScreen';
import LandscapingScreen from './LandscapingScreen'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="CourseSelection" component={CourseSelectionScreen}/>
    <Stack.Screen name="Landscaping" component={LandscapingScreen} />
    <Stack.Screen name="Life Skills" component={LifeSkillsScreen} />
    <Stack.Screen name="FirstAid" component={FirstAidScreen}/>
    <Stack.Screen name="Sewing" component={SewingScreen}/>
    <Stack.Screen name="ChildMinding" component={ChildMindingScreen}/>
    <Stack.Screen name="GardenMaintenance" component={GardenMaintenanceScreen}/>
    <Stack.Screen name="Cooking" component={CookingScreen}/>
         

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
