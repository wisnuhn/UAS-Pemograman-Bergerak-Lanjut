import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,
        StyleSheet, 
        Text, 
        View , 
        Pressable, 
        TextInput, 
        FlatList, 
        ActivityIndicator
        } from 'react-native';
import { useEffect, useState } from 'react';
import ShoppingItem from './component/ShoppingItem';
import { AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
import { db, collection, addDoc, getDocs} from './firebase/index'


export default function App() {
  const [title,setTitle] = useState('');

  const [shoppingList,setShoppingList] = useState([]);

  const addShoppingItem = async() => {
    try {
      const docRef = await addDoc(collection(db, 'shopping'), {
        title: title,
        IsChecked: false,
      });
    
      console.log("Document written with ID: ", docRef.id);
      setTitle('');
    } catch (e) {
      console.error("Error adding document: ", e);
      getShoppingList();
    }
  };

  const getShoppingList = async() => {
    const querySnapshot = await getDocs(collection(db, 'shopping'));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      setShoppingList({
        ...doc.data(),
        id: doc.id,
      });
    });
  };

  useEffect(() => {
    getShoppingList();
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* heading */}
        <Text style={styles.heading}>Shopping List</Text>
        {/* no of item */}
        <Text style={styles.number}>0</Text>
        {/* delete all */}
        <Pressable>
          <MaterialCommunityIcons name="trash-can-outline" size={27} color="black" />
      </Pressable>
      </View>

      {/* flat list */}
      {shoppingList.length > 0 ? (
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => (
        <ShoppingItem 
          title={item.title}
          IsChecked={item.IsChecked}
          id={item.id}
          />
        )}
        keyExtractor={item=>item.id}
      />
      ) : (
        <ActivityIndicator />
      )}

      {/* text input items */}
      <TextInput placeholder='Enter Shopping Item' 
      style={styles.input} 
      value={title} 
      onChangeText={(text)=> setTitle(text)}
      onSubmitEditing={addShoppingItem}
      />
      <ShoppingItem/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:45,
    flex: 5,
    backgroundColor: '#fff',
  },
  header:{
    flexDirection: 'row',
    width:'100%',
    alignSelf:'center',
    padding:10,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom: 15
  },
  heading:{
    fontSize:30,
    fontWeight:'700',
    flex:1
  },
  number:{
    fontSize:20,
    paddingRight: 12
  },
  input:{
    backgroundColor:'lightgrey',
    alignSelf:'center',
    padding:10,
    width:'90%',
    borderRadius:10,
    marginTop:'auto',
    marginBottom:10

  },
});
