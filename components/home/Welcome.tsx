import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style"
import { COLORS, SIZES } from "../../constants";
import  Ionicons from "react-native-ionicons";
import Feather from "react-native-vector-icons/Feather"
// import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Carousel from "./carousel";


const Welcome = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black)}>Find The Most</Text>
        <Text style={styles.welcomeText(COLORS.primary)}>Luxurious Furniture</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
        <TextInput value="" onPressIn={()=>{navigation.navigate("Search")}} placeholder="What are you looking for" style={styles.searchInput} />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="camera-outline" size={SIZES.large} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      
    
    </View>
  );
};

export default Welcome;
