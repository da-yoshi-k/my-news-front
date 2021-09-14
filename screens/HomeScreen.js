import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import CategoryTab from '../components/CategoryTab';
// import axios from "axios";

// ダミーの記事
import generalArticles from '../dummies/generalArticles.json';
import businessArticles from '../dummies/businessArticles.json';
import entertainmentArticles from '../dummies/entertainmentArticles.json';
import healthArticles from '../dummies/healthArticles.json';
import scienceArticles from '../dummies/scienceArticles.json';
import technologyArticles from '../dummies/technologyArticles.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default function HomeScreen({ navigation }) {
  StatusBar.setBarStyle('dark-content', true);
  const [articles, setArticles] = useState(generalArticles);
  useEffect(() => {
    fetchArticles('general');
  }, []);

  const fetchArticles = async (category) => {
    try {
      // TODO バックエンドを実装後差し替え
      // const response = await axios.get(URL);
      // setArticles(response.data.articles);
      console.log(`${category}の記事を取得します。`);
      switch (category) {
        case 'general':
          setArticles(generalArticles);
          break;
        case 'business':
          setArticles(businessArticles);
          break;
        case 'entertainment':
          setArticles(entertainmentArticles);
          break;
        case 'health':
          setArticles(healthArticles);
          break;
        case 'science':
          setArticles(scienceArticles);
          break;
        case 'technology':
          setArticles(technologyArticles);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <CategoryTab fetchArticle={fetchArticles} />
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
