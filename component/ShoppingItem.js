import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
import { useEffect, useState } from 'react';

/*
1. Id
2. Title
3. IsChecked
export type ShoppingItemProps = {
  id: string;
  isChecked: boolean;
  title: string;
  onRefresh: () => void;
} 
*/ 

const ShoppingItem = (props) => {

  const [isChecked,setIsChecked] = useState(props.isChecked);

  return (
    <View style={styles.container}>
      {/* cheked item */}
      <Pressable>
        <AntDesign name="checkcircle" size={24} color="black" />
      </Pressable>
      {/* shopping text */}
      <Text style={styles.title}>
        {props.title}
      </Text>
      {/* delete button */}
      <Pressable>
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default ShoppingItem

const styles = StyleSheet.create({
    container:{
      flexDirection: "row",
      alignSelf: "center",
      backgroundColor: "#282828",
      width: "90%",
      borderRadius: 10,
      padding: 13,
      alignItems: "center",
      marginTop: 15

    },
    title:{
        flex: 1,
        fontWeight:'bold',
    },
})