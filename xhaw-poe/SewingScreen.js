import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, handledButtonPress } from 'react-native';

const ContentPage = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navigation or any other action you want to perform
    navigation.goBack(); // Example: go back to the previous screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sewing(6 Months)</Text>
      </View>


      <View style={styles.content}>
        <Text style={styles.text}>
          <h2>Fees:</h2> 
    <ul>R1500</ul>
<h3>Purpose:</h3> 
<ol>To provide alterations and new garment tailoring services</ol> 
<h3>Content:</h3>
<ol>• Types of stitches</ol>
<ol>• Threading a sewing machine</ol>
<ol>• Sewing buttons, zips, hems and seams</ol>
<ol>• Alterations</ol>
<ol>• Designing and sewing new garments</ol>

        </Text>
        <Button title="Go Back" onPress={handleButtonPress} />
	<Button title="Add Course To Cart" onPress={handledButtonPress}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4a90e2',
    padding: 5,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 19,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  text: {
    fontSize: 14,
    marginBottom: 1,
    textAlign: 'border',
  },
});

export default ContentPage;
