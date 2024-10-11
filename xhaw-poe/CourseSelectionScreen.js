import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
const HomeScreen = ({ navigation }) => {
  return (
 
    <View style={styles.container}>
      <Text style={styles.title}>Course Selection</Text>
      <Text>Six Month Courses:</Text>  
      <Button title="Life Skills" onPress={() => navigation.navigate('Life Skills' )}/>
      <Button title="First Aid" onPress={() => navigation.navigate('First Aid' )}/>
      <Button title="Landscaping" onPress={() => navigation.navigate('Landscaping' )}/>
      <Button title="Sewing" onPress={() => navigation.navigate('Sewing' )}/>
      <Text>Six Week Courses:</Text>
      <Button title="Cooking" onPress={() => navigation.navigate('Cooking' )}/>
      <Button title="Child Mining" onPress={() => navigation.navigate('Child Mining' )}/>
       <Button title ="Garden Maintenance" onPress={() => navigation.navigate('Garden Maintenance' )}/>
      <Button title="Go to Course Details" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    padding: 20,
    marginBottom: 11,
  },
  title: {
    padding: 5,
    fontSize: 20,
    marginBottom: 50,
  },
});
 
export default HomeScreen;