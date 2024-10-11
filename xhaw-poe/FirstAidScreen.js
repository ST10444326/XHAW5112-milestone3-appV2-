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
        <Text style={styles.headerText}>First Aid Course (6months)</Text>
      </View>

        

      <View style={styles.content}>
        <Text style={styles.courseTitle}>Course Fees:</Text>
        <Text style={styles.listItem}> R 1500</Text>

        <Text style={styles.sectionTitle}>Purpose:</Text>
        <Text style={styles.text}>
          • First aid training promotes a heightened awareness of safety in everyday life. You’ll be more mindful of potential hazards and more proactive in preventing accidents at home, work, or in public places.
        </Text>

        <Text style={styles.sectionTitle}>Content: 6 Months</Text>
        <Text style={styles.listItem}>• Understanding the purpose and importance of first aid</Text>
        <Text style={styles.listItem}>• Personal safety and assessing the scene</Text>
        <Text style={styles.listItem}>• CPR (Cardiopulmonary Resuscitation) for adults, children, and infants</Text>
        <Text style={styles.listItem}>• Rescue breathing techniques</Text>
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