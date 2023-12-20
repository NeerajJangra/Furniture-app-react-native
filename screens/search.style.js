import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: 12,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
        marginVertical: SIZES.medium,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper: {
        flex: 1, 
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput:{
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
        fontFamily: 'Poppins-Regular'
    },
    searchBtn:{
        backgroundColor: COLORS.primary,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium
    }
})

export default styles