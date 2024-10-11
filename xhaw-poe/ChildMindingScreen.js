import React from 'react';
import { View,
	 Text,
	 Button,
	 StyleSheet,
	 SafeAreaView,
	 Image
 } from 'react-native';

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
        <Text style={styles.headerText}>Child Minding(6 Weeks)</Text>
      </View>



      <View style={styles.content}>
        <Text style={styles.courseTitle}>Course Fees:</Text>
        <Text style={styles.listItem}>• R750</Text>

        <Text style={styles.sectionTitle}>Purpose:</Text>
        <Text style={styles.text}>
          • Quality child care enables parents to work, attend school, or manage other responsibilities, knowing their children are in a safe and nurturing environment. This program will allow people to learn and understand how to take care of children both in health and psychological needs, contributing to the child's well-being.
        </Text>

        <Text style={styles.sectionTitle}>Content: 6 Weeks</Text>
        <Text style={styles.listItem}>• Hygiene practices and preventing illness</Text>
        <Text style={styles.listItem}>• Basic first aid and CPR for children</Text>
        <Text style={styles.listItem}>• Stages of physical, cognitive, emotional, and social development</Text>
        <Text style={styles.listItem}>• Emotional regulation and supporting children’s mental well-being</Text>
        <Text style={styles.listItem}>• Age-appropriate toys and learning materials</Text>
        <Text style={styles.listItem}>• Roles and responsibilities of a child care provider</Text>
        <Text style={styles.listItem}>• Ethics and professional conduct in child care</Text>

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