import * as Camera from 'expo-camera';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';

class PermissionService {
  static async requestCameraPermission() {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      console.error('Camera permission error:', error);
      return false;
    }
  }

  static async requestLocationPermission() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  }

  static async requestMediaPermission() {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    return status === 'granted';
  }

  // Optional check methods
  static async checkCameraPermission() {
    const { status } = await Camera.getCameraPermissionsAsync();
    return status === 'granted';
  }

  static async checkLocationPermission() {
    const { status } = await Location.getForegroundPermissionsAsync();
    return status === 'granted';
  }
}

export default PermissionService;