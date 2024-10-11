import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const LifeSkillsScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleAddToCart = () => {
    // Logic for adding the course to cart
    alert('Life Skills Course added to cart!'); // Placeholder action
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Life Skills Course (6 months)</Text>
      </View>


      <View style={styles.content}>
        <Text style={styles.courseTitle}>Course Fees:</Text>
        <Text style={styles.listItem}>R 1500</Text>

        <Text style={styles.sectionTitle}>Purpose:</Text>
        <Text style={styles.text}>
          Learning life skills enables people to manage their own lives effectively. Life skills
          enhance critical thinking and problem-solving abilities, allowing individuals to make
          informed choices in various situations, both personal and professional. This promotes
          independence and self-reliance.
        </Text>

        <Text style={styles.sectionTitle}>Content: 6 Months</Text>
        <Text style={styles.listItem}>• Balancing work, school, and personal life</Text>
        <Text style={styles.listItem}>• Interview skills and professional etiquette</Text>
        <Text style={styles.listItem}>• Networking and building professional relationships</Text>
        <Text style={styles.listItem}>• Understanding workplace dynamics</Text>
        <Text style={styles.listItem}>• Creative problem-solving techniques</Text>

        <Button title="Go Back" onPress={handleButtonPress} />
        <Button title="Add Course to Cart" onPress={handleAddToCart} />
        <Button
          title="Go to Landscaping Course"
          onPress={() => navigation.navigate('Landscaping')}
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

export default LifeSkillsScreen;
