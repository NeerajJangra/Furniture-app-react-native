import {View, Text, TextInput, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {SIZES, COLORS} from '../constants';
import styles from './search.style';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Utils from '../utils/utils';

const Search = () => {
  const openCamera = () => {
    if(Platform.OS == 'ios'){
      // Utils.askForPermission(PERMISSIONS.IOS.CAMERA)
    } else{
      Utils.askForPermission(PERMISSIONS.ANDROID.CAMERA)
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={openCamera}>
            <Ionicons
              name="camera-outline"
              size={SIZES.large}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
