import {Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {check, PERMISSIONS, request} from 'react-native-permissions';
import LocationEnabler from 'react-native-android-location-enabler';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
  locationProvider: 'auto',
});

export default class LocationService {
  static async checkPermission() {
    let permissionStatus = '';

    if (Platform.OS === 'android') {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }

    return permissionStatus;
  }

  static async requestPermission() {
    let permissionStatus = '';

    if (Platform.OS === 'android') {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    } else if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }

    return permissionStatus;
  }

  static async enableLocationServices() {
    if (Platform.OS === 'android') {
      try {
        await LocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000, // Check interval in milliseconds
          fastInterval: 5000, // Fast check interval in milliseconds
        });
        return true;
      } catch (error) {
        return false;
      }
    } else if (Platform.OS === 'ios') {
      return true; // Location services are enabled by default on iOS
    }
  }

  static async getLocation() {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          resolve({latitude, longitude});
        },
        error => {
          reject(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  }
}
