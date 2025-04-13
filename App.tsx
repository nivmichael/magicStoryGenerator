import React, { useEffect } from 'react';
import * as Linking from 'expo-linking';
import WebViewScreen from './app/components/WebViewScreen';

export default function App() {
  useEffect(() => {
    const handleDeepLink = ({ url }: { url: string }) => {
      if (url.includes('accounts.google.com')) {
        // Handle successful auth (reload WebView or navigate)
      }
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);
    return () => subscription?.remove();
  }, []);

  return <WebViewScreen url="https://app--magic-story-app-v2-main-740d4861.base44.app" />;
}