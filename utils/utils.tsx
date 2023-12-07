import {request, PERMISSIONS} from 'react-native-permissions';

export default class Utils {
    public static askForPermission = permission => {
        request(permission).then(result=>{
        console.log(result)
    })
  }
}     