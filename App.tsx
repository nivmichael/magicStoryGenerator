import { useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import WebViewScreen from './app/components/WebViewScreen';
import PermissionService from './app/services/permissions';

export default function App() {
  useEffect(() => {
    (async () => {
      await PermissionService.requestCameraPermission();
      await PermissionService.requestLocationPermission();
      await PermissionService.requestMediaPermission();
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <WebViewScreen url="https://app--magic-story-app-v2-main-740d4861.base44.app" />
    </SafeAreaView>
  );
}