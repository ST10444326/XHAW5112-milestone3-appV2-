import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const LandscapingScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleAddToCart = () => {
    // Logic for adding the course to cart
    alert('Landscaping Course added to cart!'); // Placeholder action
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Landscaping Course (6 months)</Text>
      </View>


      <View style={styles.content}>
        <Text style={styles.courseTitle}>Course Fees:</Text>
        <Text style={styles.listItem}>R 1500</Text>

        <Text style={styles.sectionTitle}>Purpose:</Text>
        <Text style={styles.text}>
          Landscaping transforms outdoor areas into aesthetically pleasing and functional spaces.
          It allows individuals to create beautiful gardens, lawns, and patios that enhance the
          visual appeal of homes and public areas.
        </Text>

        <Text style={styles.sectionTitle}>Content: 6 Months</Text>
        <Text style={styles.listItem}>• Overview of landscaping and its importance</Text>
        <Text style={styles.listItem}>• Understanding scale and space</Text>
        <Text style={styles.listItem}>• Conducting a site analysis (soil type, climate, topography)</Text>
        <Text style={styles.listItem}>• Understanding plant types (annuals, perennials, shrubs, trees)</Text>
        <Text style={styles.listItem}>• Companion planting and biodiversity</Text>

        <Button title="Go Back" onPress={handleButtonPress} />
        <Button title="Add Course to Cart" onPress={handleAddToCart} />
        <Button
          title="Go to Life Skills Course"
          onPress={() => navigation.navigate('Life Skills')}
        />
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

export default LandscapingScreen;
