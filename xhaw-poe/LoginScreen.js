import React,{ useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert,
  Image
} from 'react-native';
 
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = () => {
    //Here you could add your authentication logic
    if (userName === 'user' && password === 'password') {
      Alert.alert('Login Successful','Welcome,${username}!');
    }else{
      Alert.alert('Login Failed', 'Invalid username or pasword');
    }
  };
 
  return (
 
    <View style={styles.container}>
    <Text style={styles.title}>Empowering The Nation
                                Login</Text>
                                <View style={styles.imageContainer}>

      </View> 
    <TextInput
    style={styles.input}
    placeholder="Username"
    secureTextEntry
    value={username}
    onChangeText={setUsername}    
    />
    <TextInput
    style={styles.input}
    placeholder="Password"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
    />
    <Button title="Login" onPress={handleLogin}/>
    <View>
    <l>Contact Details:</l>
    <l>@empoweringthenation.com</l>
    <l>011 288 3097</l>
    
    </View>
    </View>
  );
};
 
const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title:{
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
 
export default App;