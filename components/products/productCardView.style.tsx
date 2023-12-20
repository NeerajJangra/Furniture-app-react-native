import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginEnd:22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    },
    imageContainer: {
        flex: 1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden",
        backgroundColor: COLORS.green
    },
    image: {
        // aspectRatio: 1,
            resizeMode: "cover",
        height: '100%',
        width: '100%'
        
    },
    details: {
        padding: SIZES.small,
    },
    title:{
        fontFamily: "Poppins-Bold",
        fontSize: SIZES.large,

        marginBottom: 1
    },
    supplier: {
        fontFamily: "Poppins-Bold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    price:{
        fontFamily:"Poppins-Bold",
        fontSize: SIZES.medium
    },
    addBtn: {
       position: "absolute",
        right: 0,
        bottom: SIZES.small
    }


})

export default styles;