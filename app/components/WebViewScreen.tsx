import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen({ url }: { url: string }) {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webview}
        allowsInlineMediaPlayback
        javaScriptEnabled
        domStorageEnabled
        sharedCookiesEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});