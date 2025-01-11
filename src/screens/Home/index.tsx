import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import styles from './styles';
import {dataActivity} from '../../data';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>Tarjeta</Text>
        </View>
      </View>

      {/* Recent Activities Section */}
      <View style={styles.activitiesContainer}>
        <Text style={styles.title}>Actividades recientes</Text>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          {dataActivity.map((item, index) => (
            <View key={index} style={styles.activityItem}>
              <Image
                source={item.photoActivity}
                style={styles.activityImage}
                alt={`Imagen de ${item.nameActivity}`}
              />
              <View style={styles.activityInfo}>
                <Text style={styles.amount}>{`$${item.mountActivity.toFixed(
                  2,
                )}`}</Text>
                <Text style={styles.activityDescription}>
                  {item.descriptionActivity}
                </Text>
                <Text style={styles.activityName}>{item.nameActivity}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
