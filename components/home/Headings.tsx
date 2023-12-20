import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './headings.style'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../constants'
import { Navigation } from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

const Headings = () => {
  const navigation = useNavigation()
  return (
    <View style = {styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Rivals</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('ProductList')}}>
                <Ionicons name='grid' size={24} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Headings