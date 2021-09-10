import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Tab } from 'react-native-elements';

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#FF8A00',
  },
  button: {
    margin: 0,
    padding: 0,
    width: '100%',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 14,
    color: '#1d2b69',
  },
});

const CategoryTab = ({ fetchArticle }) => {
  const [index, setIndex] = useState(0);
  const categories = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'technology',
  ];
  const onTabChanged = (number) => {
    setIndex(number);
    fetchArticle(categories[number]);
  };
  return (
    <Tab
      value={index}
      onChange={onTabChanged}
      indicatorStyle={styles.indicator}
    >
      <Tab.Item
        buttonStyle={styles.button}
        titleStyle={styles.label}
        title="総合"
      />
      <Tab.Item
        buttonStyle={styles.button}
        titleStyle={styles.label}
        title="経済"
      />
      <Tab.Item
        buttonStyle={styles.button}
        titleStyle={styles.label}
        title="娯楽"
      />
      <Tab.Item
        buttonStyle={styles.button}
        titleStyle={styles.label}
        title="健康"
      />
      <Tab.Item
        buttonStyle={styles.button}
        titleStyle={styles.label}
        title="科学"
      />
      <Tab.Item
        buttonStyle={styles.button}
        titleStyle={styles.label}
        title="IT"
      />
    </Tab>
  );
};

export default CategoryTab;
