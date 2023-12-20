import { View, Text, TouchableOpacity,ScrollView, FlatList, Image, SafeAreaView, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { COLORS, SIZES } from "../constants";
import styles from "./productDetails.style";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetails = ({navigation}) => {
  const {height, width} = useWindowDimensions()
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const {item} = route.params;
  console.log(item)

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <SafeAreaView style={{overflow: 'hidden'}}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name="heart" color={COLORS.primary} size={30} />
        </TouchableOpacity>
      </View>
    <ScrollView style={[styles.container, {height: height, width: width}]}>
      {/* <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="heart" color={COLORS.primary} size={30} />
        </TouchableOpacity>
      </View> */}
      <View style={{height:height/2, width: width}}>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.image}
      />
      </View>
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}> ${item.price} </Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={incrementQuantity}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{quantity}</Text>
            <TouchableOpacity onPress={decrementQuantity}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            {item.description}
          </Text>
        </View>

        <View style={styles.locationWrapper}>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={20} color={'black'} />
            <Text style={{fontSize: SIZES.medium, color: COLORS.black, fontFamily: 'Poppins-SemiBold'}}>{item.product_location}</Text>
          </View>
          <View style={{flexDirection: "row"}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} color={'black'}/>
              <Text style={{fontSize: SIZES.medium, color: COLORS.black, fontFamily: 'Poppins-SemiBold'}}>  Free Delivery</Text>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartText}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{backgroundColor: COLORS.black, padding:10, borderRadius: SIZES.large}}>
            <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
        


      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
