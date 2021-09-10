import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  rightBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
  categoryText: {
    fontSize: 12,
    color: 'gray',
  },
});

const ListItem = ({ imageUrl, title, author, category, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image
            style={{ width: 98, height: 98 }}
            source={{ uri: imageUrl }}
          ></Image>
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <View style={styles.rightBottomContainer}>
          <Text style={styles.subText}>{author}</Text>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
