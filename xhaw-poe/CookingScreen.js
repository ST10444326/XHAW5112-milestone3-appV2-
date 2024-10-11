import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image } from 'react-native';

const ContentPage = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navigation or any other action you want to perform
    navigation.goBack(); // Example: go back to the previous screen
  };
  
  const handleAddToCart = () => {
    alert('Course Added To Cart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cooking Course(6 Weeks)</Text>
      </View>

    <View style={styles.imageContainer}>
        <Image
          source={require('./cooking.jpeg')} // TO ADD IMAGES
        />
      </View>
   

      <View style={styles.content}>
        <Text style={styles.courseTitle}>Course Fees:</Text>
        <Text style={styles.listItem}> R 750</Text>

        <Text style={styles.sectionTitle}>Purpose:</Text>
        <Text style={styles.text}>
          • Cooking equips you with the skills to prepare your own meals, allowing you to rely less on takeout or prepackaged foods. It promotes independence and the ability to care for yourself and others, regardless of where you are.
        </Text>

        <Text style={styles.sectionTitle}>Content: 6 Weeks</Text>
        <Text style={styles.listItem}>• Proper use of kitchen tools and utensils</Text>
        <Text style={styles.listItem}>• Cooking methods (boiling, steaming, grilling, roasting, sautéing, frying, poaching)</Text>
        <Text style={styles.listItem}>• Understanding foodborne illnesses and how to prevent them</Text>
        <Text style={styles.listItem}>• Creating marinades and dressings from scratch</Text>
        <Button title="Go Back" onPress={handleButtonPress} />
        <Button title="Add Course To Cart" onPress={handleAddToCart} /> 
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
    padding: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 19,
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,  // Set the width of the image
    height: 200, // Set the height of the image
    borderRadius: 10,  // Optional: to add rounded corners to the image
  },
  content: {
    flex: 1,
    padding: 20,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default ContentPage;