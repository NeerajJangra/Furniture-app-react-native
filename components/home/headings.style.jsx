
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginHorizontal: 12
    },
    header : {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTitle:{
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontSize: SIZES.xLarge - 2,
        
    }
})

export default styles