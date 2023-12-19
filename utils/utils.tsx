import {check,RESULTS, request, PERMISSIONS} from 'react-native-permissions';

export default class Utils {
    public static askForPermission = (permission) => {
        request(permission).then(result=>{
        console.log("askForPerm", result)
    })
  }

  public static checkForPermission = (permission) => check(permission)
  .then((result) => {
    switch (result) {
      case RESULTS.DENIED:
        return 'denied'
      case RESULTS.GRANTED:
        return 'granted'
      case RESULTS.BLOCKED:
        return 'blocked'
    }
  })
}     