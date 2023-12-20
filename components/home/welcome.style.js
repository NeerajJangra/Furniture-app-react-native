import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    welcomeText :(color = COLORS.black)=> ({
        fontSize: SIZES.xLarge + 5,
        fontFamily: 'Poppins-Bold',
        color: color,
        marginHorizontal: 12,
    }),
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
        fontFamily: 'Poppins-Regular',
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn:{
        backgroundColor: COLORS.primary,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium
    }

});

export default styles