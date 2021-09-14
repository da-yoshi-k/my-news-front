import React from 'react';
// import { useSelector } from 'react-redux';
import { StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import articles from '../dummies/generalArticles.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default function ClipScreen({ navigation }) {
  StatusBar.setBarStyle('dark-content', true);
  //   const user = useSelector((state) => state.user);
  //   const { clips } = user;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            author={item.author}
            title={item.title}
            category={item.category}
            onPress={() => navigation.navigate('記事', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
