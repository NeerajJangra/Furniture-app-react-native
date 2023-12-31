import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style"
import { COLORS, SIZES } from "../../constants";
import  Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather"
// import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Carousel from "./carousel";
import Utils from "../../utils/utils";
import { PERMISSIONS } from "react-native-permissions";


const Welcome = () => {
  const navigation = useNavigation()

  const openCamera = () => {
    Utils.askForPermission(PERMISSIONS.ANDROID.CAMERA)
  }

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
          <TouchableOpacity style={styles.searchBtn} onPress={()=>openCamera()}>
            <Ionicons name="camera-outline" size={SIZES.large} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      
    
    </View>
  );
};

export default Welcome;
