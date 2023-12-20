import { StyleSheet, useWindowDimensions } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
  container: {
    // marginTop: SIZES.large,
    // padding:6,
    // backgroundColor: "green",
    // height: "100%"
  },
  upperRow: {
    flexDirection: "row",
    zIndex: 999,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xLarge,
    width: SIZES.width - 44,
    marginHorizontal: 20,
  },
  image: {
    // aspectRatio: 1,
    resizeMode: "cover",
    height: '100%',
    width: '100%',
    backgroundColor: "green",
  },
  details: {
    height: "100%",
    zIndex: 999,
    top: -10,
    paddingBottom: 10,
    // overflow: "scroll",
    // marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    // backgroundColor: "blue",
    // width: SIZES.width-12,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    paddingHorizontal: SIZES.large,
  },
  titleRow: {
    // height: '50%',
    // // marginHorizontal: 20,
    // paddingBottom: SIZES.width,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // width: SIZES.width -44,
    // // top: 20 ,
    // backgroundColor: 'green',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: 'Poppins-Bold',
    color: 'black'
  },
  priceWrapper: {
    borderRadius: SIZES.large,
    backgroundColor: COLORS.secondary,
  },
  price: {
    paddingHorizontal: 10,
    fontSize: SIZES.large,
    fontFamily: 'Poppins-SemiBold',
    color: 'black'
  },
  ratingRow: {
    // paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // top: 5,
    // backgroundColor: 'red'
  },
  rating: {
    flexDirection: "row",
    // padding: SIZES.small,
    paddingVertical: SIZES.small,
    alignItems: "center",
    // marginHorizontal: SIZES.large
  },
  ratingText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    paddingHorizontal: SIZES.small,
    fontFamily:'Poppins-Medium'
  },
  descriptionWrapper: {
    // height: "100%",
    // padding: SIZES.large,
    // backgroundColor: "green",
    paddingBottom: SIZES.medium,
  },
  description: {
    fontSize: SIZES.large - 2,
    fontFamily:'Poppins-Medium',
    color: 'black'

  },
  descText: {
    fontFamily: 'Poppins-Regular',
    textAlign: "justify",
    marginBottom: SIZES.small,
    fontSize: SIZES.small
  },
  locationWrapper: {
    flexDirection: "row",
    backgroundColor: COLORS.secondary,
    justifyContent: "space-between",
    paddingHorizontal: SIZES.medium,
    padding: 5,
    borderRadius: SIZES.large,
    // marginBottom: SIZES.small
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 5,
    alignItems: "center",
    // backgroundColor: "gray",
    // marginHorizontal: 20,
    paddingBottom: SIZES.small,
    width: SIZES.width - 44,
    top: 20,
    marginBottom: 20
  },

  cartBtn: {
    backgroundColor: "black",
    padding: 10,
    // paddingHorizontal: 100,
    paddingEnd: 150,
    borderRadius: SIZES.large 
  },
  cartText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    fontFamily: 'Poppins-SemiBold'
  },
});

export default styles;
