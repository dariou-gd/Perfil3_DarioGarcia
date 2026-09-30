import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';

// Prevenir que el splash screen nativo se oculte automáticamente
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Tiempo de espera para mostrar el Splash Screen personalizado (2.5 segundos)
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync().catch(() => {});
      }
    }

    prepare();
  }, []);

  // Pantalla de Splash visual (visible en Web y mientras carga la app)
  if (!appIsReady) {
    return (
      <View style={styles.splashContainer}>
        <StatusBar style="light" />
        <Image
          source={require('./assets/splash-icon.png')}
          style={styles.splashImage}
          resizeMode="contain"
        />
        <Text style={styles.splashTitle}>Rick and Morty App</Text>
        <Text style={styles.splashSubtitle}>Cargando recursos...</Text>
        <ActivityIndicator size="large" color="#38bdf8" style={styles.loader} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  splashImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#38bdf8',
  },
  splashTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 6,
  },
  splashSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 24,
  },
  loader: {
    marginTop: 10,
  },
});
