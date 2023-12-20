import { StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        width: SIZES.width-50,
        marginHorizontal: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: SIZES.large,
        backgroundColor:COLORS.primary,
        zIndex: 99,
        top: SIZES.large
    },
    heading: {
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.lightWhite,
        fontSize: SIZES.medium,
        marginLeft: 6,
    }
})

export default styles