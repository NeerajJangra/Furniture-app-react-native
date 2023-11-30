import { View, Text, TouchableOpacity,ScrollView, FlatList, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { COLORS, SIZES } from "../constants";
import styles from "./productDetails.style";
import { useNavigation } from "@react-navigation/native";
import Home from "./Home";
import ProductCardView from "../components/products/ProductCardView";
// import { ScrollView } from "react-native-gesture-handler";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("Product Details page opened!");
  }, []);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="heart" color={COLORS.primary} size={30} />
        </TouchableOpacity>
      </View>
    <ScrollView style={styles.container}>
      {/* <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="heart" color={COLORS.primary} size={30} />
        </TouchableOpacity>
      </View> */}
      <Image
        source={{
          uri: "https://deadsounds.com/image/2340/t"
          // uri: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>Rs. 460 </Text>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            nobis aut numquam fugiat rem adipisci cupiditate, placeat suscipit
            vel eaque culpa perferendis voluptates officiis quo id recusandae
            corporis voluptate debitis dolorum sapiente eligendi iusto at ipsum?
            Dolor animi hic natus consequatur fugit soluta vero nulla
            perferendis, adipisci voluptatum nam doloremque impedit quibusdam
            praesentium quod quo, modi deleniti assumenda. Ab, cupiditate eum
            facere aperiam inventore quibusdam enim nesciunt consequuntur
            obcaecati distinctio officia assumenda corporis sit repudiandae,
            natus totam necessitatibus dolores. 
          </Text>
        </View>

        <View style={styles.locationWrapper}>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={20} />
            <Text style={{fontSize: SIZES.medium}}>  Dallas</Text>
          </View>
          <View style={{flexDirection: "row"}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text style={{fontSize: SIZES.medium}}>  Free Delivery</Text>
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
