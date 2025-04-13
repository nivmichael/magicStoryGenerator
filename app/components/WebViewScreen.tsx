import { useCallback } from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking'; // Changed from react-native Linking
import React from 'react';

export default function WebViewScreen({ url }: { url: string }) {
  const handleShouldStartLoad = useCallback((request: WebViewNavigation) => {
    // Detect Google auth URLs
    if (request.url.includes('accounts.google.com')) {
      WebBrowser.openAuthSessionAsync(
        request.url, 
        Linking.createURL('/') // Changed from createURL to makeUrl
      );
      return false;
    }
    return true;
  }, []);

  return (
    <WebView
      source={{ uri: url }}
      onShouldStartLoadWithRequest={handleShouldStartLoad}
    />
  );
}