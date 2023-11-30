import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './headings.style'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../constants'

const Headings = () => {
  return (
    <View style = {styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Rivals</Text>
            <TouchableOpacity>
                <Ionicons name='grid' size={24} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Headings